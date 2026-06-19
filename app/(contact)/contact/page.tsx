import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hubungi Rizal Ardianto untuk kolaborasi project, freelance web development, atau diskusi teknis. Tersedia via email, WhatsApp, atau form kontak langsung.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact | Rizal Ardianto",
    description:
      "Terbuka untuk project freelance, kolaborasi, maupun diskusi teknis. Kirim pesan dan saya akan membalas secepatnya.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
