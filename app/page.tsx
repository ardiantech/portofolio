import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Rizal Ardianto | Fullstack Web Developer",
  description:
    "Fullstack Web Developer yang membantu bisnis membangun aplikasi web modern, cepat, aman, dan scalable. Spesialis React/Next.js, Laravel, dan TypeScript.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Rizal Ardianto | Fullstack Web Developer",
    description:
      "Fullstack Web Developer yang membantu bisnis membangun aplikasi web modern, cepat, aman, dan scalable.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
