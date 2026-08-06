import { NextRequest, NextResponse } from "next/server";
import { cognitoEndpoint, getCognitoConfig } from "@/lib/cognito";

export async function GET(request: NextRequest) {
  const config = getCognitoConfig();
  const logoutUrl = new URL(cognitoEndpoint(config.domain, "/logout"));
  logoutUrl.searchParams.set("client_id", config.clientId);
  logoutUrl.searchParams.set("logout_uri", config.logoutUri);
  const response = NextResponse.redirect(logoutUrl);
  for (const name of ["bp_id_token", "bp_access_token", "bp_refresh_token", "bp_oauth_state", "bp_pkce_verifier"]) {
    response.cookies.delete(name);
  }
  return response;
}
