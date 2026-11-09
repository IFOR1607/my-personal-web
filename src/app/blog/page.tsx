
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./blog.module.css";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Search,
  BookOpen,
} from "lucide-react";

type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  featured?: boolean;
  thumbnail: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "Hasil Pembahasan Pertemuan alumni",
    slug: "pertemuan-alumni",
    excerpt:
      "Every journey starts somewhere. This is a little story about my beginnings, ambitions, and the things I want to explore.",
    category: "Personal",
    date: "2026-11-08",
    readingTime: 4,
    featured: true,
    thumbnail: "/images/articles/journey.jpg",
  },
  {
    id: 2,
    title: "Learning to Build Something",
    slug: "learning-to-build-something",
    excerpt:
      "A collection of thoughts and experiences while learning to create something from scratch.",
    category: "Technology",
    date: "2026-11-05",
    readingTime: 5,
    thumbnail: "/images/articles/technology.jpg",
  },
  {
    id: 3,
    title: "Small Things, Big Lessons",
    slug: "small-things-big-lessons",
    excerpt:
      "Sometimes the smallest experiences teach us the most meaningful lessons.",
    category: "Reflection",
    date: "2026-11-01",
    readingTime: 3,
    thumbnail: "/images/articles/reflection.jpg",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(articles.map((article) => article.category))),
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredArticle = articles.find((article) => article.featured);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        article.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className={styles.page}>
      <div className={styles.shell}>

        {/* NAVIGATION */}
        <nav className={styles.navigation}>
          <Link
            href="/"
            className={styles.backLink}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <Link
            href="/"
            className={styles.brand}
          >
            RedCorp<span>.</span>
          </Link>

          <span className={styles.journalLabel}>
            JOURNAL
          </span>
        </nav>

        {/* PAGE INTRO */}
        <section className={styles.intro}>
          <p className={styles.eyebrow}>
            A COLLECTION OF THOUGHTS
          </p>

          <h1 className={styles.title}>
            Stories, ideas
            <br />
            <span className={styles.titleAccent}>
              & reflections.
            </span>
          </h1>

          <p className={styles.introCopy}>
            A personal space where I share experiences, thoughts,
            discoveries, and everything worth remembering.
          </p>
        </section>

        {/* FEATURED ARTICLE */}
        {featuredArticle && (
          <section className={styles.featuredSection}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionRule} />
              <p>
                FEATURED STORY
              </p>
            </div>

            <Link
              href={`/blog/${featuredArticle.slug}`}
              className={styles.featuredLink}
            >
              <div className={styles.featuredVisual}>
                <img
                  src={featuredArticle.thumbnail}
                  alt={featuredArticle.title}
                  className={styles.featuredImage}
                />
                <span className={styles.featuredBadge}>
                  FEATURED
                </span>
              </div>

              <div className={styles.featuredContent}>
                <span className={styles.articleCategory}>
                  {featuredArticle.category.toUpperCase()}
                </span>

                <h2 className={styles.featuredTitle}>
                  {featuredArticle.title}
                </h2>

                <p className={styles.articleExcerpt}>
                  {featuredArticle.excerpt}
                </p>

                <div className={styles.metadata}>
                  <span>{formatDate(featuredArticle.date)}</span>
                  <span>·</span>
                  <span className={styles.metadataItem}>
                    <Clock3 size={13} />
                    {featuredArticle.readingTime} min read
                  </span>
                </div>

                <div className={styles.readMore}>
                  Read article
                  <ArrowUpRight
                    size={17}
                    className={styles.readMoreArrow}
                  />
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ARTICLE COLLECTION */}
        <section>
          <div className={styles.archiveHeading}>
            <div>
              <p className={styles.archiveEyebrow}>
                THE ARCHIVE
              </p>
              <h2 className={styles.archiveTitle}>
                All Articles
              </h2>
            </div>

            <p className={styles.resultCount}>
              {filteredArticles.length} articles found
            </p>
          </div>

          {/* SEARCH */}
          <div className={styles.searchBox}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search stories..."
              className={styles.searchInput}
            />
          </div>

          {/* CATEGORY FILTER */}
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${styles.categoryButton} ${activeCategory === category ? styles.categoryButtonActive : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ARTICLE CARDS */}
          {filteredArticles.length > 0 ? (
            <div className={styles.articleGrid}>
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className={styles.articleCard}
                >
                  <div className={styles.articleImageFrame}>
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className={styles.articleImage}
                    />
                  </div>

                  <div className={styles.articleContent}>
                    <span className={styles.articleCategory}>
                      {article.category.toUpperCase()}
                    </span>

                    <h3 className={styles.articleTitle}>
                      {article.title}
                    </h3>

                    <p className={styles.articleExcerpt}>
                      {article.excerpt}
                    </p>

                    <div className={styles.articleMetadata}>
                      <span>{formatDate(article.date)}</span>
                      <span className={styles.metadataItem}>
                        <Clock3 size={12} />
                        {article.readingTime} min
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <BookOpen size={28} className={styles.emptyIcon} />
              <h3 className={styles.emptyTitle}>No articles found</h3>
              <p className={styles.emptyText}>
                Try another search keyword or category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className={styles.clearFilters}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <p>© 2026 RedCorp. All thoughts reserved.</p>
            <Link href="/" className={styles.footerLink}>
              Back to homepage <ArrowRight size={14} />
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
