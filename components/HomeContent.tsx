"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaReact, FaNodeJs, FaLaravel, FaRegCommentDots } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMysql, SiProxmox, SiPhp } from "react-icons/si";
import { STATS_DATA } from "@/constants";

export default function HomeContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const planetRingRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      // 1. ANIMASI CINCIN PLANET (Muter konstan anggun)
      gsap.to(planetRingRef.current, {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      // 2. ANIMASI UTK BADGE TEKNOLOGI (Hanya mengambang naik-turun)
      gsap.to(".floating-badge-1", { y: -10, duration: 2.0, repeat: -1, yoyo: true, ease: "power1.inOut" });
      gsap.to(".floating-badge-2", { y: 12, duration: 2.4, repeat: -1, yoyo: true, ease: "power1.inOut" });
      gsap.to(".floating-badge-3", { y: -14, duration: 2.2, repeat: -1, yoyo: true, ease: "power1.inOut" });
      gsap.to(".floating-badge-4", { y: 10, duration: 2.6, repeat: -1, yoyo: true, ease: "power1.inOut" });
      gsap.to(".floating-badge-5", { y: -8, duration: 2.1, repeat: -1, yoyo: true, ease: "power1.inOut" });

      // 3. KELAP-KELIP BINTANG/PARTIKEL KOSMOS
      gsap.to(".space-star", {
        opacity: 0.3,
        stagger: { each: 0.2, from: "random" },
        duration: "random(1.5, 3)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    /* Background & Teks dinamis mengikuti Light/Dark Mode sistem/toggle */
    <div className="text-gray-900 dark:text-white space-y-16 pt-6 select-none overflow-hidden pb-12 w-full min-h-screen px-4 md:px-8 transition-colors duration-300" ref={containerRef}>
      {/* ================= HERO MAIN SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[72vh]">
        {/* SISI KIRI: TEKS DESKRIPSI */}
        <div className="lg:col-span-5 space-y-6 z-10 text-left">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-[#12241e] text-emerald-600 dark:text-[#4ade80] text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-full border border-emerald-200 dark:border-[#143a27]">
            FULLSTACK DEVELOPER
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12] text-gray-900 dark:text-white">
            Menciptakan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 dark:from-[#00d2ff] dark:via-[#8b5cf6] dark:to-[#ec4899] drop-shadow-[0_0_30px_rgba(239,68,68,0.2)] dark:drop-shadow-[0_0_35px_rgba(168,85,247,0.45)]">
              Pengalaman Digital
            </span>{" "}
            <br />
            Yang Berkesan
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm md:text-base leading-relaxed font-normal">
            Saya membantu bisnis dan organisasi membangun aplikasi web modern, cepat, aman, dan scalable menggunakan teknologi terkini.
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="/projects"
              className="bg-gradient-to-r from-orange-500 to-pink-500 dark:from-[#5046e5] dark:to-[#7c3aed] hover:opacity-90 text-white px-7 py-3 rounded-xl font-medium text-sm transition shadow-lg shadow-orange-500/20 dark:shadow-[#5046e5]/30 flex items-center gap-2"
            >
              Lihat Project <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 text-gray-800 dark:text-white px-7 py-3 rounded-xl font-medium text-sm transition bg-white/50 dark:bg-[#09090b]/60 flex items-center gap-2 backdrop-blur-sm"
            >
              Hubungi Saya <FaRegCommentDots className="text-base text-gray-500 dark:text-gray-400" />
            </Link>
          </div>

          {/* Follow Me */}
          <div className="pt-2 space-y-2.5">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase block">Follow Me</span>
            <div className="flex items-center gap-2">
              {[
                { icon: <FaGithub />, url: "https://github.com/Exotic287" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/rizal-ardianto" },
                { icon: <FaInstagram />, url: "https://instagram.com/rzlard___" },
                { icon: <FaWhatsapp />, url: "https://wa.me/6282329175088" },
                { icon: <FaEnvelope />, url: "mailto:rizalardianto.dev@gmail.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 dark:border-gray-900 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-700 transition bg-white dark:bg-[#0b0b0f] text-sm shadow-sm dark:shadow-none"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* SISI KANAN: KANVAS KOSMOS ADAPTIF */}
        <div className="lg:col-span-7 flex justify-center items-center relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[540px] mt-8 lg:mt-0">
          {/* AMBIENT GLOW DI BELAKANG */}
          <div className="absolute w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] bg-orange-400/10 dark:bg-indigo-600/10 rounded-full blur-[80px] sm:blur-[120px] z-0 transition-colors duration-500" />
          <div className="absolute w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-pink-400/10 dark:bg-purple-600/10 rounded-full blur-[60px] sm:blur-[90px] z-0 transition-colors duration-500" />

          {/* TITIK-TITIK BINTANG/PLANET */}
          <div className="space-star absolute top-[15%] left-[8%] w-1.5 h-1.5 bg-orange-400 dark:bg-blue-400 rounded-full shadow-md hidden sm:block" />
          <div className="space-star absolute top-[28%] right-[4%] w-1.5 h-1.5 bg-pink-500 dark:bg-purple-400 rounded-full shadow-md hidden sm:block" />
          <div className="space-star absolute bottom-[30%] left-[3%] w-2 h-2 bg-yellow-500 dark:bg-indigo-400 rounded-full shadow-md hidden sm:block" />
          <div className="space-star absolute bottom-[18%] right-[12%] w-1 h-1 bg-purple-400 dark:bg-pink-400 rounded-full shadow-md hidden sm:block" />

          {/* ================= 1. CINCIN PLANET BERLAPIS-LAPIS ================= */}
          <div
            ref={planetRingRef}
            className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] z-10 pointer-events-none flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(249,115,22,0.2)] dark:filter dark:drop-shadow-[0_0_25px_rgba(58,123,213,0.4)]"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="lightPlanetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="darkPlanetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d2ff" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="85" fill="none" className="stroke-[url(#lightPlanetGrad)] dark:stroke-[url(#darkPlanetGrad)]" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="92" fill="none" className="stroke-[url(#lightPlanetGrad)] dark:stroke-[url(#darkPlanetGrad)] opacity-60" strokeWidth="0.8" strokeDasharray="4 2" />
              <circle cx="100" cy="100" r="98" fill="none" className="stroke-[url(#lightPlanetGrad)] dark:stroke-[url(#darkPlanetGrad)] opacity-40" strokeWidth="0.4" />
            </svg>
          </div>

          {/* ================= 2. FOTO PROFIL RAKSASA TERDEPAN ================= */}
          <div className="absolute inset-x-0 bottom-0 h-[110%] flex items-end justify-center z-20 pointer-events-none">
            <div className="w-[240px] sm:w-[320px] md:w-[380px] lg:w-[410px] h-auto relative overflow-visible">
              <Image
                src="/image/profil.webp"
                alt="Rizal Ardianto - Fullstack Web Developer"
                width={410}
                height={410}
                priority
                className="object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] dark:filter dark:drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)] scale-[1.25] sm:scale-[1.34] md:scale-[1.40] origin-bottom select-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_89%,rgba(0,0,0,0)_100%)]"
              />
            </div>
          </div>

          {/* ================= 3. BADGE LOGO TEKNOLOGI ADAPTIF ================= */}
          <div className="floating-badge-1 absolute top-[4%] left-[2%] sm:top-[6%] sm:left-[10%] z-30 p-2 sm:p-3.5 border bg-white/80 dark:bg-[#040407]/95 border-gray-200 dark:border-[#61dafb]/30 shadow-sm dark:shadow-[0_0_20px_rgba(97,218,251,0.25)] backdrop-blur-md rounded-xl sm:rounded-2xl w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 flex flex-col items-center justify-center gap-0.5 sm:gap-1">
            <FaReact className="text-[#61dafb] text-xl sm:text-2xl md:text-3xl animate-[spin_20s_linear_infinite]" />
            <span className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 font-semibold">React</span>
          </div>

          <div className="floating-badge-2 absolute top-[8%] right-[2%] sm:top-[10%] sm:right-[10%] z-30 p-2 sm:p-3.5 border bg-white/80 dark:bg-[#040407]/95 border-gray-200 dark:border-white/10 shadow-sm dark:shadow-[0_0_20px_rgba(255,255,255,0.15)] backdrop-blur-md rounded-xl sm:rounded-2xl w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 flex flex-col items-center justify-center gap-0.5 sm:gap-1">
            <SiNextdotjs className="text-gray-900 dark:text-white text-lg sm:text-xl md:text-2xl" />
            <span className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 font-semibold">Next.js</span>
          </div>

          <div className="floating-badge-3 absolute top-[45%] -left-[4%] sm:left-[2%] lg:-left-[2%] z-30 p-2 sm:p-3.5 border bg-white/80 dark:bg-[#040407]/95 border-gray-200 dark:border-[#6cc24a]/20 shadow-sm dark:shadow-[0_0_20px_rgba(108,194,74,0.2)] backdrop-blur-md rounded-xl sm:rounded-2xl w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 flex flex-col items-center justify-center gap-0.5 sm:gap-1">
            <FaNodeJs className="text-[#6cc24a] text-xl sm:text-2xl md:text-3xl" />
            <span className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 font-semibold">Node.js</span>
          </div>

          <div className="floating-badge-4 absolute top-[43%] -right-[4%] sm:right-[2%] lg:-right-[2%] z-30 p-2 sm:p-3.5 border bg-white/80 dark:bg-[#040407]/95 border-gray-200 dark:border-[#ff2d20]/20 shadow-sm dark:shadow-[0_0_20px_rgba(255,45,32,0.2)] backdrop-blur-md rounded-xl sm:rounded-2xl w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 flex flex-col items-center justify-center gap-0.5 sm:gap-1">
            <FaLaravel className="text-[#ff2d20] text-xl sm:text-2xl md:text-3xl" />
            <span className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 font-semibold">Laravel</span>
          </div>

          <div className="floating-badge-5 absolute bottom-[2%] right-[6%] sm:bottom-[6%] sm:right-[12%] z-30 p-2 sm:p-3.5 border bg-white/80 dark:bg-[#040407]/95 border-gray-200 dark:border-[#777bb4]/20 shadow-sm dark:shadow-[0_0_20px_rgba(119,123,180,0.25)] backdrop-blur-md rounded-xl sm:rounded-2xl w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 flex flex-col items-center justify-center gap-0.5 sm:gap-1">
            <SiPhp className="text-[#777bb4] text-xl sm:text-2xl md:text-3xl" />
            <span className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 font-semibold">PHP</span>
          </div>
        </div>
      </div>

      {/* ================= SECTION KARTU STATISTIK PREMIUM (FIXED OVERFLOW) ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 w-full">
        {STATS_DATA.map((stat, i) => {
          // Logika ekstraksi warna dari text line stat untuk mewarnai text nomor secara dinamis
          let numTextColor = "text-orange-500 dark:text-purple-400"; // Fallback bawaan Kartu 1
          if (stat.line.includes("bg-pink-500")) numTextColor = "text-pink-500 dark:text-blue-400";
          if (stat.line.includes("bg-red-500")) numTextColor = "text-red-500 dark:text-pink-400";
          if (stat.line.includes("bg-emerald-500")) numTextColor = "text-emerald-500 dark:text-emerald-400";

          // Cek apakah teks numerik terlalu panjang (seperti kartu ke-4) untuk menerapkan style adaptif
          const isLongText = stat.num.length > 8;

          return (
            <div
              key={i}
              className={`p-4 md:p-5 border bg-white dark:bg-[#06060a] border-gray-100 dark:border-gray-900 rounded-2xl flex flex-col justify-between relative overflow-hidden h-32 md:h-36 shadow-sm ${stat.glow} transition-colors duration-300`}
            >
              <div className={`flex ${isLongText ? "flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4" : "items-center gap-3 md:gap-4"} w-full min-w-0`}>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 dark:bg-[#0d0d15] border border-gray-100 dark:border-gray-800 flex items-center justify-center text-lg md:text-xl shrink-0">{stat.icon}</div>

                <div className="min-w-0 w-full">
                  <h3 className={`font-black tracking-tight leading-tight mb-0.5 truncate ${numTextColor} ${isLongText ? "text-sm sm:text-base md:text-lg lg:text-xl whitespace-normal font-bold" : "text-xl md:text-2xl lg:text-3xl"}`}>
                    {stat.num}
                  </h3>

                  <p className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 font-semibold truncate">{stat.label}</p>
                </div>
              </div>

              {/* Garis Dekoratif Bawah */}
              <div className={`h-[2px] w-12 rounded-full ${stat.line} opacity-80 mt-2`} />
            </div>
          );
        })}
      </div>

      {/* ================= BOTTOM LOGO BAR ================= */}
      <div className="border border-gray-100 dark:border-gray-950 bg-white/70 dark:bg-[#040406]/90 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6 w-full shadow-sm dark:shadow-none transition-colors duration-300">
        <span className="text-[12px] font-black tracking-[0.25em] text-orange-500 dark:text-purple-400 uppercase block text-center">Teknologi yang Saya Gunakan</span>
        <div className="w-full overflow-hidden relative py-2 select-none group">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white/70 dark:from-[#040406]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white/70 dark:from-[#040406]/90 to-transparent z-10 pointer-events-none" />
          <div className="flex w-max gap-x-12 px-6 motion-safe:animate-marquee-horizontal-slow group-hover:[animation-play-state:paused]">
            <div className="flex items-center gap-x-12 text-gray-500 dark:text-gray-400 text-base md:text-xl font-bold whitespace-nowrap">
              <div className="flex items-center gap-3 hover:text-gray-900 dark:hover:text-white transition cursor-default">
                <SiNextdotjs className="text-xl md:text-2xl" /> Next.js
              </div>
              <div className="flex items-center gap-3 hover:text-[#61dafb] transition cursor-default">
                <FaReact className="text-2xl md:text-[26px] motion-safe:animate-spin-slow" /> React
              </div>
              <div className="flex items-center gap-3 hover:text-[#3178c6] transition cursor-default">
                <SiTypescript className="text-xl md:text-2xl rounded-sm" /> TypeScript
              </div>
              <div className="flex items-center gap-3 hover:text-[#ff2d20] transition cursor-default">
                <FaLaravel className="text-2xl md:text-[26px]" /> Laravel
              </div>
              <div className="flex items-center gap-3 hover:text-[#777bb4] transition cursor-default">
                <SiPhp className="text-2xl md:text-[32px]" /> PHP
              </div>
              <div className="flex items-center gap-3 hover:text-[#6cc24a] transition cursor-default">
                <FaNodeJs className="text-2xl md:text-[26px]" /> Node.js
              </div>
              <div className="flex items-center gap-3 hover:text-[#00758f] transition cursor-default">
                <SiMysql className="text-2xl md:text-[32px]" /> MySQL
              </div>
              <div className="flex items-center gap-3 hover:text-[#e57014] transition cursor-default">
                <SiProxmox className="text-2xl md:text-[26px]" /> Proxmox
              </div>
            </div>
            <div className="flex items-center gap-x-12 text-gray-500 dark:text-gray-400 text-base md:text-xl font-bold whitespace-nowrap" aria-hidden="true">
              <div className="flex items-center gap-3 hover:text-gray-900 dark:hover:text-white transition cursor-default">
                <SiNextdotjs className="text-xl md:text-2xl" /> Next.js
              </div>
              <div className="flex items-center gap-3 hover:text-[#61dafb] transition cursor-default">
                <FaReact className="text-2xl md:text-[26px] motion-safe:animate-spin-slow" /> React
              </div>
              <div className="flex items-center gap-3 hover:text-[#3178c6] transition cursor-default">
                <SiTypescript className="text-xl md:text-2xl rounded-sm" /> TypeScript
              </div>
              <div className="flex items-center gap-3 hover:text-[#ff2d20] transition cursor-default">
                <FaLaravel className="text-2xl md:text-[26px]" /> Laravel
              </div>
              <div className="flex items-center gap-3 hover:text-[#777bb4] transition cursor-default">
                <SiPhp className="text-2xl md:text-[32px]" /> PHP
              </div>
              <div className="flex items-center gap-3 hover:text-[#6cc24a] transition cursor-default">
                <FaNodeJs className="text-2xl md:text-[26px]" /> Node.js
              </div>
              <div className="flex items-center gap-3 hover:text-[#00758f] transition cursor-default">
                <SiMysql className="text-2xl md:text-[32px]" /> MySQL
              </div>
              <div className="flex items-center gap-3 hover:text-[#e57014] transition cursor-default">
                <SiProxmox className="text-2xl md:text-[26px]" /> Proxmox
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTACT CTA BANNER ================= */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-900 shadow-sm transition-colors duration-300">
        <div className="absolute inset-0 bg-white dark:bg-[#06060a] z-0" />
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange-400/20 dark:bg-indigo-600/20 rounded-full blur-[60px] z-0" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-pink-400/20 dark:bg-purple-600/20 rounded-full blur-[60px] z-0" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-12 py-10">
          <div className="text-center md:text-left space-y-2">
            <span className="text-[11px] font-black tracking-[0.25em] text-orange-500 dark:text-purple-400 uppercase block">Punya Project?</span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-snug">
              Mari Wujudkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 dark:from-[#00d2ff] dark:via-[#8b5cf6] dark:to-[#ec4899]">Ide Kamu</span> Bersama Saya
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">Terbuka untuk project freelance, kolaborasi, maupun diskusi teknis. Jangan ragu untuk menghubungi saya!</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/6282329175088"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-pink-500 dark:from-[#5046e5] dark:to-[#7c3aed] hover:opacity-90 text-white px-7 py-3 rounded-xl font-medium text-sm transition shadow-lg shadow-orange-500/20 dark:shadow-[#5046e5]/30 flex items-center gap-2 whitespace-nowrap"
            >
              <FaWhatsapp className="text-base" /> Chat WhatsApp
            </a>
            <a
              href="mailto:rizalardianto.dev@gmail.com"
              className="border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 text-gray-800 dark:text-white px-7 py-3 rounded-xl font-medium text-sm transition bg-white/50 dark:bg-[#09090b]/60 flex items-center gap-2 backdrop-blur-sm whitespace-nowrap"
            >
              <FaEnvelope className="text-gray-500 dark:text-gray-400" /> Kirim Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
