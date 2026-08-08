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
        <a className="brand" href="#top" aria-label="መበገሲ ገጽ 80 ተባዕ ካህን">
          <span className="brand-mark">80</span>
          <span>ተባዕ ካህን</span>
        </a>
        <nav aria-label="ቀንዲ መምርሒ">
          <a href="#course">ትምህርቲ</a>
          <a href="#included">እንታይ የጠቓልል</a>
          <a className="login-button" href="/api/auth/login">
            እቶ
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-orange" />
        <div className="hero-copy">
          <p className="eyebrow">80 ተባዕ ካህን • ትምህርቲ ብኢንተርነት</p>
          <h1>80 Bold Priest <span>Video Library</span></h1>
          <p className="intro">ካብ ዝደለኻዮ መሳርሒ፡ ብናትካ ፍጥነት ክትከታተሎ እትኽእል ዝተዳለወ ትምህርቲ ቪድዮ።</p>
          <div className="hero-meta">
            <span>4 Categories</span>
            <span className="dot" />
            <span>59 ደቓይቕ</span>
            <span className="dot" />
            <span>720p HD</span>
          </div>
          <div className="purchase-row">
            <div className="price"><small>ሓንሳብ ጥራይ ዝኽፈል</small><strong>$500</strong></div>
            <a
              className="primary-button"
              href="https://buy.stripe.com/test_dRmcN550ubc5eLM1nG7bW00"
              target="_blank"
              rel="noreferrer"
              aria-label="ናይዚ ትምህርቲ ናይ ፈተና ክፍሊት ክፈት"
            >
              ንፈተና ተመዝገብ
            </a>
          </div>
          <p className="setup-note">እዚ ናይ ፈተና ክፍሊት ጥራይ እዩ — ናይ ሓቂ ገንዘብ ኣይክፈልን።</p>
        </div>

        <div className="course-visual" aria-label="ስእሊ ትምህርቲ 80 ተባዕ ካህን">
          <div className="logo-frame">
            <img src="/bold-priest-logo.png" alt="ኣርማ 80 ተባዕ ካህን" />
          </div>
          <div className="play-badge"><PlayIcon /></div>
          <span className="duration">59:26</span>
        </div>
      </section>

      <section className="course-section" id="course">
        <div className="section-heading">
          <p className="eyebrow">ትምህርትኻ</p>
          <h2>9 ትምህርቲ። ናይ ህይወት ምሉእ ፍቓድ።</h2>
          <p>ሓንሳብ ግዝኡ፡ ብመእተዊኹም እተዉ፡ ክትቅጽሉ ድሉዋት ምስ ኮንኩም ድማ ናብ ትምህርትኹም ተመለሱ።</p>
        </div>

        <article className="lesson-card">
          <div className="lesson-number">01</div>
          <div className="lesson-info">
            <span>ትምህርቲ ቪድዮ</span>
            <h3 lang="ti">ክብሪ ኣምላኽ (1ይ ክፋል)</h3>
          </div>
          <div className="lesson-duration">59:26</div>
          <div className="locked">ክሳዕ ዝግዛእ ዕጹው እዩ</div>
        </article>
      </section>

      <section className="included-section" id="included">
        <div>
          <p className="eyebrow">ቀሊልን ውሑስን</p>
          <h2>ብምቾት ንምምሃር ዘድልየካ ኩሉ።</h2>
        </div>
        <div className="benefit-grid">
          {[
            ["ውሑስ መእተዊ", "ዝተመዝገቡ ተማሃሮ ጥራይ ነቲ ትምህርቲ ክኸፍትዎ ይኽእሉ።"],
            ["ኣብ ዝኾነ ቦታ ተማሃር", "ብስልክኻ፡ ታብሌትካ ወይ ኮምፒዩተርካ ተኸታተል።"],
            ["ኣብ ዝደለኹሞ ግዜ ተመለሱ", "ንትምህርቲ ዘለኩም ፍቓድ ተዓቂቡ ክጸንሕ እዩ።"],
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
        <div className="brand"><span className="brand-mark">80</span><span>ተባዕ ካህን</span></div>
        <p>ትምህርቲ ብኢንተርነት፡ ንኹሉ ቀሊል።</p>
        <p>© 2026 80 ተባዕ ካህን</p>
      </footer>
    </main>
  );
}
