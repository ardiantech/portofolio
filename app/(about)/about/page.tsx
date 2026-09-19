import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Kenali Rizal Ardianto lebih dekat — perjalanan karier sebagai Fullstack Developer, filosofi kerja, pengalaman di CV Cahaya Media Informatika, dan latar belakang pendidikan di STMIK Widya Pratama.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "About Me | Rizal Ardianto",
    description:
      "Fullstack Developer dengan 2+ tahun pengalaman. Spesialis React/Next.js dan Laravel. Lihat perjalanan karier dan filosofi kerja saya.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
