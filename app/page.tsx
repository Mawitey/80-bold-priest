const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5.5v13l10-6.5L8 5.5Z" fill="currentColor" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12.5 4.2 4.2L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="80 Bold Priest home">
          <span className="brand-mark">80</span>
          <span>80 Bold Priest</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#course">Course</a>
          <a href="#included">What&apos;s included</a>
          <button className="login-button" type="button" disabled title="Login will be connected next">
            Log in
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-orange" />
        <div className="hero-copy">
          <p className="eyebrow">80 BOLD PRIEST • ONLINE LEARNING</p>
          <h1 lang="ti">ክብሪ ኣምላኽ <span>(1ይ ክፋል)</span></h1>
          <p className="intro">A focused video teaching you can watch at your own pace, from any device.</p>
          <div className="hero-meta">
            <span>1 video lesson</span>
            <span className="dot" />
            <span>59 minutes</span>
            <span className="dot" />
            <span>720p HD</span>
          </div>
          <div className="purchase-row">
            <div className="price"><small>One-time payment</small><strong>$500</strong></div>
            <a
              className="primary-button"
              href="https://buy.stripe.com/test_dRmcN550ubc5eLM1nG7bW00"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Stripe test checkout for this course"
            >
              Test enrollment
            </a>
          </div>
          <p className="setup-note">Test checkout only — no real payment will be collected. Student login will be connected before launch.</p>
        </div>

        <div className="course-visual" aria-label="80 Bold Priest course artwork">
          <div className="logo-frame">
            <img src="/bold-priest-logo.png" alt="80 Bold Priest logo with blue water and orange fire" />
          </div>
          <div className="play-badge"><PlayIcon /></div>
          <span className="duration">59:26</span>
        </div>
      </section>

      <section className="course-section" id="course">
        <div className="section-heading">
          <p className="eyebrow">YOUR COURSE</p>
          <h2>One lesson. Lifetime access.</h2>
          <p>Purchase once, sign in, and return to your lesson whenever you&apos;re ready to continue.</p>
        </div>

        <article className="lesson-card">
          <div className="lesson-number">01</div>
          <div className="lesson-info">
            <span>Video lesson</span>
            <h3 lang="ti">ክብሪ ኣምላኽ (1ይ ክፋል)</h3>
          </div>
          <div className="lesson-duration">59:26</div>
          <div className="locked">Locked until purchase</div>
        </article>
      </section>

      <section className="included-section" id="included">
        <div>
          <p className="eyebrow">SIMPLE & SECURE</p>
          <h2>Everything you need to learn comfortably.</h2>
        </div>
        <div className="benefit-grid">
          {[
            ["Protected access", "Only enrolled students will be able to open the lesson."],
            ["Learn anywhere", "Watch on your phone, tablet, or computer."],
            ["Return anytime", "Your account will remember your course access."],
          ].map(([title, text]) => (
            <article className="benefit" key={title}>
              <span className="check"><CheckIcon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">80</span><span>80 Bold Priest</span></div>
        <p>Online teaching, made accessible.</p>
        <p>© 2026 80 Bold Priest</p>
      </footer>
    </main>
  );
}
