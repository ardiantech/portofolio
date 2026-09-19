"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiLayout, FiServer, FiCpu, FiBriefcase, FiDatabase } from "react-icons/fi";
import { SKILLS_DATA } from "@/constants";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div className={className} initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

// Delay bertahap, dibatasi supaya list panjang tidak terasa lambat
const stagger = (idx: number) => Math.min(idx * 0.05, 0.3);

function SectionTitle({ icon: Icon, iconClass, title }: { icon: IconType; iconClass: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className={`text-lg shrink-0 ${iconClass}`} />
      <h2 className="text-base font-bold tracking-tight uppercase text-gray-400 whitespace-nowrap">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-border-custom/80 to-transparent" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Core stack (Frontend, Backend, Database)                            */
/* ------------------------------------------------------------------ */

// Class Tailwind harus statis (tidak boleh dirakit dinamis), jadi dipetakan per tone.
const TONES = {
  primary: {
    icon: "text-primary",
    line: "via-primary/60",
    badge: "bg-primary/10 text-primary",
    hoverBorder: "hover:border-primary/40",
    hoverText: "group-hover:text-primary",
    status: "text-primary/80",
  },
  accent: {
    icon: "text-accent",
    line: "via-accent/60",
    badge: "bg-accent/10 text-accent",
    hoverBorder: "hover:border-accent/40",
    hoverText: "group-hover:text-accent",
    status: "text-accent/80",
  },
  orange: {
    icon: "text-orange-500",
    line: "via-orange-500/60",
    badge: "bg-orange-500/10 text-orange-500",
    hoverBorder: "hover:border-orange-500/40",
    hoverText: "group-hover:text-orange-500",
    status: "text-orange-500/80",
  },
} as const;

type Tone = keyof typeof TONES;

type CoreSkill = { name: string; status: string; color: string; icon: IconType };

function StackCard({ title, icon: Icon, tone, items, delay }: { title: string; icon: IconType; tone: Tone; items: CoreSkill[]; delay: number }) {
  const t = TONES[tone];

  return (
    <Reveal delay={delay} className="h-full">
      <div className="relative h-full overflow-hidden bg-surface border border-border-custom rounded-2xl p-6 space-y-4 shadow-sm">
        {/* Garis aksen di sisi atas kartu */}
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${t.line} to-transparent`} />

        <div className="flex items-center justify-between gap-3 border-b border-border-custom/60 pb-3">
          <div className="flex items-center gap-3">
            <Icon className={`text-xl ${t.icon}`} />
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wider uppercase">{title}</h3>
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${t.badge}`}>{items.length}</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {items.map((skill, idx) => {
            const SkillIcon = skill.icon;
            return (
              <Reveal key={skill.name} delay={stagger(idx)}>
                <div className={`p-3 bg-background/50 border border-border-custom/50 rounded-xl flex items-center justify-between group transition-all duration-300 hover:-translate-y-0.5 hover:bg-background ${t.hoverBorder}`}>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors truncate ${t.hoverText}`}>{skill.name}</span>
                    <span className={`text-[10px] font-semibold mt-0.5 uppercase tracking-wider ${t.status}`}>{skill.status}</span>
                  </div>
                  <SkillIcon className={`text-2xl text-gray-400 dark:text-gray-600 transition-all duration-300 group-hover:scale-110 shrink-0 ml-2 ${skill.color}`} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Toolkits                                                            */
/* ------------------------------------------------------------------ */

const DEFAULT_GLOW = "hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)]";

const TOOL_GLOWS: { match: string; classes: string }[] = [
  { match: "VS Code", classes: "hover:border-[#007ACC]/40 hover:shadow-[0_0_15px_rgba(0,122,204,0.1)]" },
  { match: "Postman", classes: "hover:border-[#FF6C37]/40 hover:shadow-[0_0_15px_rgba(255,108,55,0.1)]" },
  { match: "Navicat", classes: "hover:border-[#00A3E0]/40 hover:shadow-[0_0_15px_rgba(0,163,224,0.1)]" },
];

const getToolGlow = (name: string) => TOOL_GLOWS.find((g) => name.includes(g.match))?.classes ?? DEFAULT_GLOW;

/* ------------------------------------------------------------------ */
/* Page content                                                        */
/* ------------------------------------------------------------------ */

export function SkillsContent() {
  const { frontend, backend, database, devops, toolkits } = SKILLS_DATA;
  const totalTech = frontend.length + backend.length + database.length + devops.length + toolkits.length;

  const stats = [
    { label: "Teknologi", value: totalTech },
    { label: "Infrastruktur", value: devops.length },
    { label: "Toolkits", value: toolkits.length },
  ];

  return (
    <div className="space-y-14 pb-12">
      {/* HEADER */}
      <Reveal>
        <header className="relative isolate">
          <div className="pointer-events-none absolute -top-16 -left-16 -z-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

          <span className="text-xs text-primary font-bold uppercase tracking-widest">Expertise</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-1 tracking-tight">
            Skills & <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Technologies</span>
          </h1>
          <p className="text-sm text-gray-400 mt-3 max-w-xl leading-relaxed">Kombinasi teknologi, infrastruktur, dan perkakas kerja resmi yang saya gunakan untuk mentransformasikan arsitektur kode menjadi aplikasi siap pakai.</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-1.5 rounded-full border border-border-custom bg-surface/60 px-3.5 py-1.5">
                <span className="text-sm font-bold text-gray-800 dark:text-gray-100">{s.value}</span>
                <span className="text-[11px] text-gray-400 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </header>
      </Reveal>

      {/* CORE STACK */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StackCard title="Frontend Stack" icon={FiLayout} tone="primary" items={frontend} delay={0} />
        <StackCard title="Backend Stack" icon={FiServer} tone="accent" items={backend} delay={0.08} />
        <StackCard title="Database" icon={FiDatabase} tone="orange" items={database} delay={0.16} />
      </section>

      {/* DEVOPS & INFRASTRUCTURE */}
      <section className="space-y-5">
        <Reveal>
          <SectionTitle icon={FiCpu} iconClass="text-pink-500" title="DevOps & Infrastructure" />
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {devops.map((tech, idx) => {
            const TechIcon = tech.icon;
            return (
              <Reveal key={tech.name} delay={stagger(idx)} className="h-full">
                <div className="group h-full min-h-[120px] p-4 bg-surface/60 border border-border-custom/80 rounded-xl flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500/30 hover:shadow-[0_0_18px_rgba(236,72,153,0.08)]">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-pink-500 transition-colors leading-tight">{tech.name}</span>
                    <TechIcon className={`text-xl text-gray-400 dark:text-gray-600 transition-all duration-300 group-hover:scale-110 shrink-0 ${tech.color}`} />
                  </div>
                  <span className="text-[11px] text-gray-400 dark:text-gray-500 mt-3 block leading-relaxed">{tech.desc}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SOFTWARE TOOLKITS */}
      <section className="space-y-5">
        <Reveal>
          <SectionTitle icon={FiBriefcase} iconClass="text-emerald-500" title="Software Toolkits" />
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {toolkits.map((tool, idx) => {
            const ToolIcon = tool.icon;
            return (
              <Reveal key={tool.name} delay={stagger(idx)}>
                <div className={`group p-4 bg-surface/50 border border-border-custom/60 rounded-2xl flex items-center justify-between shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${getToolGlow(tool.name)}`}>
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors truncate">{tool.name}</span>
                    <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">{tool.category}</span>
                  </div>

                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-background border border-border-custom/50 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-surface group-hover:border-border-custom">
                    <ToolIcon className={`text-lg sm:text-xl text-gray-400 dark:text-gray-600 transition-all duration-300 group-hover:scale-110 ${tool.color}`} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
