"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  Plus,
  Tags,
  Images,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Bell,
  Eye,
  CheckCircle2,
  FileEdit,
  TrendingUp,
  ArrowUpRight,
  ArrowRight,
  MoreHorizontal,
  Pencil,
  Trash2,
  Activity,
  Globe,
  Clock3,
} from "lucide-react";

import styles from "./dashboard.module.css";

const navigation = [
  { label: "Overview", icon: LayoutDashboard, href: "/control-panel/dashboard", active: true },
  { label: "Articles", icon: FileText, href: "/control-panel/articles" },
  { label: "Create Article", icon: Plus, href: "/control-panel/articles/new" },
  { label: "Categories", icon: Tags, href: "/control-panel/categories" },
  { label: "Media Library", icon: Images, href: "/control-panel/media" },
  { label: "Comments", icon: MessageSquare, href: "/control-panel/comments" },
  { label: "Website Settings", icon: Settings, href: "/control-panel/settings" },
];

const stats = [
  { label: "Total Articles", value: "24", change: "+12%", icon: FileText, tone: "red" },
  { label: "Published", value: "20", change: "+11%", icon: CheckCircle2, tone: "green" },
  { label: "Drafts", value: "4", change: "0%", icon: FileEdit, tone: "amber" },
  { label: "Total Views", value: "12.5K", change: "+18%", icon: Eye, tone: "purple" },
];

const articles = [
  {
    title: "Mengenal Teknologi AI di Era Modern",
    category: "Teknologi",
    status: "Published",
    date: "08 Nov 2026",
    image: "/images/articles/technology.jpg",
  },
  {
    title: "Tips Produktivitas untuk Pelajar",
    category: "Lifestyle",
    status: "Published",
    date: "06 Nov 2026",
    image: "/images/articles/journey.jpg",
  },
  {
    title: "Sejarah Singkat RedCorp",
    category: "Company",
    status: "Draft",
    date: "04 Nov 2026",
    image: "/images/articles/reflection.jpg",
  },
];

export default function DashboardPage() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.backgroundOverlay} />

      <aside className={styles.sidebar}>
        <Link href="/homepage" className={styles.brand}>
          <div className={styles.brandLogo}>R</div>
          <div>
            <strong>RedCorp</strong>
            <span>Control Panel</span>
          </div>
        </Link>

        <div className={styles.navLabel}>WORKSPACE</div>

        <nav className={styles.navigation}>
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                href={item.href}
                key={item.label}
                className={`${styles.navItem} ${item.active ? styles.navActive : ""}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
                {item.active && <span className={styles.activeDot} />}
              </Link>
            );
          })}
        </nav>

        <div className={styles.sidebarBottom}>
          <div className={styles.sidebarVersion}>
            <span className={styles.versionDot} />
            RedCorp CMS v1.0.0
          </div>

          <Link href="/control-panel/login" className={styles.logout}>
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      <section className={styles.mainArea}>
        <header className={styles.topbar}>
          <div className={styles.breadcrumb}>
            <span>RedCorp</span>
            <span>/</span>
            <strong>Overview</strong>
          </div>

          <div className={styles.topbarActions}>
            <label className={styles.searchBox}>
              <Search size={17} />
              <input placeholder="Search anything..." />
              <kbd>⌘ K</kbd>
            </label>

            <button className={styles.iconButton} aria-label="Notifications">
              <Bell size={19} />
              <span className={styles.notificationDot} />
            </button>

            <div className={styles.adminProfile}>
              <div className={styles.adminAvatar}>A</div>
              <div className={styles.adminInfo}>
                <strong>Administrator</strong>
                <span>Super Admin</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <section className={styles.welcome}>
            <div className={styles.welcomeText}>
              <span className={styles.eyebrow}>YOUR CREATIVE WORKSPACE</span>
              <h1>Welcome back, Admin!</h1>
              <p>Here&apos;s what&apos;s happening with your blog today.</p>
              <div className={styles.welcomeStatus}>
                <span />
                All systems operational
              </div>
            </div>

            <div className={styles.character}>
              <Image
                src="/images/alya.png"
                alt="RedCorp dashboard character"
                fill
                priority
                sizes="(max-width: 768px) 0px, 360px"
                className={styles.characterImage}
              />
            </div>
          </section>

          <section className={styles.statsGrid}>
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article className={styles.statCard} key={stat.label}>
                  <div className={`${styles.statIcon} ${styles[stat.tone]}`}>
                    <Icon size={20} />
                  </div>
                  <div className={styles.statContent}>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                    <small>
                      <TrendingUp size={13} />
                      {stat.change} this month
                    </small>
                  </div>
                  <ArrowUpRight className={styles.statArrow} size={17} />
                </article>
              );
            })}
          </section>

          <section className={styles.middleGrid}>
            <article className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <span className={styles.panelEyebrow}>PERFORMANCE</span>
                  <h2>Blog Analytics</h2>
                </div>
                <select className={styles.periodSelect} defaultValue="7">
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 90 days</option>
                </select>
              </div>

              <div className={styles.analyticsSummary}>
                <strong>12,580</strong>
                <span><TrendingUp size={14} /> 18.4%</span>
                <small>Total page views</small>
              </div>

              <div className={styles.chart}>
                <div className={styles.chartGrid}>
                  <span>8K</span>
                  <span>6K</span>
                  <span>4K</span>
                  <span>2K</span>
                  <span>0</span>
                </div>
                <svg viewBox="0 0 600 170" preserveAspectRatio="none" className={styles.chartSvg}>
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a51f36" stopOpacity=".24" />
                      <stop offset="100%" stopColor="#a51f36" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 130 C45 110 55 65 110 82 S180 130 235 90 S300 40 355 70 S420 105 475 42 S540 35 600 55 L600 170 L0 170 Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M0 130 C45 110 55 65 110 82 S180 130 235 90 S300 40 355 70 S420 105 475 42 S540 35 600 55"
                    fill="none"
                    stroke="#9d2438"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className={styles.chartDays}>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </article>

            <article className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <span className={styles.panelEyebrow}>SHORTCUTS</span>
                  <h2>Quick Actions</h2>
                </div>
                <MoreHorizontal size={20} />
              </div>

              <div className={styles.quickActions}>
                <Link href="/control-panel/articles/new" className={styles.quickPrimary}>
                  <div><Plus size={19} /></div>
                  <span>
                    <strong>Create Article</strong>
                    <small>Write a new story</small>
                  </span>
                  <ArrowRight size={17} />
                </Link>

                <Link href="/control-panel/media" className={styles.quickItem}>
                  <Images size={19} />
                  <span>Manage Media</span>
                  <ArrowRight size={16} />
                </Link>

                <Link href="/control-panel/categories" className={styles.quickItem}>
                  <Tags size={19} />
                  <span>Manage Categories</span>
                  <ArrowRight size={16} />
                </Link>

                <Link href="/control-panel/settings" className={styles.quickItem}>
                  <Settings size={19} />
                  <span>Website Settings</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          </section>

          <section className={styles.bottomGrid}>
            <article className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <span className={styles.panelEyebrow}>CONTENT MANAGEMENT</span>
                  <h2>Recent Articles</h2>
                </div>
                <Link href="/control-panel/articles" className={styles.viewAll}>
                  View all <ArrowRight size={15} />
                </Link>
              </div>

              <div className={styles.articleList}>
                {articles.map((article) => (
                  <div className={styles.articleRow} key={article.title}>
                    <div className={styles.articleThumb}>
                      <Image src={article.image} alt="" fill sizes="64px" />
                    </div>
                    <div className={styles.articleDetails}>
                      <strong>{article.title}</strong>
                      <span>{article.category}</span>
                    </div>
                    <span className={`${styles.status} ${article.status === "Draft" ? styles.draft : styles.published}`}>
                      {article.status}
                    </span>
                    <span className={styles.articleDate}>{article.date}</span>
                    <div className={styles.articleActions}>
                      <button aria-label="Edit article"><Pencil size={15} /></button>
                      <button aria-label="Delete article"><Trash2 size={15} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className={`${styles.panel} ${styles.sitePanel}`}>
              <div className={styles.panelHeader}>
                <div>
                  <span className={styles.panelEyebrow}>WEBSITE HEALTH</span>
                  <h2>Website Status</h2>
                </div>
                <Activity size={19} />
              </div>

              <div className={styles.onlineStatus}>
                <div className={styles.onlineIcon}><CheckCircle2 size={25} /></div>
                <div>
                  <strong>Website is Online</strong>
                  <span>Everything looks good.</span>
                </div>
              </div>

              <div className={styles.healthStats}>
                <div>
                  <span>Availability</span>
                  <strong>99.9%</strong>
                </div>
                <div>
                  <span>Last checked</span>
                  <strong><Clock3 size={13} /> Just now</strong>
                </div>
              </div>

              <Link href="/homepage" target="_blank" className={styles.websiteLink}>
                <Globe size={16} />
                Visit Website
                <ArrowUpRight size={15} />
              </Link>
            </article>
          </section>

          <footer className={styles.footer}>
            <span>© 2026 RedCorp. Made with care.</span>
            <span>Control Panel · v1.0.0</span>
          </footer>
        </div>
      </section>
    </main>
  );
}   