"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";

export function HeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border-custom bg-background/95 backdrop-blur-md sticky top-0 z-[90] transition-colors duration-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center relative">
        <Link href="/" aria-label="Rizal Ardianto - Beranda" className="py-3 sm:py-4 flex items-center gap-2 text-sm font-bold tracking-wider text-text-main uppercase">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <Image src="/image/ra-light.webp" alt="RA Logo Light" fill priority sizes="40px" className="object-contain block dark:hidden" />
            <Image src="/image/ra-dark.webp" alt="RA Logo Dark" fill priority sizes="40px" className="object-contain hidden dark:block" />
          </div>
          <span className="hidden sm:inline tracking-widest text-xs font-semibold pl-2 border-l border-border-custom/60 text-gray-900 dark:text-white">Rizal Ardianto</span>
        </Link>

        <div className="flex items-center gap-3">
          <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </div>

        <div className="py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg border border-border-custom bg-white dark:bg-[#0b0b0f] hover:bg-surface transition-all duration-300 text-gray-700 dark:text-gray-300 flex items-center justify-center shadow-sm"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <ThemeToggle />
          <button className="hidden sm:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer shadow-md">Download CV</button>
        </div>
      </div>
    </header>
  );
}