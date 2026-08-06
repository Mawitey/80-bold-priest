export default function AuthError() {
  return (
    <main className="account-page">
      <section className="account-card error-card">
        <p className="eyebrow">SIGN-IN ISSUE</p>
        <h1>We couldn&apos;t sign you in.</h1>
        <p>Please return to the homepage and try again. If the problem continues, the Cognito callback settings may need to be checked.</p>
        <div className="account-actions"><a className="primary-button" href="/">Return home</a></div>
      </section>
    </main>
  );
}
