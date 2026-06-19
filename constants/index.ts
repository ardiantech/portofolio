// constants/index.ts atau di atas file page.tsx kamu
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiBootstrap, SiLaravel, SiCodeigniter, SiMysql, SiNginx, SiRedis, SiProxmox, SiUbuntu, SiGit, SiGithub, SiPostman } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { DiDatabase } from "react-icons/di"; // Alternatif ikon remote database untuk Navicat

export const SKILLS_DATA = {
  frontend: [
    { name: "React / Next.js", status: "Main Stack", icon: SiNextdotjs, color: "group-hover:text-black dark:group-hover:text-white" },
    { name: "TypeScript", status: "Intermediate", icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
    { name: "Tailwind CSS", status: "Intermediate", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
    { name: "Bootstrap", status: "Intermediate", icon: SiBootstrap, color: "group-hover:text-[#7952B3]" },
  ],
  backend: [
    { name: "PHP (Laravel)", status: "Main Stack", icon: SiLaravel, color: "group-hover:text-[#FF2D20]" },
    { name: "PHP (CodeIgniter)", status: "Intermediate", icon: SiCodeigniter, color: "group-hover:text-[#EE4323]" },
  ],
  database: [{ name: "MySQL", status: "Main RDBMS", icon: SiMysql, color: "group-hover:text-[#4479A1]" }],
  devops: [
    { name: "Nginx", desc: "Reverse Proxy & Server", icon: SiNginx, color: "group-hover:text-[#009639]" },
    { name: "Redis", desc: "Caching & Session", icon: SiRedis, color: "group-hover:text-[#DC382D]" },
    { name: "Proxmox", desc: "Virtualization & VM", icon: SiProxmox, color: "group-hover:text-[#E57024]" },
    { name: "Ubuntu", desc: "OS for Virtualization", icon: SiUbuntu, color: "group-hover:text-[#E95420]" },
    { name: "Git / GitHub", desc: "Version Control", icon: SiGithub, color: "group-hover:text-[#181717] dark:group-hover:text-white" },
  ],
  toolkits: [
    { name: "VS Code", category: "Editor", icon: VscVscodeInsiders, color: "group-hover:text-[#007ACC]" },
    { name: "Postman", category: "API Testing", icon: SiPostman, color: "group-hover:text-[#FF6C37]" },
    { name: "Navicat", category: "Remote Database", icon: DiDatabase, color: "group-hover:text-[#00A3E0]" },
  ],
};

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Sistem E-Gaji",
    category: "Web Application",
    description: "Aplikasi penggajian karyawan berbasis web dengan fitur perhitungan gaji otomatis, manajemen tunjangan, potongan, dan laporan penggajian yang detail dan terstruktur.",
    tech: ["Laravel", "PHP", "MySQL"],
    liveLink: "https://egaji.pekalongankab.go.id/",
    githubLink: "#",
    color: "from-orange-500 to-pink-500",
    darkColor: "dark:from-[#5046e5] dark:to-[#7c3aed]",
    glow: "rgba(249,115,22,0.15)",
    darkGlow: "rgba(80,70,229,0.2)",
    image: "/project/egaji.jpg",
  },
  {
    id: 2,
    title: "SiCalK",
    category: "Web Application",
    description: "Sistem informasi Catatan atas Laporan Keuangan (CaLK) untuk membantu instansi pemerintah dalam menyusun, mengelola, dan mencetak catatan laporan keuangan secara sistematis.",
    tech: ["CodeIgniter", "PHP", "MySQL"],
    liveLink: "https://calk.elkpd.id",
    githubLink: "#",
    color: "from-emerald-500 to-teal-500",
    darkColor: "dark:from-[#00d2ff] dark:to-[#0ea5e9]",
    glow: "rgba(16,185,129,0.15)",
    darkGlow: "rgba(0,210,255,0.15)",
    image: "/project/calk.jpg",
  },
  {
    id: 3,
    title: "SKM - Survey Kepuasan Masyarakat",
    category: "Web Application",
    description: "Sistem survey kepuasan masyarakat berbasis web untuk mengukur tingkat kepuasan layanan publik secara digital, dengan fitur pengisian survey, rekapitulasi hasil, dan laporan analisis per periode.",
    tech: ["Laravel", "PHP", "MySQL"],
    liveLink: "http://skm.disdukcapil.pekalongankab.go.id:8081/",
    githubLink: "#",
    color: "from-blue-500 to-indigo-500",
    darkColor: "dark:from-[#06b6d4] dark:to-[#3b82f6]",
    glow: "rgba(59,130,246,0.15)",
    darkGlow: "rgba(6,182,212,0.15)",
    image: "/project/skm.jpg",
  },
];

export const EXPERIENCE_DATA = [
  {
    period: "2025 - Sekarang",
    role: "Fullstack Web Developer",
    company: "CV CAHAYA MEDIA INFORMATIKA",
    description:
      "Bekerja di lingkungan software house untuk merancang, membangun, dan mengelola berbagai aplikasi web kustom berskala bisnis. Bertanggung jawab penuh pada arsitektur frontend yang responsif serta integrasi backend API yang aman dan scalable.",
  },
  {
    period: "2024 - 2025",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description: "Menerima dan menyelesaikan berbagai proyek pembuatan website portofolio, sistem informasi, dan landing page untuk klien lokal maupun UMKM menggunakan ekosistem web modern.",
  },
  {
    period: "2020 - 2024",
    role: "S1 - Teknik Informatika / Sistem Informasi",
    company: "STMIK WIDYA PRATAMA",
    description: "Mempelajari fondasi teknologi yang kuat meliputi Web Development, Network Administration, Manajemen Database, hingga implementasi Internet of Things (IoT). Menyelaraskan teori akademik dengan praktik coding langsung.",
  },
];

export const STATS_DATA = [
  {
    num: "10+",
    label: "Project Selesai",
    icon: "💼",
    glow: "border-orange-100 dark:border-purple-900/30 shadow-orange-500/5 dark:shadow-[0_0_15px_rgba(147,51,234,0.15)]",
    line: "bg-orange-500 dark:bg-purple-500",
  },
  {
    num: "8+",
    label: "Sistem Terdeploy",
    icon: "🚀",
    glow: "border-pink-100 dark:border-blue-900/30 shadow-pink-500/5 dark:shadow-[0_0_15px_rgba(59,130,246,0.15)]",
    line: "bg-pink-500 dark:bg-blue-500",
  },
  {
    num: "2+ Tahun", // Diubah dari "3+" agar sesuai realisasi karier dari tahun 2024 ke 2026
    label: "Pengalaman Kerja", // Diubah dari "Tahun Pengalaman" agar lebih formal sesuai komponen grid
    icon: "📅",
    glow: "border-red-100 dark:border-pink-900/30 shadow-red-500/5 dark:shadow-[0_0_15px_rgba(236,72,153,0.15)]",
    line: "bg-red-500 dark:bg-pink-500",
  },
  {
    num: "Networking Administrator", // Diubah dari "100%" agar menampilkan rumpun skill akademis yang bernilai tinggi
    label: "Kompetensi Tambahan", // Diubah dari "Komitmen" agar mewakili nilai kompetensi teknis dari STMIK WP
    icon: "🛡️",
    glow: "border-emerald-100 dark:border-emerald-900/30 shadow-emerald-500/5 dark:shadow-[0_0_15px_rgba(34,197,94,0.15)]",
    line: "bg-emerald-500",
  },
];
