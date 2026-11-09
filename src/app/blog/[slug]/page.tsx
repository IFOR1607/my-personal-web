// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';

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


interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  // 1. Ambil nilai slug dari params (Gunakan await karena Next.js 15+ asynchronous)
  const { slug } = await params;

  // 2. Cari artikel di data dummy yang slug-nya cocok dengan URL
  const article = articles.find((item) => item.slug === slug);

  // 3. Jika slug acak/tidak ditemukan di data dummy, tampilkan halaman 404
  if (!article) {
    notFound();
  }

  // 4. Tampilkan data artikel yang berhasil ditemukan
  return (
    <div className="article-detail">
      <img src={article.thumbnail} alt={article.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <h1>{article.title}</h1>
      <p><strong>Kategori:</strong> {article.category} | {article.date}</p>
      <hr />
      <div className="article-content">
        {/* Di sini nanti isi konten lengkap blog Anda */}
        <p>{article.excerpt}</p> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </div>
  );
}
