"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Profile3DTilt() {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !containerRef.current || !shineRef.current) return;

    const card = cardRef.current;
    const box = containerRef.current.getBoundingClientRect();

    // Hitung posisi kursor relatif terhadap koordinat tengah kartu
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    // Tentukan batas maksimal sudut kemiringan (semakin besar angka, semakin miring)
    const angleX = -y / (box.height / 30);
    const angleY = x / (box.width / 30);

    // Jalankan animasi kemiringan 3D
    gsap.to(card, {
      rotateX: angleX,
      rotateY: angleY,
      transformPerspective: 1000,
      scale: 1.03,
      ease: "power3.out",
      duration: 0.4,
    });

    // Efek kilatan cahaya (Dynamic Flash/Shine) mengikuti arah mouse
    const shineX = (x / box.width) * 100 + 50;
    const shineY = (y / box.height) * 100 + 50;
    gsap.to(shineRef.current, {
      background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
      duration: 0.2,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !shineRef.current) return;

    // Efek membal kembali ke posisi semula (Reset dengan animasi smooth)
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: "elastic.out(1.2, 0.6)",
      duration: 1.2,
    });

    // Sembunyikan efek cahaya refleksi glass
    gsap.to(shineRef.current, {
      background: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)",
      duration: 0.5,
    });
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="relative shrink-0 py-6 cursor-pointer">
      {/* Kontainer Kartu Utama */}
      <div
        ref={cardRef}
        className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800/40 dark:to-gray-900/40 p-[1.5px] relative overflow-visible shadow-lg dark:shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Lapisan Dalam Kartu */}
        <div
          className="w-full h-full rounded-[15px] bg-white dark:bg-[#07070c] overflow-hidden relative"
          style={{ transform: "translateZ(10px)" }} // Membuat gambar terasa agak mengambang di dalam frame
        >
          {/* Layer Refleksi Cahaya Dinamis */}
          <div ref={shineRef} className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay" />

          {/* Bayangan halus di dalam frame */}
          <div className="absolute inset-0 shadow-[inset_0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)] z-10 pointer-events-none" />

          <Image src="/image/profil.webp" alt="Rizal Ardianto" fill priority sizes="(max-width: 1024px) 256px, 320px" className="object-cover object-center scale-102 select-none" />
        </div>

        {/* Tag ID-Card yang menonjol keluar dari dimensi kartu (Efek Pop-out Luar) */}
      </div>
    </div>
  );
}
