
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
} from "lucide-react";
import styles from "./blog-tugas.module.css";

const contents = [
  { id: "perkembangan-teknologi", number: "01", title: "Perkembangan Tren Teknologi" },
  { id: "pasar-kerja", number: "02", title: "Dinamika Pasar Kerja" },
  { id: "kolaborasi-ai", number: "03", title: "Berkolaborasi dengan AI Agent" },
  { id: "pendidikan-karakter", number: "04", title: "Refleksi Pendidikan Karakter" },
  { id: "kesimpulan", number: "05", title: "Kesimpulan" },
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
            Menavigasi Karir
            <br />
            di Era <span>AI.</span>
          </h1>

          <p className={styles.heroDescription}>
            Catatan, refleksi, dan insight dari sesi sharing alumni
            mengenai masa depan teknologi, dinamika industri, dan
            karakter yang dibutuhkan untuk menghadapi dunia kerja.
          </p>

          <div className={styles.articleMeta}>
            <span><CalendarDays size={15} /> 2026</span>
            <span><Clock3 size={15} /> 7 menit membaca</span>
            <span><BookOpen size={15} /> Artikel refleksi</span>
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

          <span className={styles.artLabel}>HUMAN × TECHNOLOGY</span>
        </div>
      </section>

      <div className={styles.contentLayout}>
        <article className={styles.article}>
          <div className={styles.articleIntro}>
            <span className={styles.introLabel}>PENGANTAR</span>
            <p>
              Sebagai mahasiswa, kesempatan untuk bertemu dan berdiskusi
              langsung dengan alumni yang telah terjun ke dunia kerja
              selalu memberikan perspektif baru. Dalam rangkaian kegiatan
              mata kuliah <strong>Pendidikan Karakter</strong>, kami
              mendapatkan kesempatan berharga untuk menyerap pengalaman
              dari seorang alumni yang kini berkarier sebagai{" "}
              <strong>Software Architect</strong>.
            </p>
            <p>
              Sesi tersebut bukan sekadar ruang berbagi pengalaman,
              melainkan kesempatan untuk memahami bagaimana dunia
              profesional berkembang dan mempersiapkan diri menghadapi
              perubahan industri yang semakin cepat.
            </p>
            <p>
              Dari diskusi tersebut, ada beberapa poin penting yang
              menarik untuk direnungkan, mulai dari perkembangan
              Artificial Intelligence hingga karakter yang perlu
              dibangun oleh calon profesional.
            </p>
          </div>

          <section id="perkembangan-teknologi" className={styles.articleSection}>
            <div className={styles.sectionHeading}>
              <span>01</span>
              <div>
                <span className={styles.sectionEyebrow}>TECHNOLOGY TRENDS</span>
                <h2>Perkembangan Tren Teknologi: Dari Masa ke Masa Hingga Era AI</h2>
              </div>
            </div>

            <p>
              Teknologi tidak pernah berhenti bergerak. Alumni membuka
              sesi dengan mengulas bagaimana tren teknologi berevolusi
              dari masa ke masa, mulai dari era komputerisasi awal,
              perkembangan web dan aplikasi seluler, hingga hadirnya
              Artificial Intelligence (AI) yang kini menjadi salah satu
              pusat perhatian industri global.
            </p>

            <p>
              Berbagai perusahaan teknologi berlomba-lomba mengembangkan
              produk AI dan menginvestasikan sumber daya dalam jumlah
              besar. Perkembangan ini membawa banyak peluang, tetapi
              sekaligus memunculkan pertanyaan kritis: apakah pertumbuhan
              AI saat ini mencerminkan revolusi jangka panjang, atau
              terdapat kemungkinan terjadinya fenomena{" "}
              <em>technology bubble</em>?
            </p>

            <div className={styles.insightBox}>
              <div className={styles.insightIcon}><Quote size={22} /></div>
              <div>
                <span>INSIGHT PEMIKIRAN</span>
                <p>
                  Antusiasme pasar terhadap teknologi belum tentu selalu
                  sejalan dengan nilai manfaat yang benar-benar dihasilkan.
                  Karena itu, kita perlu memanfaatkan AI secara produktif
                  sekaligus tetap kritis dalam menilai perkembangan dan
                  keberlanjutannya.
                </p>
              </div>
            </div>

            <p>
              Fenomena <em>bubble effect</em> dapat terjadi ketika
              ekspektasi dan nilai investasi meningkat jauh melampaui
              kemampuan atau manfaat nyata suatu teknologi. Hal ini
              mengingatkan kita bahwa mengikuti tren saja tidak cukup.
              Mahasiswa perlu memahami alasan di balik perkembangan
              teknologi, manfaatnya, serta risiko yang mungkin muncul.
            </p>
          </section>

          <section id="pasar-kerja" className={styles.articleSection}>
            <div className={styles.sectionHeading}>
              <span>02</span>
              <div>
                <span className={styles.sectionEyebrow}>CAREER LANDSCAPE</span>
                <h2>Dinamika Pasar Kerja: Profesi yang Meredup dan yang Naik Daun</h2>
              </div>
            </div>

            <p>
              Perubahan teknologi turut mengubah kebutuhan tenaga kerja.
              Otomatisasi membuat sejumlah pekerjaan yang bersifat
              repetitif dan administratif dapat dikerjakan dengan lebih
              cepat oleh sistem. Di sisi lain, muncul kebutuhan baru
              terhadap tenaga profesional yang mampu mengelola
              kompleksitas teknologi.
            </p>

            <div className={styles.careerGrid}>
              <div className={styles.careerCard}>
                <div className={`${styles.careerCardIcon} ${styles.mutedIcon}`}>
                  <BriefcaseBusiness size={22} />
                </div>
                <span className={styles.careerTag}>BERTRANSFORMASI</span>
                <h3>Declining Roles</h3>
                <p>
                  Pekerjaan yang didominasi tugas repetitif, klerikal,
                  dan eksekusi dasar semakin terdampak otomatisasi.
                </p>
              </div>

              <div className={styles.careerCard}>
                <div className={`${styles.careerCardIcon} ${styles.accentIcon}`}>
                  <Cpu size={22} />
                </div>
                <span className={styles.careerTag}>BERKEMBANG</span>
                <h3>Emerging Roles</h3>
                <p>
                  Peran seperti AI/ML Engineer, Data Engineer, dan
                  Software Architect semakin relevan dalam ekosistem
                  teknologi modern.
                </p>
              </div>
            </div>

            <p>
              Sebagai seorang Software Architect, alumni menjelaskan
              bahwa pekerjaan profesional tidak hanya berfokus pada
              kemampuan menulis kode atau <em>coding</em>. Lebih dari
              itu, diperlukan kemampuan merancang arsitektur sistem
              yang skalabel, aman, efisien, dan sesuai dengan kebutuhan
              bisnis.
            </p>

            <p>
              Artinya, kemampuan teknis perlu disertai pemahaman
              menyeluruh terhadap masalah yang ingin diselesaikan.
              Seorang profesional tidak hanya dituntut mengetahui
              bagaimana membuat sesuatu, tetapi juga memahami mengapa
              solusi tersebut perlu dibuat.
            </p>
          </section>

          <section id="kolaborasi-ai" className={styles.articleSection}>
            <div className={styles.sectionHeading}>
              <span>03</span>
              <div>
                <span className={styles.sectionEyebrow}>AI COLLABORATION</span>
                <h2>Seni Berkolaborasi dengan AI Agent Secara Efektif</h2>
              </div>
            </div>

            <p>
              Salah satu pembahasan paling praktis dalam sesi sharing
              tersebut adalah cara memanfaatkan AI Agent ketika
              mengerjakan proyek. AI dapat membantu mempercepat proses
              kerja, tetapi bukan berarti seluruh tanggung jawab dapat
              diserahkan begitu saja kepada teknologi.
            </p>

            <p>
              Hasil yang diberikan AI sangat dipengaruhi oleh konteks,
              instruksi, dan arahan yang diberikan penggunanya. Oleh
              karena itu, terdapat beberapa prinsip yang perlu
              diperhatikan:
            </p>

            <div className={styles.principleList}>
              <div className={styles.principleItem}>
                <span>01</span>
                <div>
                  <h3>Pahami Batasan AI</h3>
                  <p>
                    AI merupakan alat bantu yang memiliki keterbatasan.
                    Instruksi yang kurang jelas dapat menghasilkan
                    jawaban yang keliru atau tidak sesuai kebutuhan.
                  </p>
                </div>
              </div>

              <div className={styles.principleItem}>
                <span>02</span>
                <div>
                  <h3>Kendalikan Arsitektur dan Logika</h3>
                  <p>
                    Manusia tetap perlu memahami struktur proyek,
                    alur kerja, dan keputusan teknis. AI sebaiknya
                    menjadi asisten, bukan pengganti pemahaman.
                  </p>
                </div>
              </div>

              <div className={styles.principleItem}>
                <span>03</span>
                <div>
                  <h3>Lakukan Validasi dan Verifikasi</h3>
                  <p>
                    Setiap hasil dari AI perlu diperiksa, diuji, dan
                    ditinjau kembali. Kecepatan eksekusi harus
                    diimbangi dengan ketelitian.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.quoteCard}>
              <Quote size={27} />
              <p>
                AI dapat mempercepat pekerjaan, tetapi pemahaman dan
                tanggung jawab tetap berada di tangan manusia.
              </p>
              <span>CATATAN REFLEKTIF</span>
            </div>
          </section>

          <section id="pendidikan-karakter" className={styles.articleSection}>
            <div className={styles.sectionHeading}>
              <span>04</span>
              <div>
                <span className={styles.sectionEyebrow}>PERSONAL DEVELOPMENT</span>
                <h2>Refleksi Pendidikan Karakter: Kunci Bertahan di Tengah Perubahan</h2>
              </div>
            </div>

            <p>
              Mengapa pembahasan tentang tren teknologi dan dunia kerja
              disampaikan dalam mata kuliah Pendidikan Karakter?
              Karena perkembangan teknologi bukan hanya menuntut
              kemampuan teknis, tetapi juga kualitas pribadi yang
              mendukung seseorang dalam mengambil keputusan dan
              bertanggung jawab atas pekerjaannya.
            </p>

            <p>
              Dari diskusi tersebut, terdapat tiga nilai karakter
              yang menurut saya penting untuk dikembangkan sebagai
              mahasiswa:
            </p>

            <div className={styles.characterList}>
              <div className={styles.characterItem}>
                <div className={styles.characterIcon}><Brain size={23} /></div>
                <div>
                  <h3>Adaptabilitas &amp; Growth Mindset</h3>
                  <p>
                    Kemampuan menyesuaikan diri terhadap perubahan,
                    terbuka terhadap pengetahuan baru, dan menjadikan
                    tantangan sebagai kesempatan untuk berkembang.
                  </p>
                </div>
              </div>

              <div className={styles.characterItem}>
                <div className={styles.characterIcon}><Sparkles size={23} /></div>
                <div>
                  <h3>Berpikir Kritis</h3>
                  <p>
                    Tidak mudah mengikuti tren tanpa pertimbangan.
                    Setiap perkembangan perlu dianalisis berdasarkan
                    manfaat, risiko, dan dampaknya.
                  </p>
                </div>
              </div>

              <div className={styles.characterItem}>
                <div className={styles.characterIcon}><ShieldCheck size={23} /></div>
                <div>
                  <h3>Integritas dan Tanggung Jawab</h3>
                  <p>
                    Menggunakan teknologi secara bijak dan etis,
                    menjaga kejujuran dalam proses belajar, serta
                    bertanggung jawab terhadap hasil pekerjaan.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Ketiga nilai tersebut saling melengkapi. Kemampuan
              beradaptasi membantu kita menghadapi perubahan,
              berpikir kritis membantu menentukan arah, sedangkan
              integritas memastikan setiap keputusan dilakukan
              dengan tanggung jawab.
            </p>
          </section>

          <section id="kesimpulan" className={styles.conclusion}>
            <span className={styles.sectionEyebrow}>FINAL REFLECTION</span>
            <h2>Teknologi berubah. Karakter menjadi fondasi.</h2>
            <p>
              Pertemuan dengan alumni yang berprofesi sebagai Software
              Architect memberikan gambaran yang lebih realistis
              mengenai dunia kerja saat ini. Industri tidak hanya
              membutuhkan individu yang menguasai tools atau bahasa
              pemrograman tertentu, tetapi juga pembelajar sepanjang
              hayat yang memiliki fondasi logika kuat, kemampuan
              beradaptasi, dan karakter yang tangguh.
            </p>
            <p>
              Bagi saya, pelajaran terpenting dari sesi ini adalah
              bahwa teknologi seharusnya menjadi sarana untuk
              berkembang, bukan sesuatu yang membuat kita berhenti
              berpikir. Kita perlu terus belajar, berani mengeksplorasi
              hal baru, dan tetap bertanggung jawab atas setiap
              keputusan yang diambil.
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
              The future belongs to those who keep learning,
              adapting, and thinking critically.
            </p>
            <span>LEARNING MINDSET</span>
          </div>

          <div className={styles.sidebarNote}>
            <div className={styles.noteIcon}><BookOpen size={19} /></div>
            <div>
              <strong>Catatan mahasiswa</strong>
              <p>
                Sebuah rangkuman dan refleksi dari sesi sharing
                alumni dalam mata kuliah Pendidikan Karakter.
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
