
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity, Award, Bell, BellRing, CheckCircle2, Coins, Coffee,
  Cpu, CreditCard, GraduationCap, LayoutDashboard, PackageCheck,
  PenTool, Recycle, RotateCcw, Trash2, TrendingUp, X,
} from "lucide-react";
import Chart from "chart.js/auto";
import styles from "./ecosmart.module.css";

type Bin = {
  id: string; name: string; code: string;
  organik: number; anorganik: number; lastSync: string;
};
type Student = {
  nim: string; name: string; faculty: string;
  sorted: number; points: number;
};
type Log = {
  time: string; user: string; type: string;
  location: string; status: string; delta: string;
};
type Toast = {
  id: number; title: string; message: string;
  color: "emerald" | "rose" | "amber";
};

const initialBins: Bin[] = [
  { id: "bin-gate2", name: "Area Gate 2 Telkom Univ", code: "ESB-01", organik: 88, anorganik: 74, lastSync: "Baru saja" },
  { id: "bin-gku", name: "Gedung Kuliah Umum (GKU)", code: "ESB-02", organik: 45, anorganik: 62, lastSync: "2 mnt lalu" },
  { id: "bin-kantin", name: "Kantin Teknik & Pujasera", code: "ESB-03", organik: 76, anorganik: 58, lastSync: "1 mnt lalu" },
  { id: "bin-asrama", name: "Asrama Putra Gedung A", code: "ESB-04", organik: 32, anorganik: 41, lastSync: "4 mnt lalu" },
];

const initialStudents: Student[] = [
  { nim: "103032600155", name: "Evita Khairani", faculty: "Telkom University", sorted: 142, points: 1380 },
  { nim: "103032600125", name: "Muhammad Rafi Al-Ghazali", faculty: "Telkom University", sorted: 128, points: 1250 },
  { nim: "103032600111", name: "Muhammad Rofi Nurzihad", faculty: "Telkom University", sorted: 115, points: 1110 },
  { nim: "103032600159", name: "Raditya Putra Ramadan", faculty: "Telkom University", sorted: 98, points: 960 },
  { nim: "103032600102", name: "Raffi Adz Dzikry", faculty: "Telkom University", sorted: 84, points: 815 },
  { nim: "103032600200", name: "James Jayasena", faculty: "Telkom University", sorted: 72, points: 700 },
];

const initialLogs: Log[] = [
  { time: "11:58", user: "Evita Khairani (103032600155)", type: "Organik (Basah)", location: "Area Gate 2", status: "Tepat", delta: "+10" },
  { time: "11:54", user: "Mode Anonim (Publik)", type: "Anorganik (Kering)", location: "Kantin Teknik", status: "Tepat", delta: "Publik" },
  { time: "11:49", user: "Muhammad Rafi Al-Ghazali (103032600125)", type: "Anorganik (Kering)", location: "Gedung Kuliah Umum", status: "Tepat", delta: "+10" },
  { time: "11:42", user: "Muhammad Rofi Nurzihad (103032600111)", type: "Koreksi Otomatis", location: "Area Gate 2", status: "Koreksi", delta: "-5" },
  { time: "11:35", user: "Mode Anonim (Publik)", type: "Organik (Basah)", location: "Asrama Putra", status: "Tepat", delta: "Publik" },
];

const rewards = [
  { id: "rew-1", title: "Voucher Kopi & Snack Kantin", cost: 300, stock: "Tersedia", icon: Coffee },
  { id: "rew-2", title: "Paket Alat Tulis Ramah Lingkungan", cost: 500, stock: "Tersedia", icon: PenTool },
  { id: "rew-3", title: "Klaim Poin TAK Keaktifan Lingkungan", cost: 1000, stock: "Terverifikasi", icon: GraduationCap },
];

const navItems = [
  { id: "overview", label: "Ringkasan & Analitik", icon: LayoutDashboard },
  { id: "bins", label: "Monitoring Tong (OB)", icon: Trash2 },
  { id: "students", label: "Portal e-Card & Poin", icon: Award },
  { id: "logs", label: "Live Feed Sensor", icon: Activity },
];

function formatNumber(value: number) {
  return value.toLocaleString("id-ID");
}

function level(pct: number) {
  if (pct >= 85) return { bar: styles.roseBar, text: styles.roseText, badge: styles.roseBadge, label: "Penuh — Alert OB" };
  if (pct >= 70) return { bar: styles.amberBar, text: styles.amberText, badge: styles.amberBadge, label: "Hampir Penuh" };
  return { bar: styles.greenBar, text: styles.greenText, badge: styles.greenBadge, label: "Normal" };
}

export default function EcoSmartBinPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [bins, setBins] = useState(initialBins);
  const [students, setStudents] = useState(initialStudents);
  const [logs, setLogs] = useState(initialLogs);
  const [selectedNim, setSelectedNim] = useState(initialStudents[0].nim);
  const [chartMode, setChartMode] = useState<"mvp" | "max">("mvp");
  const [modalOpen, setModalOpen] = useState(false);
  const [simMode, setSimMode] = useState<"ktm" | "anon">("ktm");
  const [simStudent, setSimStudent] = useState(initialStudents[0].nim);
  const [simLocation, setSimLocation] = useState("bin-gate2");
  const [simAction, setSimAction] = useState("organik-valid");
  const [totalItems, setTotalItems] = useState(1284);
  const [totalWeight, setTotalWeight] = useState(142.5);
  const [validCount, setValidCount] = useState(1109);
  const [invalidCount, setInvalidCount] = useState(175);
  const [ktmCount, setKtmCount] = useState(950);
  const [anonCount, setAnonCount] = useState(334);
  const [compositionMVP, setCompositionMVP] = useState({ organik: 540, anorganik: 744 });
  const [compositionMax, setCompositionMax] = useState({ biodegradable: 540, nonBiodegradable: 482, metal: 178, unsorted: 84 });
  const [hourlyKtm, setHourlyKtm] = useState([22, 48, 76, 95, 134, 148, 112, 98, 88, 64, 42, 23]);
  const [hourlyAnon, setHourlyAnon] = useState([8, 16, 25, 32, 49, 54, 41, 35, 29, 21, 15, 9]);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const compositionCanvas = useRef<HTMLCanvasElement>(null);
  const activityCanvas = useRef<HTMLCanvasElement>(null);
  const compositionChart = useRef<Chart | null>(null);
  const activityChart = useRef<Chart | null>(null);
  const toastId = useRef(0);

  const selectedStudent = students.find(s => s.nim === selectedNim) ?? students[0];
  const totalPoints = students.reduce((sum, student) => sum + student.points, 0) + 9335;
  const accuracy = validCount + invalidCount > 0
    ? ((validCount / (validCount + invalidCount)) * 100).toFixed(1).replace(".", ",")
    : "0,0";
  const fullBins = bins.filter(bin => bin.organik >= 85 || bin.anorganik >= 85).length;
  const ktmPct = Math.round((ktmCount / (ktmCount + anonCount)) * 100);
  const anonPct = 100 - ktmPct;

  const chartComposition = useMemo(() => {
    if (chartMode === "mvp") {
      return {
        labels: ["Organik / Basah", "Anorganik / Kering"],
        data: [compositionMVP.organik, compositionMVP.anorganik],
        colors: ["#10b981", "#f59e0b"],
      };
    }
    return {
      labels: ["Biodegradable", "Non-biodegradable", "Metal Waste", "Unsorted / Mixed"],
      data: [compositionMax.biodegradable, compositionMax.nonBiodegradable, compositionMax.metal, compositionMax.unsorted],
      colors: ["#10b981", "#f59e0b", "#64748b", "#8b5cf6"],
    };
  }, [chartMode, compositionMVP, compositionMax]);

  useEffect(() => {
    if (!compositionCanvas.current || !activityCanvas.current) return;

    compositionChart.current?.destroy();
    activityChart.current?.destroy();

    compositionChart.current = new Chart(compositionCanvas.current, {
      type: "doughnut",
      data: {
        labels: chartComposition.labels,
        datasets: [{ data: chartComposition.data, backgroundColor: chartComposition.colors, borderWidth: 0, hoverOffset: 6 }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "68%",
        plugins: { legend: { display: false }, tooltip: { backgroundColor: "#0f172a", padding: 12, cornerRadius: 10 } },
      },
    });

    activityChart.current = new Chart(activityCanvas.current, {
      type: "bar",
      data: {
        labels: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
        datasets: [
          { label: "Scan KTM / e-Card", data: hourlyKtm, backgroundColor: "#10b981", borderRadius: 6, barPercentage: 0.65 },
          { label: "Mode Anonim (Publik)", data: hourlyAnon, backgroundColor: "#0284c7", borderRadius: 6, barPercentage: 0.65 },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { color: "#64748b" } },
          y: { stacked: true, border: { display: false }, grid: { color: "#f1f5f9" }, ticks: { color: "#64748b" } },
        },
        plugins: { legend: { position: "top", align: "end", labels: { usePointStyle: true, pointStyle: "circle", boxWidth: 8, color: "#334155" } } },
      },
    });

    return () => {
      compositionChart.current?.destroy();
      activityChart.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (compositionChart.current) {
      compositionChart.current.data.labels = chartComposition.labels;
      compositionChart.current.data.datasets[0].data = chartComposition.data;
      compositionChart.current.data.datasets[0].backgroundColor = chartComposition.colors;
      compositionChart.current.update();
    }
  }, [chartComposition]);

  useEffect(() => {
    if (activityChart.current) {
      activityChart.current.data.datasets[0].data = hourlyKtm;
      activityChart.current.data.datasets[1].data = hourlyAnon;
      activityChart.current.update();
    }
  }, [hourlyKtm, hourlyAnon]);

  function showToast(title: string, message: string, color: Toast["color"] = "emerald") {
    const id = ++toastId.current;
    setToasts(current => [...current, { id, title, message, color }]);
    window.setTimeout(() => setToasts(current => current.filter(toast => toast.id !== id)), 4200);
  }

  function switchTab(tab: string) {
    setActiveTab(tab);
    document.getElementById(`section-${tab}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function emptyBin(binId: string) {
    const bin = bins.find(item => item.id === binId);
    if (!bin) return;
    setBins(current => current.map(item => item.id === binId
      ? { ...item, organik: 0, anorganik: 0, lastSync: "Baru dikosongkan OB" }
      : item));
    showToast("Wadah Dikosongkan", `Petugas OB telah mengosongkan unit ${bin.name} (0%).`);
  }

  function redeemReward(rewardId: string) {
    const reward = rewards.find(item => item.id === rewardId);
    if (!reward || !selectedStudent) return;

    if (selectedStudent.points < reward.cost) {
      showToast("Poin Tidak Cukup", `Saldo ${selectedStudent.name} (${selectedStudent.points} poin) belum mencukupi untuk ${reward.title}.`, "rose");
      return;
    }

    setStudents(current => current.map(student => student.nim === selectedNim
      ? { ...student, points: student.points - reward.cost }
      : student));
    showToast("Penukaran Berhasil!", `${selectedStudent.name} menukar ${reward.cost} poin dengan ${reward.title}.`);
  }

  function submitSimulation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const bin = bins.find(item => item.id === simLocation);
    const student = students.find(item => item.nim === simStudent);
    const isKtm = simMode === "ktm";
    const isCorrect = simAction !== "koreksi-invalid";
    const isOrganic = simAction === "organik-valid";
    const typeLabel = isCorrect
      ? isOrganic ? "Organik (Basah)" : "Anorganik (Kering)"
      : "Koreksi Otomatis";
    const pointDelta = isKtm ? isCorrect ? 10 : -5 : 0;

    setTotalItems(value => value + 1);
    setTotalWeight(value => value + 0.15);
    if (isKtm) {
      setKtmCount(value => value + 1);
      setHourlyKtm(current => current.map((value, index) => index === 5 ? value + 1 : value));
    } else {
      setAnonCount(value => value + 1);
      setHourlyAnon(current => current.map((value, index) => index === 5 ? value + 1 : value));
    }

    if (isCorrect) setValidCount(value => value + 1);
    else setInvalidCount(value => value + 1);

    setCompositionMVP(current => ({
      ...current,
      [isOrganic ? "organik" : "anorganik"]: current[isOrganic ? "organik" : "anorganik"] + 1,
    }));
    setCompositionMax(current => ({
      ...current,
      [isOrganic && isCorrect ? "biodegradable" : !isCorrect ? "unsorted" : "nonBiodegradable"]:
        current[isOrganic && isCorrect ? "biodegradable" : !isCorrect ? "unsorted" : "nonBiodegradable"] + 1,
    }));

    if (bin) {
      setBins(current => current.map(item => item.id === bin.id
        ? {
            ...item,
            organik: Math.min(100, item.organik + (isOrganic ? 4 : 0)),
            anorganik: Math.min(100, item.anorganik + (isOrganic ? 0 : isCorrect ? 4 : 3)),
            lastSync: "Baru saja (Live)",
          }
        : item));
    }

    if (isKtm && student) {
      setStudents(current => current.map(item => item.nim === student.nim
        ? { ...item, points: Math.max(0, item.points + pointDelta), sorted: item.sorted + (isCorrect ? 1 : 0) }
        : item));
    }

    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const location = bin?.name.replace(" Telkom Univ", "") ?? "Kampus";
    setLogs(current => [{
      time,
      user: isKtm && student ? `${student.name} (${student.nim})` : "Mode Anonim (Publik)",
      type: typeLabel,
      location,
      status: isCorrect ? "Tepat" : "Koreksi",
      delta: isKtm ? pointDelta > 0 ? `+${pointDelta}` : `${pointDelta}` : "Publik",
    }, ...current]);

    setModalOpen(false);
    if (isCorrect) {
      showToast("Pemilahan Berhasil!", isKtm
        ? `${student?.name} membuang sampah ${typeLabel} di ${bin?.name} (+10 Poin).`
        : `Pengguna Anonim membuang sampah ${typeLabel} di ${bin?.name}.`);
    } else {
      showToast("Koreksi Pemilahan Aktif", isKtm
        ? `Sensor mendeteksi ketidaksesuaian pada kartu ${student?.name} (-5 Poin).`
        : "Sensor melakukan koreksi otomatis untuk pengguna Anonim.", "rose");
    }

    if (bin && (bin.organik >= 85 || bin.anorganik >= 85)) {
      showToast("Alert Petugas OB / TPA!", `Kapasitas ${bin.name} mencapai ≥85%. Notifikasi otomatis terkirim!`, "amber");
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.toastContainer}>
        {toasts.map(toast => (
          <div key={toast.id} className={`${styles.toast} ${styles[`toast_${toast.color}`]}`}>
            <span className={styles.toastIcon}><Bell size={17} /></span>
            <div><strong>{toast.title}</strong><p>{toast.message}</p></div>
          </div>
        ))}
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div>
            <div className={styles.brand}>
              <div className={styles.brandIcon}><Recycle size={25} /></div>
              <div><h1>EcoSmart Bin</h1><span>Telkom University IoT</span></div>
            </div>
            <nav className={styles.navigation}>
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <button key={item.id} onClick={() => switchTab(item.id)}
                    className={`${styles.navButton} ${activeTab === item.id ? styles.navActive : ""}`}>
                    <Icon size={17} />{item.label}
                  </button>
                );
              })}
            </nav>
          </div>
          <div className={styles.prototype}>
            <div className={styles.prototypeHead}><span>MODE PROTOTIPE</span><b>MVP Swing-Lid</b></div>
            <p>Pemilahan otomatis 2 kategori (Organik & Anorganik) dengan sensor kapasitif & PN532 NFC.</p>
            <div className={styles.online}><span />ESP32 Gateway Online</div>
          </div>
        </aside>

        <main className={styles.main}>
          <header className={styles.header}>
            <div>
              <div className={styles.headerTitle}>
                <h2>EcoSmart Bin Analytics & IoT Portal</h2>
                <span className={styles.live}><i />Live Sync</span>
              </div>
              <p>Monitoring Pengelolaan Sampah Kampus & Gamifikasi Poin Berkarakter Pancasila</p>
            </div>
            <button className={styles.primaryButton} onClick={() => setModalOpen(true)}>
              <Cpu size={17} />Simulasi Buang Sampah (Test IoT)
            </button>
          </header>

          <div className={styles.content}>
            <section className={styles.kpiGrid}>
              <article className={styles.kpi}>
                <div className={styles.kpiTop}><div><p>Total Sampah Terkumpul</p><h3>{formatNumber(totalItems)} Item</h3></div><PackageCheck className={styles.greenIcon} /></div>
                <div className={styles.kpiBottom}><span>Estimasi: {totalWeight.toFixed(1).replace(".", ",")} kg</span><b className={styles.greenPill}><TrendingUp size={13} />+14,2%</b></div>
              </article>
              <article className={styles.kpi}>
                <div className={styles.kpiTop}><div><p>Akurasi Pemilahan</p><h3>{accuracy}%</h3></div><CheckCircle2 className={styles.blueIcon} /></div>
                <div className={styles.kpiBottom}><span>Pemilahan tepat vs koreksi</span><b className={styles.bluePill}>Swing-Lid Aktif</b></div>
              </article>
              <article className={styles.kpi}>
                <div className={styles.kpiTop}><div><p>Total Poin Mahasiswa</p><h3>{formatNumber(totalPoints)} Poin</h3></div><Coins className={styles.amberIcon} /></div>
                <div className={styles.kpiBottom}><span>{ktmPct}% Scan KTM • {anonPct}% Anonim</span><b className={styles.amberPill}>Sila ke-5</b></div>
              </article>
              <article className={styles.kpi}>
                <div className={styles.kpiTop}><div><p>Status Unit EcoSmart Bin</p><h3>{bins.length} / {bins.length} Online</h3></div><BellRing className={styles.roseIcon} /></div>
                <div className={styles.kpiBottom}>
                  <span className={fullBins ? styles.roseText : styles.greenText}>{fullBins ? `${fullBins} Unit Penuh (≥85%)` : "Semua Wadah Aman (<85%)"}</span>
                  <button className={styles.textLink} onClick={() => switchTab("bins")}>Cek Lokasi</button>
                </div>
              </article>
            </section>

            <section id="section-overview" className={styles.section}>
              <div className={styles.chartGrid}>
                <article className={styles.panel}>
                  <div className={styles.panelHeader}>
                    <div><h3>Komposisi Jenis Sampah</h3><p>Distribusi hasil pemilahan sensor otomatis</p></div>
                    <div className={styles.segment}>
                      <button className={chartMode === "mvp" ? styles.segmentActive : ""} onClick={() => setChartMode("mvp")}>2 Kategori (MVP)</button>
                      <button className={chartMode === "max" ? styles.segmentActive : ""} onClick={() => setChartMode("max")}>4 Kategori (Maksimal)</button>
                    </div>
                  </div>
                  <div className={styles.doughnutWrap}><canvas ref={compositionCanvas} /></div>
                  <div className={styles.legend}>
                    {chartComposition.labels.map((label, index) => (
                      <div key={label}><span><i style={{ background: chartComposition.colors[index] }} />{label}</span><b>{formatNumber(chartComposition.data[index])}</b></div>
                    ))}
                  </div>
                </article>
                <article className={styles.panel}>
                  <div className={styles.panelHeader}>
                    <div><h3>Tren Pembuangan Sampah Harian</h3><p>Perbandingan partisipasi Scan KTM/NFC vs Mode Anonim (Sila ke-3)</p></div>
                    <span className={styles.dateTag}>Hari Ini (07.00 – 18.00)</span>
                  </div>
                  <div className={styles.activityWrap}><canvas ref={activityCanvas} /></div>
                  <div className={styles.chartFooter}>
                    <span>Puncak aktivitas terjadi pada jam istirahat siang (11.00 – 13.00 WIB).</span>
                    <b>Mode Anonim menjaga inklusivitas publik</b>
                  </div>
                </article>
              </div>
            </section>

            <section id="section-bins" className={styles.section}>
              <div className={styles.sectionHeading}>
                <div><h3>Monitoring Kapasitas Tong Real-Time (Petugas OB & TPA)</h3><p>Sensor ultrasonik HC-SR04 mengirim peringatan otomatis saat kapasitas wadah mencapai ≥85%</p></div>
                <div className={styles.statusLegend}><span>● Aman (&lt;70%)</span><span>● Hampir Penuh (70-84%)</span><span>● Penuh (≥85%)</span></div>
              </div>
              <div className={styles.binGrid}>
                {bins.map(bin => {
                  const max = Math.max(bin.organik, bin.anorganik);
                  const status = level(max);
                  const organic = level(bin.organik);
                  const inorganic = level(bin.anorganik);
                  return (
                    <article key={bin.id} className={`${styles.binCard} ${max >= 85 ? styles.binAlert : ""}`}>
                      <div>
                        <div className={styles.binTop}><span className={styles.binCode}>{bin.code}</span><span className={`${styles.statusBadge} ${status.badge}`}>{status.label}</span></div>
                        <h4>{bin.name}</h4><p className={styles.muted}>Update sensor: {bin.lastSync}</p>
                      </div>
                      <div className={styles.capacity}>
                        <div><div><span>Wadah Organik (Kiri)</span><b className={organic.text}>{bin.organik}%</b></div><div className={styles.progress}><i className={organic.bar} style={{ width: `${bin.organik}%` }} /></div></div>
                        <div><div><span>Wadah Anorganik (Kanan)</span><b className={inorganic.text}>{bin.anorganik}%</b></div><div className={styles.progress}><i className={inorganic.bar} style={{ width: `${bin.anorganik}%` }} /></div></div>
                      </div>
                      <button className={styles.emptyButton} onClick={() => emptyBin(bin.id)}><RotateCcw size={14} />Kosongkan Wadah (Petugas OB)</button>
                    </article>
                  );
                })}
              </div>
            </section>

            <section id="section-students" className={styles.studentGrid}>
              <article className={styles.panel}>
                <div className={styles.panelHeader}>
                  <div><h3>Leaderboard Kebersihan & Cek Poin e-Card</h3><p>Apresiasi poin adil bagi mahasiswa aktif memilah sampah (Sila ke-5)</p></div>
                  <select className={styles.select} value={selectedNim} onChange={event => setSelectedNim(event.target.value)}>
                    {students.map(student => <option key={student.nim} value={student.nim}>{student.name} ({student.nim})</option>)}
                  </select>
                </div>
                <div className={styles.studentCard}>
                  <div className={styles.studentIdentity}>
                    <div className={styles.creditIcon}><CreditCard size={25} /></div>
                    <div><span>KTM / NFC Aktif • {selectedStudent.nim}</span><h4>{selectedStudent.name}</h4><p>{selectedStudent.faculty}</p></div>
                  </div>
                  <div className={styles.studentPoints}><span>Saldo Poin Kebersihan</span><b>{formatNumber(selectedStudent.points)} <small>Poin</small></b></div>
                </div>
                <div className={styles.tableScroll}>
                  <table className={styles.table}>
                    <thead><tr><th>Peringkat</th><th>Mahasiswa / NIM</th><th>Fakultas</th><th>Terpilah</th><th>Total Poin</th></tr></thead>
                    <tbody>
                      {[...students].sort((a, b) => b.points - a.points).map((student, index) => (
                        <tr key={student.nim}>
                          <td><span className={`${styles.rank} ${index === 0 ? styles.rankFirst : index === 1 ? styles.rankSecond : index === 2 ? styles.rankThird : ""}`}>{index + 1}</span></td>
                          <td><b>{student.name}</b><small>{student.nim}</small></td>
                          <td>{student.faculty}</td><td>{student.sorted} item</td><td><span className={styles.pointsBadge}>{formatNumber(student.points)}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              <div className={styles.rightColumn}>
                <article className={styles.panel}>
                  <div className={styles.panelHeader}><div><h3>Tukar Poin e-Card</h3><p>Tukarkan poin kebersihan dengan voucher kampus</p></div><span className={styles.rewardTag}>Reward Aktif</span></div>
                  <div className={styles.rewardList}>
                    {rewards.map(reward => {
                      const Icon = reward.icon;
                      return <div key={reward.id} className={styles.reward}>
                        <div className={styles.rewardIcon}><Icon size={18} /></div>
                        <div className={styles.rewardInfo}><b>{reward.title}</b><span>{formatNumber(reward.cost)} Poin • {reward.stock}</span></div>
                        <button onClick={() => redeemReward(reward.id)}>Tukar</button>
                      </div>;
                    })}
                  </div>
                </article>

                <article id="section-logs" className={styles.panel}>
                  <div className={styles.panelHeader}><div className={styles.feedTitle}><i /> <h3>Live Feed Transaksi ESP32</h3></div><span className={styles.muted}>Real-Time</span></div>
                  <div className={styles.feed}>
                    {logs.map((log, index) => <div key={`${log.time}-${index}`} className={styles.feedItem}>
                      <div><div className={styles.feedIdentity}><time>{log.time}</time><b>{log.user}</b></div><p><strong className={log.status === "Tepat" ? styles.greenText : styles.roseText}>{log.type}</strong> • {log.location}</p></div>
                      <span className={`${styles.delta} ${log.delta === "+10" ? styles.deltaGreen : log.delta === "-5" ? styles.deltaRose : styles.deltaBlue}`}>{log.delta}</span>
                    </div>)}
                  </div>
                </article>
              </div>
            </section>
          </div>
        </main>
      </div>

      {modalOpen && <div className={styles.modalBackdrop} onMouseDown={event => { if (event.target === event.currentTarget) setModalOpen(false); }}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}><div><h3>Simulasi Buang Sampah</h3><p>Simulasikan transaksi sensor IoT EcoSmart Bin</p></div><button onClick={() => setModalOpen(false)}><X size={20} /></button></div>
          <form onSubmit={submitSimulation}>
            <div className={styles.formGroup}><label>1. Mode Identitas Pengguna</label>
              <div className={styles.radioRow}>
                <label><input type="radio" checked={simMode === "ktm"} onChange={() => setSimMode("ktm")} /> Scan KTM / NFC (Berpoin)</label>
                <label><input type="radio" checked={simMode === "anon"} onChange={() => setSimMode("anon")} /> Mode Anonim (Publik)</label>
              </div>
            </div>
            {simMode === "ktm" && <div className={styles.formGroup}><label htmlFor="sim-student">Pilih Mahasiswa (KTM)</label>
              <select id="sim-student" value={simStudent} onChange={event => setSimStudent(event.target.value)}>{students.map(student => <option key={student.nim} value={student.nim}>{student.name} ({student.nim})</option>)}</select>
            </div>}
            <div className={styles.formGroup}><label htmlFor="sim-location">2. Titik Lokasi EcoSmart Bin</label>
              <select id="sim-location" value={simLocation} onChange={event => setSimLocation(event.target.value)}>
                {bins.map(bin => <option key={bin.id} value={bin.id}>{bin.name}</option>)}
              </select>
            </div>
            <div className={styles.formGroup}><label>3. Deteksi Sensor Kapasitif & Aksi Swing-Lid</label>
              <div className={styles.actionOptions}>
                <label><input type="radio" name="sim-action" checked={simAction === "organik-valid"} onChange={() => setSimAction("organik-valid")} /><span><b>Sampah Organik / Basah (Tepat)</b><small>Tutup ayun membuka ke kompartemen kiri</small></span><strong>+10 Poin</strong></label>
                <label><input type="radio" name="sim-action" checked={simAction === "anorganik-valid"} onChange={() => setSimAction("anorganik-valid")} /><span><b>Sampah Anorganik / Kering (Tepat)</b><small>Tutup ayun membuka ke kompartemen kanan</small></span><strong>+10 Poin</strong></label>
                <label><input type="radio" name="sim-action" checked={simAction === "koreksi-invalid"} onChange={() => setSimAction("koreksi-invalid")} /><span><b>Salah Kategori / Dipaksa Masuk</b><small>Sistem melakukan koreksi pemilahan</small></span><strong className={styles.roseText}>-5 Poin</strong></label>
              </div>
            </div>
            <div className={styles.modalActions}><button type="button" onClick={() => setModalOpen(false)}>Batal</button><button type="submit">Kirim Data Sensor</button></div>
          </form>
        </div>
      </div>}
    </div>
  );
}
