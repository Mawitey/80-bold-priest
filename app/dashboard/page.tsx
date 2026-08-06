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
    const email = typeof payload.email === "string" ? payload.email : "ዝኣተወ ተማሃራይ";

    return (
      <main className="account-page">
        <header className="account-header">
          <a className="brand" href="/"><span className="brand-mark">80</span><span>ተባዕ ካህን</span></a>
          <a className="secondary-button" href="/api/auth/logout">ውጻእ</a>
        </header>
        <section className="account-card">
          <p className="eyebrow">መቆጻጸሪ ገጽ ተማሃራይ</p>
          <h1>እንቋዕ ብደሓን መጻእኩም።</h1>
          <p>መለያኹም ብትኽክል ይሰርሕ ኣሎ። ምርግጋጽ ክፍሊት Stripe ምስ ተወድአ፡ ፍቓድ ትምህርቲ ኣብዚ ክርአ እዩ።</p>
          <span className="account-email">{email}</span>
          <div className="account-actions"><a className="primary-button" href="/#course">ትምህርቲ ርአ</a></div>
        </section>
      </main>
    );
  } catch {
    redirect("/api/auth/login");
  }
}
