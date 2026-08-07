export default async function AuthError({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;
  return (
    <main className="account-page">
      <section className="account-card error-card">
        <p className="eyebrow">ጸገም መእተዊ</p>
        <h1>ከነእትወኩም ኣይከኣልናን።</h1>
        <p>በጃኹም ናብ መበገሲ ገጽ ተመሊስኩም እንደገና ፈትኑ። እቲ ጸገም እንተቐጺሉ፡ ምቕንባራት Cognito ክምርመር የድሊ።</p>
        {reason ? <p className="diagnostic-code">Diagnostic code: <strong>{reason}</strong></p> : null}
        <div className="account-actions"><a className="primary-button" href="/">ናብ መበገሲ ተመለስ</a></div>
      </section>
    </main>
  );
}
