import type { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portofolio project Rizal Ardianto — sistem informasi pemerintah, aplikasi web enterprise, dan solusi digital modern. Dibangun dengan Laravel, Next.js, dan MySQL.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    title: "Projects | Rizal Ardianto",
    description:
      "Kumpulan project web yang telah dibangun — dari sistem e-gaji, SiCalK laporan keuangan, hingga SKM survey kepuasan masyarakat.",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
