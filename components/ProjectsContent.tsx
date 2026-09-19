"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS_DATA } from "@/constants";

type Project = (typeof PROJECTS_DATA)[number];

const EASE = [0.22, 1, 0.36, 1] as const;
const ALL = "Semua";

// Link kosong atau "#" dianggap belum tersedia
const hasLink = (url?: string) => !!url && url !== "#";

/* ------------------------------------------------------------------ */
/* Project card                                                        */
/* ------------------------------------------------------------------ */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      layout={!reduceMotion}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE, delay: (index % 2) * 0.1 }}
      className="h-full"
    >
      {/* Efek hover ada di elemen dalam agar tidak bentrok dengan transform framer-motion */}
      <article
        style={{ "--glow": project.glow } as CSSProperties}
        className="group relative h-full flex flex-col overflow-hidden bg-white dark:bg-[#06060a] border border-gray-100 dark:border-gray-900 rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_var(--glow)] focus-within:shadow-[0_20px_60px_var(--glow)]"
      >
        {/* ===== IMAGE ===== */}
        <div className="relative w-full h-52 sm:h-48 overflow-hidden shrink-0">
          {/* Fallback gradient (tampil kalau gambar belum ada / gagal dimuat) */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} ${project.darkColor} opacity-90`} />

          {!imgFailed && (
            <Image
              src={project.image}
              alt={`Screenshot ${project.title}`}
              fill
              priority={index < 2}
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setImgFailed(true)}
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
            <span className="text-[10px] font-black tracking-widest uppercase text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">{project.category}</span>
            <span className="text-xs font-black tabular-nums text-white/70 drop-shadow">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>

        {/* ===== BODY ===== */}
        <div className="flex flex-1 flex-col p-5 sm:p-6 gap-4">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{project.description}</p>
          </div>

          <ul className="flex flex-wrap gap-2" aria-label={`Teknologi ${project.title}`}>
            {project.tech.map((techName) => (
              <li key={techName} className="text-[11px] font-semibold border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d0d15] text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-lg">
                {techName}
              </li>
            ))}
          </ul>

          {/* Dorong link ke dasar kartu supaya tinggi kartu sejajar */}
          <div className="mt-auto space-y-4">
            <div className="h-px bg-gray-100 dark:bg-gray-900" />

            <div className="flex flex-wrap items-center gap-2">
              {hasLink(project.liveLink) && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka live demo ${project.title}`}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 dark:from-[#5046e5] dark:to-[#7c3aed] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 dark:shadow-[#5046e5]/30 transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:focus-visible:outline-purple-400"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </a>
              )}

              {hasLink(project.githubLink) && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lihat kode ${project.title} di GitHub`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-500 transition hover:border-gray-300 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:border-gray-800 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-white dark:focus-visible:outline-purple-400"
                >
                  <FaGithub className="text-base" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Garis gradient bawah saat hover */}
        <div
          className={`pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r ${project.color} ${project.darkColor} transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100`}
        />
      </article>
    </motion.li>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const headerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(PROJECTS_DATA.map((p) => p.category)));
    return [ALL, ...unique];
  }, []);

  const countOf = (category: string) => (category === ALL ? PROJECTS_DATA.length : PROJECTS_DATA.filter((p) => p.category === category).length);

  const filtered = useMemo(() => (activeCategory === ALL ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.category === activeCategory)), [activeCategory]);

  return (
    <div className="space-y-10 pb-12">
      {/* ===== HEADER ===== */}
      <motion.header className="relative isolate space-y-5" initial="hidden" animate="visible" variants={headerContainer}>
        <div className="absolute -top-6 -left-4 -z-10 w-40 h-40 bg-orange-400/10 dark:bg-purple-600/10 rounded-full blur-[60px] pointer-events-none" />

        <div>
          <motion.span variants={headerItem} className="text-[11px] font-black tracking-[0.25em] text-orange-500 dark:text-purple-400 uppercase block mb-2">
            Portfolio
          </motion.span>

          <motion.h1 variants={headerItem} className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 dark:from-[#00d2ff] dark:via-[#8b5cf6] dark:to-[#ec4899]">Saya</span>
          </motion.h1>

          <motion.p variants={headerItem} className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-lg leading-relaxed">
            Kumpulan project yang telah saya bangun, dari sistem informasi pemerintah hingga aplikasi web modern.
          </motion.p>
        </div>

        {/* Filter kategori (hanya tampil kalau ada lebih dari satu kategori) */}
        {categories.length > 2 && (
          <motion.div variants={headerItem} role="group" aria-label="Filter kategori project" className="-mx-1 flex flex-wrap gap-2 px-1">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`relative cursor-pointer rounded-full border px-4 py-2.5 min-h-11 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:focus-visible:outline-purple-400 ${
                    isActive ? "border-transparent text-white" : "border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 dark:from-purple-600 dark:to-pink-500"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    {category}
                    <span className="ml-1.5 tabular-nums opacity-60">{countOf(category)}</span>
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </motion.header>

      {/* ===== PROJECT GRID ===== */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </ul>

      {/* ===== CTA ===== */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center pt-4">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Tertarik bekerja sama?{" "}
          <Link href="/contact" className="text-orange-500 dark:text-purple-400 font-semibold hover:underline">
            Hubungi saya →
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
