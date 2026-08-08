import { LanguageSwitcher, LocalizedText } from "../../LanguageProvider";

export default async function AuthError({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;
  return (
    <main className="account-page">
      <header className="account-header">
        <a className="brand" href="/"><span className="brand-mark">80</span><span><LocalizedText ti="ተባዕ ካህን" en="Bold Priest" /></span></a>
        <LanguageSwitcher />
      </header>
      <section className="account-card error-card">
        <p className="eyebrow"><LocalizedText ti="ጸገም መእተዊ" en="Login problem" /></p>
        <h1><LocalizedText ti="ከነእትወኩም ኣይከኣልናን።" en="We could not log you in." /></h1>
        <p><LocalizedText ti="በጃኹም ናብ መበገሲ ገጽ ተመሊስኩም እንደገና ፈትኑ። እቲ ጸገም እንተቐጺሉ፡ ምቕንባራት Cognito ክምርመር የድሊ።" en="Return to the home page and try again. If the problem continues, the login configuration needs to be checked." /></p>
        {reason ? <p className="diagnostic-code"><LocalizedText ti="መለለዪ ጸገም" en="Diagnostic code" />: <strong>{reason}</strong></p> : null}
        <div className="account-actions"><a className="primary-button" href="/"><LocalizedText ti="ናብ መበገሲ ተመለስ" en="Return home" /></a></div>
      </section>
    </main>
  );
}
