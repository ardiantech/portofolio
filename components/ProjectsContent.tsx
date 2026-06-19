"use client";

import { useState } from "react";
import { PROJECTS_DATA } from "@/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProjectsContent() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="space-y-10 pb-12">
      {/* ===== HEADER ===== */}
      <motion.div className="relative" initial="hidden" animate="visible" variants={containerVariants}>
        {/* Ambient glow */}
        <div className="absolute -top-6 -left-4 w-40 h-40 bg-orange-400/10 dark:bg-purple-600/10 rounded-full blur-[60px] pointer-events-none" />

        <motion.span variants={headerVariants} className="text-[11px] font-black tracking-[0.25em] text-orange-500 dark:text-purple-400 uppercase block mb-2">
          Portfolio
        </motion.span>

        <motion.h1 variants={headerVariants} className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 dark:from-[#00d2ff] dark:via-[#8b5cf6] dark:to-[#ec4899]">Saya</span>
        </motion.h1>

        <motion.p variants={headerVariants} className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-lg">
          Kumpulan project yang telah saya bangun — dari sistem informasi pemerintah hingga aplikasi web modern.
        </motion.p>
      </motion.div>

      {/* ===== PROJECT GRID ===== */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        {PROJECTS_DATA.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            className="group relative bg-white dark:bg-[#06060a] border border-gray-100 dark:border-gray-900 rounded-2xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            style={{
              boxShadow: hovered === project.id ? `0 20px 60px ${project.glow}` : undefined,
            }}
          >
            {/* ===== CARD HEADER / IMAGE AREA ===== */}
            <div className="relative w-full h-48 overflow-hidden">
              {/* Fallback gradient background (tampil kalau gambar belum ada) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} ${project.darkColor} opacity-90`} />

              {/* Project screenshot */}
              <motion.div className="absolute inset-0" animate={hovered === project.id ? { scale: 1.06 } : { scale: 1 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}>
                <Image src={project.image} alt={`Screenshot ${project.title}`} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
              </motion.div>

              {/* Gradient overlay bawah supaya card body nyambung */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-black tracking-widest uppercase text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">{project.category}</span>
              </div>

              {/* Title overlay di bawah gambar */}
              <div className="absolute bottom-3 left-4 z-10">
                <span className="text-white font-bold text-base drop-shadow-md">{project.title}</span>
              </div>
            </div>

            {/* ===== CARD BODY ===== */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-1.5">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techName, idx) => (
                  <span key={idx} className="text-[11px] font-semibold border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d0d15] text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-lg">
                    {techName}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 dark:bg-gray-900" />

              {/* Links */}
              <div className="flex items-center justify-between">
                <a href={project.liveLink} className={`flex items-center gap-1.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${project.color} ${project.darkColor} hover:opacity-80 transition`} target="_blank">
                  <FaExternalLinkAlt className="text-xs text-orange-500 dark:text-purple-400" />
                  Live Demo
                </a>
                <a href={project.githubLink} className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  <FaGithub className="text-base" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Bottom gradient line on hover */}
            <motion.div
              className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${project.color} ${project.darkColor}`}
              initial={{ width: "0%" }}
              animate={{ width: hovered === project.id ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ===== CTA ===== */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="text-center pt-4">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Tertarik bekerja sama?{" "}
          <a href="/contact" className="text-orange-500 dark:text-purple-400 font-semibold hover:underline">
            Hubungi saya →
          </a>
        </p>
      </motion.div>
    </div>
  );
}
