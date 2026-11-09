import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Bot,
  Brain,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  Cpu,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  TrendingUp,
} from "lucide-react";
import styles from "./blog-tugas.module.css";

const contents = [
  { id: "realita-pasar-kerja", number: "01", title: "Realita Pasar Kerja" },
  { id: "framework-transisi", number: "02", title: "9 Langkah Transisi Karier" },
  { id: "perkembangan-ai", number: "03", title: "Disrupsi & Risiko Gen AI" },
  { id: "pendidikan-karakter", number: "04", title: "Refleksi Karakter & Mental" },
  { id: "kesimpulan", number: "05", title: "Kesimpulan & Langkah Aksi" },
];

export default function BlogTugasPage() {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlow} />

      <header className={styles.header}>
        <Link href="/homepage" className={styles.brand}>
          RED<span>CORP</span><i>.</i>
        </Link>

        <Link href="/homepage" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Kembali ke Homepage</span>
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.category}>
            <span className={styles.categoryDot} />
            PENDIDIKAN KARAKTER
          </div>

          <h1>
            From Campus
            <br />
            to <span>Career.</span>
          </h1>

          <p className={styles.heroDescription}>
            Catatan, refleksi, dan panduan komprehensif dari sesi sharing alumni
            Telkom University mengenai realita pasar kerja, 9 langkah transisi karier,
            serta strategi navigasi di era disrupsi Generative AI.
          </p>

          <div className={styles.articleMeta}>
            <span><CalendarDays size={15} /> 2026</span>
            <span><Clock3 size={15} /> 9 menit membaca</span>
            <span><BookOpen size={15} /> Guide &amp; Refleksi</span>
          </div>
        </div>

        <div className={styles.heroArtwork} aria-hidden="true">
          <div className={`${styles.orbit} ${styles.orbitOne}`} />
          <div className={`${styles.orbit} ${styles.orbitTwo}`} />
          <div className={`${styles.orbit} ${styles.orbitThree}`} />

          <div className={styles.artCore}>
            <Cpu size={66} strokeWidth={1.1} />
          </div>

          <div className={`${styles.floatingIcon} ${styles.iconOne}`}>
            <Bot size={25} />
          </div>
          <div className={`${styles.floatingIcon} ${styles.iconTwo}`}>
            <Brain size={24} />
          </div>
          <div className={`${styles.floatingIcon} ${styles.iconThree}`}>
            <Sparkles size={22} />
          </div>

          <span className={styles.artLabel}>HUMAN × AI TRANSITION</span>
        </div>
      </section>

      <div className={styles.contentLayout}>
        <article className={styles.article}>
          <div className={styles.articleIntro}>
            <span className={styles.introLabel}>PENGANTAR SESI</span>
            <p>
              Dalam kegiatan mata kuliah <strong>Pendidikan Karakter</strong>, kami
              mendapatkan kesempatan berharga untuk berdiskusi dengan alumni Telkom University
              (S1 Informatika 2015–2019), <strong>Varid Vaya Yusuf</strong>, yang saat ini menjabat
              sebagai <em>Business Architecture Associate Manager</em> di <strong>Accenture</strong>.
            </p>
            <p>
              Sesi ini memberikan gambaran langsung dari praktisi industri mengenai bagaimana
              proses rekrutmen bekerja, tantangan nyata lulusan baru, serta pergeseran kriteria
              keterampilan akibat disrupsi <em>Generative AI</em>.
            </p>
            <p>
              Berikut adalah rangkuman materi selengkapnya beserta refleksi nilai-nilai karakter
              yang perlu dipersiapkan oleh mahasiswa sejak bangku kuliah.
            </p>
          </div>

          <section id="realita-pasar-kerja" className={styles.articleSection}>
            <div className={styles.sectionHeading}>
              <span>01</span>
              <div>
                <span className={styles.sectionEyebrow}>MARKET REALITY</span>
                <h2>Realita Pasar Kerja &amp; Tantangan Lulusan Baru</h2>
              </div>
            </div>

            <p>
              Berdasarkan data dan pengamatan industri, terdapat ketimpangan (<em>gap</em>)
              antara lulusan perguruan tinggi dan standar kebutuhan dunia profesional.
              Beberapa tantangan utama yang sering dihadapi mencakup:
            </p>

            <div className={styles.careerGrid}>
              <div className={styles.careerCard}>
                <div className={`${styles.careerCardIcon} ${styles.mutedIcon}`}>
                  <BriefcaseBusiness size={22} />
                </div>
                <span className={styles.careerTag}>DATA INDUSTRI</span>
                <h3>17 Bulan</h3>
                <p>
                  Rata-rata durasi pencarian kerja pertama yang dibutuhkan oleh lulusan baru
                  tanpa persiapan portofolio yang matang.
                </p>
              </div>

              <div className={styles.careerCard}>
                <div className={`${styles.careerCardIcon} ${styles.accentIcon}`}>
                  <TrendingUp size={22} />
                </div>
                <span className={styles.careerTag}>MISMATCH RATE</span>
                <h3>47,3% Lulusan</h3>
                <p>
                  Persentase lulusan yang bekerja di luar bidang studi yang ditempuh selama
                  masa perkuliahan.
                </p>
              </div>
            </div>

            <p>
              Selain itu, fenomena <em>overqualification</em> atau bekerja di bawah kualifikasi
              formal ijazah sering terjadi akibat terbatasnya jumlah lapangan kerja tingkat
              sarjana (<em>graduate-level jobs</em>), minimnya pengalaman kerja nyata (seperti magang),
              serta pesatnya tuntutan penguasaan keahlian berbasis AI di industri saat ini.
            </p>

            <div className={styles.insightBox}>
              <div className={styles.insightIcon}><Quote size={22} /></div>
              <div>
                <span>INSIGHT UTAMA</span>
                <p>
                  Ijazah semata tidak lagi menjamin kelancaran pencarian kerja. Industri modern
                  menuntut bukti kemampuan nyata, portofolio yang dapat diverifikasi, dan
                  adaptabilitas terhadap perkembangan teknologi terbaru.
                </p>
              </div>
            </div>
          </section>

          <section id="framework-transisi" className={styles.articleSection}>
            <div className={styles.sectionHeading}>
              <span>02</span>
              <div>
                <span className={styles.sectionEyebrow}>TRANSITION FRAMEWORK</span>
                <h2>Framework 9 Langkah Navigasi Transisi Karier</h2>
              </div>
            </div>

            <p>
              Untuk menjembatani perbedaan antara dunia kampus dan industri profesional,
              terdapat kerangka kerja 9 langkah yang terbagi ke dalam 4 fase utama:
            </p>

            <div className={styles.principleList}>
              <div className={styles.principleItem}>
                <span>01</span>
                <div>
                  <h3>FASE 1: Set Your Direction (Langkah 1 - 3)</h3>
                  <p>
                    Lakukan <em>gap analysis</em> antara keahlian saat ini dengan standar kualifikasi target,
                    tentukan target industri dengan spesifik, serta miliki fleksibilitas terhadap
                    peluang karier yang beririsan (<em>adjacent options</em>).
                  </p>
                </div>
              </div>

              <div className={styles.principleItem}>
                <span>02</span>
                <div>
                  <h3>FASE 2: Align &amp; Specialize (Langkah 4 - 5)</h3>
                  <p>
                    Selaraskan proyek perkuliahan, tugas akhir, dan sertifikasi dengan kebutuhan pasar,
                    serta pelajari analisis nilai dan risiko efisiensi penggunaan AI di bidang target.
                  </p>
                </div>
              </div>

              <div className={styles.principleItem}>
                <span>03</span>
                <div>
                  <h3>FASE 3: Prove &amp; Connect (Langkah 6 - 7)</h3>
                  <p>
                    Bangun portofolio karya nyata yang terverifikasi melalui magang, KKN, proyek lab, atau
                    kompetisi, serta bangun relasi profesional berbasis rekam jejak hasil kerja (<em>weak ties</em>).
                  </p>
                </div>
              </div>

              <div className={styles.principleItem}>
                <span>04</span>
                <div>
                  <h3>FASE 4: Keep It Going (Langkah 8 - 9)</h3>
                  <p>
                    Tingkatkan keahlian secara berkelanjutan (<em>iterative learning</em>) dan tetap jaga
                    keseimbangan kesehatan emosional serta orientasi diri selama proses perkembangan karier.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="perkembangan-ai" className={styles.articleSection}>
            <div className={styles.sectionHeading}>
              <span>03</span>
              <div>
                <span className={styles.sectionEyebrow}>AI DISRUPTION</span>
                <h2>Perkembangan Industri, Mitos &amp; Risiko Generative AI</h2>
              </div>
            </div>

            <p>
              Evolusi industri digital dalam 20 tahun terakhir telah bergeser dari era Web dasar (~2000),
              aplikasi mobile (~2010), gelombang <em>startup</em> (~2015), hingga era <em>Generative AI</em> (2022–sekarang).
              Hal ini mengubah peran praktisi teknologi dari sekadar penulisan kode (<em>coder</em>) menjadi perancang
              arsitektur sistem berbasis solusi kecerdasan buatan.
            </p>

            <div className={styles.careerGrid}>
              <div className={styles.careerCard}>
                <div className={`${styles.careerCardIcon} ${styles.accentIcon}`}>
                  <Brain size={22} />
                </div>
                <span className={styles.careerTag}>MITOS VS FAKTA</span>
                <h3>Manusia + AI</h3>
                <p>
                  AI tidak serta-merta menggantikan pekerjaan manusia secara total, melainkan mengubah alur kerja.
                  Sinergi Manusia + AI hanya akan berhasil maksimal jika manusia yang mengoperasikannya sudah memiliki
                  pemahaman dasar yang kuat.
                </p>
              </div>

              <div className={styles.careerCard}>
                <div className={`${styles.careerCardIcon} ${styles.mutedIcon}`}>
                  <ShieldCheck size={22} />
                </div>
                <span className={styles.careerTag}>RISIKO INDUSTRI</span>
                <h3>Risiko Unmonitored AI</h3>
                <p>
                  Penggunaan AI tanpa pengawasan dapat memicu penurunan kualitas (<em>hallucination</em>), celah keamanan
                  sistem (<em>security weakness</em>), hingga pembengkakan biaya operasional (<em>cost overrun</em>).
                </p>
              </div>
            </div>

            <div className={styles.quoteCard}>
              <Quote size={27} />
              <p>
                Generative AI adalah akselerator hebat, tetapi logika mendasar, arsitektur sistem, dan integritas solusi
                tetap berada di bawah kendali penuh manusia.
              </p>
              <span>PRINSIP INTEGRASI AI</span>
            </div>
          </section>

          <section id="pendidikan-karakter" className={styles.articleSection}>
            <div className={styles.sectionHeading}>
              <span>04</span>
              <div>
                <span className={styles.sectionEyebrow}>PERSONAL DEVELOPMENT</span>
                <h2>Refleksi Pendidikan Karakter &amp; Mental Fitness</h2>
              </div>
            </div>

            <p>
              Mata kuliah Pendidikan Karakter memberikan pijakan penting: teknologi dan tren boleh berubah kapan saja,
              tetapi karakter adalah fondasi utama untuk bertahan dan berkembang dalam ekosistem profesional.
            </p>

            <div className={styles.characterList}>
              <div className={styles.characterItem}>
                <div className={styles.characterIcon}><Brain size={23} /></div>
                <div>
                  <h3>Adaptabilitas &amp; Growth Mindset</h3>
                  <p>
                    Ketangguhan untuk terus mempelajari hal baru, beradaptasi saat industri bergeser, dan tidak
                    cepat merasa puas atas pencapaian akademis semata.
                  </p>
                </div>
              </div>

              <div className={styles.characterItem}>
                <div className={styles.characterIcon}><Sparkles size={23} /></div>
                <div>
                  <h3>Berpikir Kritis (Critical Thinking)</h3>
                  <p>
                    Kemampuan mengevaluasi efisiensi, kelebihan, dan risiko dari setiap teknologi atau tren baru
                    secara objektif sebelum menerapkannya.
                  </p>
                </div>
              </div>

              <div className={styles.characterItem}>
                <div className={styles.characterIcon}><ShieldCheck size={23} /></div>
                <div>
                  <h3>Integritas &amp; Keseimbangan Mental</h3>
                  <p>
                    Menjaga kejujuran dan etika dalam memanfaatkan AI, serta mengelola ekspektasi dan kesehatan mental
                    selama menjalani masa pencarian kerja.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="kesimpulan" className={styles.conclusion}>
            <span className={styles.sectionEyebrow}>STEPS AHEAD</span>
            <h2>3 Langkah Utama Persiapan Mahasiswa Hari Ini</h2>
            <p>
              Sebagai rangkuman, ada tiga tindakan konkret yang bisa langsung diterapkan oleh mahasiswa semester ini:
            </p>
            <p>
              <strong>1. Kerjakan Proyek Nyata &amp; Terverifikasi:</strong> Manfaatkan program magang, KKN, riset lab,
              atau kompetisi untuk membangun portofolio pembuktian.<br />
              <strong>2. Bidik Target Pasar Kerja dengan Tepat:</strong> Pahami struktur industri dan tetap terbuka
              terhadap peluang karier yang beririsan.<br />
              <strong>3. Kuasai AI secara Proporsional:</strong> Pelajari di mana AI memberikan nilai efisiensi dan
              kenali batasan teknisnya agar tidak salah dalam pengaplikasian.
            </p>
            <div className={styles.conclusionFooter}>
              <span>END OF ARTICLE</span>
              <Sparkles size={19} />
            </div>
          </section>

          <div className={styles.articleEnd}>
            <span>TERIMA KASIH TELAH MEMBACA</span>
            <div />
            <span>REDCORP JOURNAL</span>
          </div>
        </article>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <span className={styles.sidebarEyebrow}>IN THIS ARTICLE</span>
            <h3>Daftar Isi</h3>

            <nav className={styles.toc}>
              {contents.map((item) => (
                <a href={`#${item.id}`} key={item.id}>
                  <span>{item.number}</span>
                  {item.title}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.sidebarQuote}>
            <Quote size={23} />
            <p>
              The future belongs to those who learn, adapt, and build real-world proof.
            </p>
            <span>CAREER MINDSET</span>
          </div>

          <div className={styles.sidebarNote}>
            <div className={styles.noteIcon}><BookOpen size={19} /></div>
            <div>
              <strong>Catatan Mahasiswa</strong>
              <p>
                Daftar poin dan rangkuman reflektif dari pertemuan alumni Telkom University
                dalam mata kuliah Pendidikan Karakter.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <footer className={styles.footer}>
        <Link href="/homepage" className={styles.footerBrand}>
          RED<span>CORP</span><i>.</i>
        </Link>
        <p>© 2026 RedCorp Journal. Crafted with curiosity.</p>
        <span>VANILLA · IVORY · CRIMSON</span>
      </footer>
    </main>
  );
}