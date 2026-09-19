import type { Metadata } from "next";
import { SkillsContent } from "@/components/SkillsContent";

export const metadata: Metadata = {
  title: "Skills & Technologies",
  description: "Tech stack dan keahlian teknis Rizal Ardianto — Frontend (React, Next.js, TypeScript), Backend (Laravel, PHP), Database (MySQL), DevOps (Nginx, Redis, Proxmox, Ubuntu), dan toolkits profesional.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    url: "/skills",
    title: "Skills & Technologies | Rizal Ardianto",
    description: "Kombinasi teknologi dan infrastruktur yang digunakan untuk membangun aplikasi web modern dan sistem informasi enterprise.",
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}
