"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Home, User, Code, Briefcase, Mail } from "lucide-react";

type NavbarProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
};

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Profil", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [mounted, setMounted] = useState(false);

  // Portal hanya boleh dirender di client (document tidak ada saat SSR)
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const updateLinePosition = (href: string) => {
    if (!containerRef.current) return;

    const activeLink = containerRef.current.querySelector(`a[href="${href}"]`) as HTMLElement | null;

    if (activeLink) {
      setLineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        opacity: 1,
      });
    } else {
      setLineStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  useEffect(() => {
    updateLinePosition(pathname);
  }, [pathname]);

  // Kunci scroll body saat menu terbuka + tutup dengan tombol Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  const mobileMenu = (
    <AnimatePresence mode="wait">
      {mobileMenuOpen && (
        <motion.div key="sidebar-overlay" className="fixed inset-0 z-[100]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          {/* Backdrop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]" />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[320px] bg-background border-l border-border-custom z-[200] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Profile Header */}
            <div className="p-6 border-b border-border-custom/60 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border-custom">
                    <Image src="/image/profile.webp" alt="Foto profil Rizal Ardianto" fill sizes="40px" className="object-cover" />
                  </div>
                  <div>
                    {/* <p className="text-xs text-gray-500 dark:text-gray-400">Hello,</p> */}
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">Rizal Ardianto</p>
                  </div>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-surface transition-colors" aria-label="Close Menu">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Theme Toggle */}
            {/* <div className="px-6 py-4 border-b border-border-custom/60 shrink-0">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Theme</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setTheme("light")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${currentTheme === "light" ? "bg-primary text-white" : "bg-surface text-gray-600 dark:text-gray-400 hover:bg-surface/80"}`}
                >
                  <Sun className="w-4 h-4" />
                  Light
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${currentTheme === "dark" ? "bg-primary text-white" : "bg-surface text-gray-600 dark:text-gray-400 hover:bg-surface/80"}`}
                >
                  <Moon className="w-4 h-4" />
                  Dark
                </button>
              </div>
            </div> */}

            {/* Menu Items */}
            <nav className="flex-1 min-h-0 overflow-y-auto p-4 space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleMobileMenuClick}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-700 dark:text-gray-300 hover:bg-surface hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Desktop Menu */}
      <div ref={containerRef} className="hidden md:flex gap-4 text-sm font-medium items-center relative self-stretch" onMouseLeave={() => updateLinePosition(pathname)}>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => updateLinePosition(item.href)}
              className={`py-5 transition-colors duration-300 relative z-10 ${isActive ? "text-primary font-bold tracking-wide" : "text-gray-400 hover:text-text-main"}`}
            >
              {item.name}
            </Link>
          );
        })}

        <span
          className="absolute bottom-0 h-[2.5px] bg-primary transition-all duration-300 ease-out shadow-[0_1px_12px_rgba(99,102,241,0.8),0_0_4px_rgba(99,102,241,0.6)] pointer-events-none z-20 rounded-full"
          style={{
            left: `${lineStyle.left}px`,
            width: `${lineStyle.width}px`,
            opacity: lineStyle.opacity,
            transform: `scaleX(${lineStyle.opacity ? 1 : 0})`,
          }}
        />
      </div>

      {/* Mobile Menu Overlay: di-portal ke <body> supaya lepas dari stacking context header */}
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
