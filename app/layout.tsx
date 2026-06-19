import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://rizalardianto.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Rizal Ardianto | Fullstack Web Developer",
    template: "%s | Rizal Ardianto",
  },
  description:
    "Rizal Ardianto — Fullstack Web Developer spesialis React/Next.js & Laravel. Berpengalaman 2+ tahun membangun aplikasi web modern, sistem informasi pemerintah, dan solusi digital enterprise.",
  keywords: [
    "Rizal Ardianto",
    "Fullstack Developer",
    "Web Developer Indonesia",
    "Next.js Developer",
    "React Developer",
    "Laravel Developer",
    "PHP Developer",
    "TypeScript",
    "Portfolio Web Developer",
    "Pekalongan",
    "Jawa Tengah",
    "Software House",
  ],
  authors: [{ name: "Rizal Ardianto", url: BASE_URL }],
  creator: "Rizal Ardianto",
  publisher: "Rizal Ardianto",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Rizal Ardianto Portfolio",
    title: "Rizal Ardianto | Fullstack Web Developer",
    description:
      "Fullstack Web Developer spesialis React/Next.js & Laravel. Lihat portofolio, skill, dan pengalaman profesional saya.",
    images: [
      {
        url: "/image/profil.png",
        width: 1200,
        height: 630,
        alt: "Rizal Ardianto - Fullstack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizal Ardianto | Fullstack Web Developer",
    description:
      "Fullstack Web Developer spesialis React/Next.js & Laravel. Lihat portofolio, skill, dan pengalaman saya.",
    images: ["/image/profil.png"],
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rizal Ardianto",
  url: BASE_URL,
  email: "rizalardianto.dev@gmail.com",
  telephone: "+6282329175088",
  jobTitle: "Fullstack Web Developer",
  description:
    "Fullstack Web Developer spesialis React/Next.js dan Laravel dengan 2+ tahun pengalaman membangun aplikasi web modern dan sistem informasi.",
  image: `${BASE_URL}/image/profil.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pekalongan",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  sameAs: [
    "https://github.com/Exotic287",
    "https://www.linkedin.com/in/rizal-ardianto",
    "https://instagram.com/rzlard___",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "PHP",
    "MySQL",
    "Tailwind CSS",
    "Nginx",
    "Redis",
    "Proxmox",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "STMIK WIDYA PRATAMA",
  },
  worksFor: {
    "@type": "Organization",
    name: "CV CAHAYA MEDIA INFORMATIKA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between">
        <ThemeProvider>
          {/* HEADER / GLOBAL NAVBAR */}
          <header className="border-b border-border-custom bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center relative">
              {/* Sisi Kiri: Logo & Nama */}
              <Link href="/" className="py-4 flex items-center gap-2 text-sm font-bold tracking-wider text-text-main uppercase">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image src="/image/ra-light.webp" alt="RA Logo Light" fill priority sizes="40px" className="object-contain block dark:hidden" />
                  <Image src="/image/ra-dark.webp" alt="RA Logo Dark" fill priority sizes="40px" className="object-contain hidden dark:block" />
                </div>
                <span className="hidden sm:inline tracking-widest text-xs font-semibold pl-2 border-l border-border-custom/60 text-gray-900 dark:text-white">Rizal Ardianto</span>
              </Link>

              {/* Pusat: Menu Navigasi */}
              <Navbar />

              {/* Sisi Kanan: Dark Mode Switcher & Download CV */}
              <div className="py-4 flex items-center gap-3">
                <ThemeToggle />
                <button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer shadow-md">Download CV</button>
              </div>
            </div>
          </header>

          {/* KONTEN HALAMAN UTAMA */}
          <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-12">{children}</main>

          {/* FOOTER */}
          <footer className="border-t border-border-custom py-6 text-center text-sm text-gray-500 bg-surface/20 transition-colors duration-300">© 2026 Rizal Ardianto · Dibangun dengan kopi dan semangat ☕</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
