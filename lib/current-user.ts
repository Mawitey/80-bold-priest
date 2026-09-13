import { cookies } from "next/headers";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { getCognitoConfig } from "@/lib/cognito";

export type CurrentUser = {
  idToken: string;
  email: string;
  subject: string;
};

export async function getCurrentUser(): Promise<CurrentUser | null> {
  const cookieStore = await cookies();
  const idToken = cookieStore.get("bp_id_token")?.value;

  if (!idToken) {
    return null;
  }

  try {
    const config = getCognitoConfig();
    const jwks = createRemoteJWKSet(
      new URL(`${config.issuer}/.well-known/jwks.json`),
    );

    const { payload } = await jwtVerify(idToken, jwks, {
      issuer: config.issuer,
      audience: config.clientId,
    });

    if (
      typeof payload.email !== "string" ||
      typeof payload.sub !== "string"
    ) {
      return null;
    }

    return {
      idToken,
      email: payload.email.toLowerCase(),
      subject: payload.sub,
    };
  } catch (error) {
    console.error("Unable to verify current student", error);
    return null;
  }
}
