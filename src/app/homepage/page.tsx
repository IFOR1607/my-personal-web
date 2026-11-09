
"use client";

import { useEffect, useState } from "react";
import styles from "./homepage.module.css";

const articles = [
  {
    category: "PERSONAL",
    date: "NOV 08, 2026",
    title: "The Beginning of My Journey",
    description: "A small beginning to document my thoughts, experiences, and personal journey.",
    slug: "the-beginning-of-my-journey",
  },
  {
    category: "EDUCATION",
    date: "NOV 05, 2026",
    title: "Learning to Understand",
    description: "Learning is not only about collecting knowledge, but understanding life.",
    slug: "learning-to-understand",
  },
  {
    category: "TECHNOLOGY",
    date: "NOV 02, 2026",
    title: "Building Things from Scratch",
    description: "Exploring technology, creating things, and learning through the process.",
    slug: "building-things-from-scratch",
  },
];

const articleVisuals = [styles.visualOne, styles.visualTwo, styles.visualThree];

export default function Home() {
  const [time, setTime] = useState("--:--");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          day: "2-digit",
          month: "long",
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.page}>

      {/* BACKGROUND */}
      <div className={styles.backgroundOverlay} />

      {/* DECORATIVE ALYA */}
      <div className={styles.alyaDecoration}>
        <img src="/images/alya.png" alt="Alya decoration" />
      </div>

      {/* LEFT SIDEBAR */}
      <aside className={`${styles.sidebar} ${styles.glass}`}>
        <a href="/" className={`${styles.sideIcon} ${styles.active}`} title="Home">⌂</a>
        <a href="/blog" className={styles.sideIcon} title="Blog">▤</a>
        <a href="/about" className={styles.sideIcon} title="About">♙</a>
        <a href="#social" className={styles.sideIcon} title="Social">◎</a>
        <div className={styles.sidebarDivider} />
        <button className={`${styles.sideIcon} ${styles.themeButton}`} title="Theme">◐</button>
      </aside>

      {/* MAIN CONTENT */}
      <div className={styles.mainWrapper}>

        {/* TOP BAR */}
        <header className={`${styles.topbar} ${styles.glass}`}>
          <a href="/" className={styles.brand}>
            Red<span>Corp</span><i>.</i>
          </a>

          <div className={styles.topbarRight}>
            <span className={styles.systemStatus}>
              <span className={styles.onlineDot} />
              SYSTEM ONLINE
            </span>
            <div className={styles.topAvatar}>R</div>
          </div>
        </header>

        {/* HERO */}
        <section className={`${styles.heroPanel} ${styles.glass}`}>
          <div className={styles.heroLeft}>
            <div className={styles.clockWidget}>
              <span className={styles.clockTime}>{time}</span>
              <span className={styles.clockDate}>{date}</span>
            </div>

            <div className={styles.welcomeText}>
              <span className={styles.eyebrow}>
                WELCOME TO MY PERSONAL SPACE
              </span>

              <h1>
                Hello, <span>World.</span>
              </h1>

              <p>
                A little corner of the internet where I share
                my thoughts, experiences, ideas, and everything
                in between.
              </p>

              <div className={styles.heroButtons}>
                <a href="/blog" className={styles.primaryButton}>
                  Explore Blog <span>↗</span>
                </a>
                <a href="/about" className={styles.secondaryButton}>
                  About Me
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT WIDGETS */}
          <div className={styles.heroRight}>

            <div className={`${styles.profileWidget} ${styles.glassLight}`}>
              <div className={styles.profileHeading}>
                <div className={styles.profileImage}>
                  <img
                    src="/images/profile.jpeg"
                    alt="My profile"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className={styles.profileFallback}>R</span>
                </div>

                <div>
                  <span className={styles.widgetLabel}>PERSONAL PROFILE</span>
                  <h2>Reviando Christian</h2>
                  <p>Student · Indonesia</p>
                </div>
              </div>

              <p className={styles.profileBio}>
                Curious mind, continuous learner.
                Exploring new things and documenting
                every little journey.
              </p>

              <a href="/about" className={styles.widgetLink}>
                View my profile ↗
              </a>
            </div>

            <div className={styles.miniWidgets}>
              <div className={`${styles.miniWidget} ${styles.glassLight}`}>
                <span className={styles.miniIcon}>✧</span>
                <span className={styles.widgetLabel}>INTERESTS</span>
                <h3>Technology</h3>
                <p>Learning & creating</p>
              </div>

              <div className={`${styles.miniWidget} ${styles.glassLight}`}>
                <span className={styles.miniIcon}>⌘</span>
                <span className={styles.widgetLabel}>CURRENTLY</span>
                <h3>Building</h3>
                <p>RedCorp website</p>
              </div>
            </div>

          </div>
        </section>

        {/* ARTICLES */}
        <section className={`${styles.articlesPanel} ${styles.glass}`}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>MY PERSONAL JOURNAL</span>
              <h2>Latest <span>Articles.</span></h2>
            </div>

            <a href="/blog" className={styles.viewAll}>
              View all ↗
            </a>
          </div>

          <div className={styles.articleGrid}>
            {articles.map((article, index) => (
              <a
                href={`/blog/${article.slug}`}
                className={`${styles.articleCard} ${styles.glassLight}`}
                key={article.slug}
              >
                <div className={`${styles.articleVisual} ${articleVisuals[index]}`}>
                  <span>0{index + 1}</span>
                  <div className={styles.visualSymbol}>✳</div>
                </div>

                <div className={styles.articleInfo}>
                  <div className={styles.articleMeta}>
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>

                  <h3>{article.title}</h3>
                  <p>{article.description}</p>

                  <span className={styles.readMore}>
                    Read more ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className={`${styles.footer} ${styles.glass}`} id="social">
          <div>
            <a href="/" className={styles.brand}>
              Red<span>Corp</span><i>.</i>
            </a>
            <p>A personal space built with curiosity.</p>
          </div>

          <span>© 2026 RedCorp. All rights reserved.</span>
        </footer>

      </div>

      {/* BOTTOM DOCK */}
      <nav className={`${styles.bottomDock} ${styles.glass}`}>
        <a href="/" title="Home">⌂</a>
        <a href="/blog" title="Blog">▤</a>
        <a href="/about" title="About">♙</a>
        <a href="#social" title="Social">◎</a>
      </nav>

    </main>
  );
}
