"use client";

import { LanguageSwitcher, useLanguage } from "./LanguageProvider";
import { useState } from "react";

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

const kibriAmlakParts = [1, 2, 3, 4, 5, 9, 10, 11, 12];

export default function Home() {
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = language === "ti" ? {
    brand: "ተባዕ ካህን",
    courses: "ትምህርቲ",
    included: "እንታይ የጠቓልል",
    login: "እቶ",
    menu: "ዝርዝር",
    close: "ዕጾ",
    eyebrow: "80 ተባዕ ካህን • ትምህርቲ ብኢንተርነት",
    title: "80 ተባዕ ካህን",
    subtitle: "ቤተ መጻሕፍቲ ቪድዮ",
    intro: "ካብ ዝደለኻዮ መሳርሒ፡ ብናትካ ፍጥነት ክትከታተሎ እትኽእል ዝተዳለወ ትምህርቲ ቪድዮ።",
    categories: "4 ምድባት",
    lessons: "ትምህርቲ ቪድዮ",
    quality: "720p ልዑል ጽሬት",
    once: "ሓንሳብ ጥራይ ዝኽፈል",
    enroll: "ንፈተና ተመዝገብ",
    testNote: "እዚ ናይ ፈተና ክፍሊት ጥራይ እዩ — ናይ ሓቂ ገንዘብ ኣይክፈልን።",
    yourCourse: "ትምህርትኻ",
    lifetime: "9 ትምህርቲ። ናይ ህይወት ምሉእ ፍቓድ።",
    returnText: "ሓንሳብ ግዝኡ፡ ብመእተዊኹም እተዉ፡ ክትቅጽሉ ድሉዋት ምስ ኮንኩም ድማ ናብ ትምህርትኹም ተመለሱ።",
    videoLesson: "ትምህርቲ ቪድዮ",
    lessonTitle: "ክብሪ ኣምላኽ (1ይ ክፋል)",
    locked: "ክሳዕ ዝግዛእ ዕጹው እዩ",
    easy: "ቀሊልን ውሑስን",
    everything: "ብምቾት ንምምሃር ዘድልየካ ኩሉ።",
    benefits: [
      ["ውሑስ መእተዊ", "ዝተመዝገቡ ተማሃሮ ጥራይ ነቲ ትምህርቲ ክኸፍትዎ ይኽእሉ።"],
      ["ኣብ ዝኾነ ቦታ ተማሃር", "ብስልክኻ፡ ታብሌትካ ወይ ኮምፒዩተርካ ተኸታተል።"],
      ["ኣብ ዝደለኹሞ ግዜ ተመለሱ", "ንትምህርቲ ዘለኩም ፍቓድ ተዓቂቡ ክጸንሕ እዩ።"],
    ],
    footer: "ትምህርቲ ብኢንተርነት፡ ንኹሉ ቀሊል።",
  } : {
    brand: "Bold Priest",
    courses: "Courses",
    included: "What is included",
    login: "Log in",
    menu: "Menu",
    close: "Close",
    eyebrow: "80 Bold Priest • Online learning",
    title: "80 Bold Priest",
    subtitle: "Video Library",
    intro: "Video teaching you can watch on any device, at your own pace, wherever you are.",
    categories: "4 categories",
    lessons: "Video lessons",
    quality: "720p HD",
    once: "One-time payment",
    enroll: "Test enrollment",
    testNote: "This is a test payment only—no real money will be charged.",
    yourCourse: "Your course",
    lifetime: "9 video lessons. Lifetime access.",
    returnText: "Purchase once, sign in securely, and return to your lessons whenever you are ready.",
    videoLesson: "Video lesson",
    lessonTitle: "Glory of God (Part 1)",
    locked: "Locked until purchased",
    easy: "Simple and secure",
    everything: "Everything you need to learn comfortably.",
    benefits: [
      ["Secure access", "Only registered students with course access can open the lessons."],
      ["Learn anywhere", "Watch on your phone, tablet, or computer."],
      ["Return anytime", "Your course access remains available when you return."],
    ],
    footer: "Online learning made simple for everyone.",
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="መበገሲ ገጽ 80 ተባዕ ካህን">
          <span className="brand-mark">80</span>
          <span>{t.brand}</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? t.close : t.menu}
        </button>
        <nav id="main-navigation" className={menuOpen ? "mobile-open" : ""} aria-label="ቀንዲ መምርሒ">
          <a href="#course" onClick={() => setMenuOpen(false)}>{t.courses}</a>
          <a href="#included" onClick={() => setMenuOpen(false)}>{t.included}</a>
          <LanguageSwitcher />
          <a className="login-button" href="/api/auth/login">
            {t.login}
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-orange" />
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title} <span>{t.subtitle}</span></h1>
          <p className="intro">{t.intro}</p>
          <div className="hero-meta">
            <span>{t.categories}</span>
            <span className="dot" />
            <span>{t.lessons}</span>
            <span className="dot" />
            <span>{t.quality}</span>
          </div>
          <div className="purchase-row">
            <div className="price"><small>{t.once}</small><strong>$500</strong></div>
            <a
              className="primary-button"
              href="https://buy.stripe.com/test_dRmcN550ubc5eLM1nG7bW00"
              target="_blank"
              rel="noreferrer"
              aria-label="ናይዚ ትምህርቲ ናይ ፈተና ክፍሊት ክፈት"
            >
              {t.enroll}
            </a>
          </div>
          <p className="setup-note">{t.testNote}</p>
        </div>

        <div className="course-visual" aria-label="ስእሊ ትምህርቲ 80 ተባዕ ካህን">
          <div className="logo-frame">
            <img src="/bold-priest-logo.png" alt="ኣርማ 80 ተባዕ ካህን" />
          </div>
          <div className="play-badge"><PlayIcon /></div>
        </div>
      </section>

      <section className="course-section" id="course">
        <div className="section-heading">
          <p className="eyebrow">{t.yourCourse}</p>
          <h2>{t.lifetime}</h2>
          <p>{t.returnText}</p>
        </div>

        <div className="public-category-heading">
          <span>{language === "ti" ? "ምድብ" : "Category"}</span>
          <h3>{language === "ti" ? "ክብሪ ኣምላኽ" : "Kibri Amlak"}</h3>
        </div>
        <div className="lesson-list">
          {kibriAmlakParts.map((part) => (
            <article className="lesson-card" key={part}>
              <div className="lesson-number">{String(part).padStart(2, "0")}</div>
              <div className="lesson-info">
                <span>{t.videoLesson}</span>
                <h3>{language === "ti" ? `ክብሪ ኣምላኽ (${part}ይ ክፋል)` : `Glory of God (Part ${part})`}</h3>
              </div>
              <div className="locked">{t.locked}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="included-section" id="included">
        <div>
          <p className="eyebrow">{t.easy}</p>
          <h2>{t.everything}</h2>
        </div>
        <div className="benefit-grid">
          {t.benefits.map(([title, text]) => (
            <article className="benefit" key={title}>
              <span className="check"><CheckIcon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">80</span><span>{t.brand}</span></div>
        <p>{t.footer}</p>
        <p>© 2026 80 {t.brand}</p>
      </footer>
    </main>
  );
}
