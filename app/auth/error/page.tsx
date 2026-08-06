export default function AuthError() {
  return (
    <main className="account-page">
      <section className="account-card error-card">
        <p className="eyebrow">ጸገም መእተዊ</p>
        <h1>ከነእትወኩም ኣይከኣልናን።</h1>
        <p>በጃኹም ናብ መበገሲ ገጽ ተመሊስኩም እንደገና ፈትኑ። እቲ ጸገም እንተቐጺሉ፡ ምቕንባራት Cognito ክምርመር የድሊ።</p>
        <div className="account-actions"><a className="primary-button" href="/">ናብ መበገሲ ተመለስ</a></div>
      </section>
    </main>
  );
}
