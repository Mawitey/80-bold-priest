import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { getCognitoConfig } from "@/lib/cognito";

export default async function Dashboard() {
  const token = (await cookies()).get("bp_id_token")?.value;
  if (!token) redirect("/api/auth/login");

  try {
    const config = getCognitoConfig();
    const jwks = createRemoteJWKSet(new URL(`${config.issuer}/.well-known/jwks.json`));
    const { payload } = await jwtVerify(token, jwks, {
      issuer: config.issuer,
      audience: config.clientId,
    });
    const email = typeof payload.email === "string" ? payload.email : "Signed-in student";

    return (
      <main className="account-page">
        <header className="account-header">
          <a className="brand" href="/"><span className="brand-mark">80</span><span>Bold Priest</span></a>
          <a className="secondary-button" href="/api/auth/logout">Log out</a>
        </header>
        <section className="account-card">
          <p className="eyebrow">STUDENT DASHBOARD</p>
          <h1>Welcome.</h1>
          <p>Your customer account is working. Course access will appear here after the Stripe payment-verification step is connected.</p>
          <span className="account-email">{email}</span>
          <div className="account-actions"><a className="primary-button" href="/#course">View course</a></div>
        </section>
      </main>
    );
  } catch {
    redirect("/api/auth/login");
  }
}
