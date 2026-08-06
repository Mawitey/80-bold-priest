import { createHash, randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { cognitoEndpoint, getCognitoConfig } from "@/lib/cognito";

function base64url(value: Buffer) {
  return value.toString("base64url");
}

export async function GET() {
  const config = getCognitoConfig();
  const state = base64url(randomBytes(32));
  const verifier = base64url(randomBytes(48));
  const challenge = base64url(createHash("sha256").update(verifier).digest());

  const authorizeUrl = new URL(cognitoEndpoint(config.domain, "/oauth2/authorize"));
  authorizeUrl.searchParams.set("client_id", config.clientId);
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("redirect_uri", config.redirectUri);
  authorizeUrl.searchParams.set("scope", "openid email profile");
  authorizeUrl.searchParams.set("state", state);
  authorizeUrl.searchParams.set("code_challenge", challenge);
  authorizeUrl.searchParams.set("code_challenge_method", "S256");

  const response = NextResponse.redirect(authorizeUrl);
  const cookieOptions = { httpOnly: true, secure: true, sameSite: "lax" as const, maxAge: 600, path: "/" };
  response.cookies.set("bp_oauth_state", state, cookieOptions);
  response.cookies.set("bp_pkce_verifier", verifier, cookieOptions);
  return response;
}
