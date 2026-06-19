import type { Metadata } from "next";
import { EXPERIENCE_DATA, STATS_DATA } from "@/constants";
import Profile3DTilt from "@/components/Profile3DTilt";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Kenali Rizal Ardianto lebih dekat — perjalanan karier sebagai Fullstack Developer, filosofi kerja, pengalaman di CV Cahaya Media Informatika, dan latar belakang pendidikan di STMIK Widya Pratama.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "About Me | Rizal Ardianto",
    description:
      "Fullstack Developer dengan 2+ tahun pengalaman. Spesialis React/Next.js dan Laravel. Lihat perjalanan karier dan filosofi kerja saya.",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-12">
      {/* Bagian Atas: Profil & Deskripsi */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* FOTO PROFIL INTERAKTIF 3D */}
        <Profile3DTilt />

        {/* Deskripsi Tentang Saya */}
        <div className="space-y-6 flex-grow w-full">
          <div>
            <span className="text-xs text-primary font-bold uppercase tracking-widest">Tentang Saya</span>
            <h1 className="text-3xl font-bold mt-1">About Me</h1>
          </div>

          <div className="space-y-4 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            <p>
              Sebagai Fullstack Developer, saya terbiasa membangun sistem digital dari hulu ke hilir—mulai dari arsitektur database yang solid hingga interface yang responsif. Saya memiliki ketertarikan mendalam pada optimasi performa,
              keamanan, dan penerapan teknologi modern.
            </p>
            <p>Selalu tertantang untuk mengeksplorasi ekosistem baru dan mengimplementasikan solusi digital terbaik yang mampu mendorong pertumbuhan bisnis maupun efisiensi organisasi secara nyata.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {STATS_DATA.map((stat, i) => {
              let numTextColor = "text-orange-500 dark:text-purple-400";
              if (stat.line?.includes("bg-pink-500")) numTextColor = "text-pink-500 dark:text-blue-400";
              if (stat.line?.includes("bg-red-500")) numTextColor = "text-red-500 dark:text-pink-400";
              if (stat.line?.includes("bg-emerald-500")) numTextColor = "text-emerald-500 dark:text-emerald-400";

              const isLongText = stat.num.length > 8;

              return (
                <div
                  key={i}
                  className={`p-4 bg-surface border border-border-custom rounded-xl text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 ${stat.glow} flex flex-col justify-center min-h-[90px] md:min-h-[100px]`}
                >
                  <h4
                    className={`font-black tracking-tight leading-tight transition-colors duration-300 ${numTextColor} ${
                      isLongText
                        ? "text-xs md:text-sm whitespace-normal px-1 break-words"
                        : "text-2xl"
                    }`}
                  >
                    {stat.num}
                  </h4>

                  <p className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 font-medium mt-1 leading-tight">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= BAGIAN FILOSOFI KERJA ================= */}
      <div className="space-y-6 border-t border-border-custom/60 pt-12">
        <div>
          <span className="text-xs text-primary font-bold uppercase tracking-widest">Prinsip Kerja</span>
          <h2 className="text-2xl font-bold mt-1">Filosofi & Pendekatan Pengembangan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface/40 border border-border-custom/60 rounded-2xl space-y-2">
            <div className="text-primary font-bold text-lg">01 / Mindset</div>
            <h3 className="font-bold text-base">Efficiency First</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Menulis kode bukan cuma agar aplikasi berjalan, tapi bagaimana struktur logic tetap bersih, ringan, dan mudah di-maintain jangka panjang.</p>
          </div>

          <div className="p-6 bg-surface/40 border border-border-custom/60 rounded-2xl space-y-2">
            <div className="text-accent font-bold text-lg">02 / Execution</div>
            <h3 className="font-bold text-base">User-Centric Development</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Sisi backend yang kuat harus diimbangi dengan frontend yang interaktif dan responsif demi kenyamanan penuh pengguna.</p>
          </div>

          <div className="p-6 bg-surface/40 border border-border-custom/60 rounded-2xl space-y-2">
            <div className="text-pink-500 font-bold text-lg">03 / Growth</div>
            <h3 className="font-bold text-base">Adaptive Learning</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Teknologi terus berubah. Mengadopsi teknologi baru secara cepat dan tepat adalah kunci memberikan solusi bisnis terbaik.</p>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Perjalanan Karier / Timeline */}
      <div className="space-y-6 pt-4">
        <div>
          <span className="text-xs text-primary font-bold uppercase tracking-widest">Journey Saya</span>
          <h2 className="text-2xl font-bold mt-1">Pengalaman & Pendidikan</h2>
        </div>

        <div className="relative border-l-2 border-border-custom/80 ml-3 pl-6 space-y-8 group/timeline">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative group/item">
              <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-background z-10 transition-all duration-300 group-hover/item:bg-primary group-hover/item:border-primary/20 group-hover/item:scale-125 group-hover/item:shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)]" />

              <div
                className="bg-surface border border-border-custom p-5 md:p-6 rounded-2xl space-y-2 relative overflow-hidden transition-all duration-400 ease-out
        hover:translate-x-2 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-primary/30
        shadow-sm hover:shadow-[10px_10px_30px_rgba(0,0,0,0.03)] dark:hover:shadow-[10px_10px_30px_rgba(0,0,0,0.2)]"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-xs text-primary font-bold tracking-wider uppercase bg-primary/5 dark:bg-primary/10 px-2.5 py-1 rounded-md w-fit">{exp.period}</span>
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500">{exp.company}</h4>
                </div>

                <div className="pt-1">
                  <h3 className="text-lg font-bold tracking-tight text-gray-800 dark:text-gray-100 group-hover/item:text-primary transition-colors duration-300">{exp.role}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-1.5 border-t border-border-custom/40 mt-2 group-hover/item:border-primary/10 transition-colors">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
