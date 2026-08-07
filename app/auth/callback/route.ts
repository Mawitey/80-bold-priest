import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { cognitoEndpoint, getCognitoConfig } from "@/lib/cognito";

export async function GET(request: NextRequest) {
  const config = getCognitoConfig();
  const siteUrl = new URL(config.logoutUri);
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const error = request.nextUrl.searchParams.get("error");
  const cookieStore = await cookies();
  const expectedState = cookieStore.get("bp_oauth_state")?.value;
  const verifier = cookieStore.get("bp_pkce_verifier")?.value;

  if (error || !code || !state || state !== expectedState || !verifier) {
    return NextResponse.redirect(new URL("/auth/error", siteUrl));
  }

  const tokenResponse = await fetch(cognitoEndpoint(config.domain, "/oauth2/token"), {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      authorization: `Basic ${Buffer.from(`${config.clientId}:${config.clientSecret}`).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: config.clientId,
      code,
      redirect_uri: config.redirectUri,
      code_verifier: verifier,
    }),
    cache: "no-store",
  });

  if (!tokenResponse.ok) {
    return NextResponse.redirect(new URL("/auth/error", siteUrl));
  }

  const tokens = (await tokenResponse.json()) as {
    id_token: string;
    access_token: string;
    refresh_token?: string;
    expires_in?: number;
  };
  const response = NextResponse.redirect(new URL("/dashboard", siteUrl));
  const tokenOptions = { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/", maxAge: tokens.expires_in ?? 3600 };
  response.cookies.set("bp_id_token", tokens.id_token, tokenOptions);
  response.cookies.set("bp_access_token", tokens.access_token, tokenOptions);
  if (tokens.refresh_token) {
    response.cookies.set("bp_refresh_token", tokens.refresh_token, { ...tokenOptions, maxAge: 60 * 60 * 24 * 5 });
  }
  response.cookies.delete("bp_oauth_state");
  response.cookies.delete("bp_pkce_verifier");
  return response;
}
