import type { Metadata } from "next";
import { SKILLS_DATA } from "@/constants";
import { FiLayout, FiServer, FiCpu, FiBriefcase, FiDatabase } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Skills & Technologies",
  description:
    "Tech stack dan keahlian teknis Rizal Ardianto — Frontend (React, Next.js, TypeScript), Backend (Laravel, PHP), Database (MySQL), DevOps (Nginx, Redis, Proxmox, Ubuntu), dan toolkits profesional.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    url: "/skills",
    title: "Skills & Technologies | Rizal Ardianto",
    description:
      "Kombinasi teknologi dan infrastruktur yang digunakan untuk membangun aplikasi web modern dan sistem informasi enterprise.",
  },
};

export default function SkillsPage() {
  return (
    <div className="space-y-12 pb-12">
      {/* HEADER HALAMAN */}
      <div>
        <span className="text-xs text-primary font-bold uppercase tracking-widest">Expertise</span>
        <h1 className="text-3xl font-bold mt-1">Skills & Technologies</h1>
        <p className="text-sm text-gray-400 mt-2 max-w-xl">Kombinasi teknologi, infrastruktur, dan perkakas kerja resmi yang saya gunakan untuk mentransformasikan arsitektur kode menjadi aplikasi siap pakai.</p>
      </div>

      {/* CORE STACK (FRONTEND, BACKEND, & DATABASE) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Frontend Section */}
        <div className="bg-surface border border-border-custom rounded-2xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-border-custom/60 pb-3">
              <FiLayout className="text-primary text-xl" />
              <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wider uppercase">Frontend Stack</h3>
            </div>
            {/* Diubah menjadi grid-cols-1 saja agar tersusun dari atas ke bawah */}
            <div className="grid grid-cols-1 gap-3">
              {SKILLS_DATA.frontend.map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <div key={idx} className="p-3 bg-background/50 border border-border-custom/50 rounded-xl flex items-center justify-between group hover:border-primary/40 transition duration-300">
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors truncate">{skill.name}</span>
                      <span className="text-[10px] text-primary/80 font-semibold mt-0.5 uppercase tracking-wider">{skill.status}</span>
                    </div>
                    <IconComponent className={`text-2xl text-gray-400 dark:text-gray-600 transition-colors duration-300 shrink-0 ml-2 ${skill.color}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="bg-surface border border-border-custom rounded-2xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-border-custom/60 pb-3">
              <FiServer className="text-accent text-xl" />
              <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wider uppercase">Backend Stack</h3>
            </div>
            {/* Diubah menjadi grid-cols-1 saja agar ter-stack vertikal (atas ke bawah) */}
            <div className="grid grid-cols-1 gap-3">
              {SKILLS_DATA.backend.map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <div key={idx} className="p-3 bg-background/50 border border-border-custom/50 rounded-xl flex items-center justify-between group hover:border-accent/40 transition duration-300">
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-accent transition-colors truncate">{skill.name}</span>
                      <span className="text-[10px] text-accent/80 font-semibold mt-0.5 uppercase tracking-wider">{skill.status}</span>
                    </div>
                    <IconComponent className={`text-2xl text-gray-400 dark:text-gray-600 transition-colors duration-300 shrink-0 ml-2 ${skill.color}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Database Section */}
        <div className="bg-surface border border-border-custom rounded-2xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-border-custom/60 pb-3">
              <FiDatabase className="text-orange-500 text-xl" />
              <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wider uppercase">Database</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {SKILLS_DATA.database.map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <div key={idx} className="p-3 bg-background/50 border border-border-custom/50 rounded-xl flex items-center justify-between group hover:border-orange-500/40 transition duration-300">
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors truncate">{skill.name}</span>
                      <span className="text-[10px] text-orange-500/80 font-semibold mt-0.5 uppercase tracking-wider">{skill.status}</span>
                    </div>
                    <IconComponent className={`text-2xl text-gray-400 dark:text-gray-600 transition-colors duration-300 shrink-0 ml-2 ${skill.color}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* INFRASTRUCTURE & DEVOPS */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FiCpu className="text-pink-500 text-lg" />
          <h3 className="text-base font-bold tracking-tight uppercase text-gray-400">DevOps & Infrastructure</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SKILLS_DATA.devops.map((tech, idx) => {
            const IconComponent = tech.icon;
            return (
              <div key={idx} className="p-4 bg-surface/60 border border-border-custom/80 rounded-xl flex flex-col justify-between hover:border-pink-500/30 transition duration-300 group shadow-sm min-h-[110px]">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-pink-500 transition-colors leading-tight">{tech.name}</span>
                  <IconComponent className={`text-xl text-gray-400 dark:text-gray-600 transition-colors duration-300 shrink-0 ${tech.color}`} />
                </div>
                <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 block leading-relaxed">{tech.desc}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* TOOLKITS & ENVIRONMENT */}
      {/* ================= SOFTWARE TOOLKITS & ENVIRONMENT PREMIUM ================= */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FiBriefcase className="text-emerald-500 text-lg animate-pulse" />
          <h3 className="text-base font-bold tracking-tight uppercase text-gray-400">Software Toolkits</h3>
        </div>

        {/* Menggunakan grid responsif yang kokoh agar tidak berantakan di layar HP */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SKILLS_DATA.toolkits.map((tool, idx) => {
            const IconComponent = tool.icon;

            // Menentukan warna border glow kustom saat di-hover berdasarkan toolkit-nya
            let hoverGlowColor = "hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)]";
            if (tool.name.includes("VS Code")) hoverGlowColor = "hover:border-[#007ACC]/40 hover:shadow-[0_0_15px_rgba(0,122,204,0.1)]";
            if (tool.name.includes("Postman")) hoverGlowColor = "hover:border-[#FF6C37]/40 hover:shadow-[0_0_15px_rgba(255,108,55,0.1)]";
            if (tool.name.includes("Navicat")) hoverGlowColor = "hover:border-[#00A3E0]/40 hover:shadow-[0_0_15px_rgba(0,163,224,0.1)]";

            return (
              <div key={idx} className={`p-4 bg-surface/50 border border-border-custom/60 rounded-2xl flex items-center justify-between transition-all duration-300 group shadow-sm ${hoverGlowColor} hover:-translate-y-0.5`}>
                {/* Teks Informasi */}
                <div className="flex flex-col min-w-0 pr-2">
                  <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors truncate">{tool.name}</span>
                  <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">{tool.category}</span>
                </div>

                {/* Wrapper Ikon Bulat Minimalis */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-background border border-border-custom/50 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-surface group-hover:border-border-custom">
                  <IconComponent className={`text-lg sm:text-xl text-gray-400 dark:text-gray-600 transition-all duration-300 group-hover:scale-110 ${tool.color}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
