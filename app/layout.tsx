import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HeaderClient } from "@/components/HeaderClient";
import "./globals.css";

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
        url: "/image/profile.png",
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
    images: ["/image/profile.png"],
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/image/ra-light.webp", media: "(prefers-color-scheme: light)", type: "image/webp" },
      { url: "/image/ra-dark.webp", media: "(prefers-color-scheme: dark)", type: "image/webp" },
    ],
    shortcut: "/image/ra-light.webp",
    apple: "/image/ra-light.webp",
  },
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
  image: `${BASE_URL}/image/profile.png`,
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
    name: "PT HARDESES ABADI INDONESIA",
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
          suppressHydrationWarning
        />
      </head>
      <body className="min-h-full flex flex-col justify-between" suppressHydrationWarning>
        <ThemeProvider>
          <HeaderClient />

          {/* KONTEN HALAMAN UTAMA */}
          <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">{children}</main>

          {/* FOOTER */}
          <footer className="border-t border-border-custom py-6 px-4 text-center text-xs sm:text-sm text-gray-500 bg-surface/20 transition-colors duration-300">© 2026 Rizal Ardianto · Dibangun dengan kopi dan semangat ☕</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
