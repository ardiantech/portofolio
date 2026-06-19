"use client";

import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export default function ContactContent() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ from_name: "", from_email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, {
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject,
        message: formData.message,
      });
      console.log("EmailJS success:", result);
      setStatus("success");
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("EmailJS error detail:", error?.status, error?.text, error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full bg-background border border-border-custom rounded-xl p-3.5 text-sm focus:outline-none focus:border-orange-400 dark:focus:border-purple-500 focus:ring-1 focus:ring-orange-400/30 dark:focus:ring-purple-500/30 transition text-text-main placeholder:text-gray-400 dark:placeholder:text-gray-600";

  return (
    <div className="space-y-10 pb-12">
      {/* ===== HEADER ===== */}
      <div className="relative">
        <div className="absolute -top-6 -left-4 w-32 h-32 bg-orange-400/10 dark:bg-purple-600/10 rounded-full blur-[50px] pointer-events-none" />
        <span className="text-[11px] font-black tracking-[0.25em] text-orange-500 dark:text-purple-400 uppercase block mb-2">Hubungi Saya</span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 dark:from-[#00d2ff] dark:via-[#8b5cf6] dark:to-[#ec4899]">Berkolaborasi</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-lg">Punya proyek, ide, atau sekadar ingin berdiskusi? Saya terbuka untuk segala bentuk kolaborasi. Kirim pesan dan saya akan membalas secepatnya.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ===== FORM ===== */}
        <form ref={formRef} onSubmit={handleSubmit} className="lg:col-span-2 bg-white dark:bg-[#06060a] border border-gray-100 dark:border-gray-900 p-6 md:p-8 rounded-2xl space-y-5 shadow-sm relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-400/5 dark:bg-purple-600/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Nama Lengkap</label>
              <input type="text" name="from_name" required value={formData.from_name} onChange={(e) => setFormData({ ...formData, from_name: e.target.value })} placeholder="Nama Anda" className={inputClass} />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Email</label>
              <input type="email" name="from_email" required value={formData.from_email} onChange={(e) => setFormData({ ...formData, from_email: e.target.value })} placeholder="email@anda.com" className={inputClass} />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Subjek</label>
            <input type="text" name="subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Tulis subjek pesan" className={inputClass} />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Pesan</label>
            <textarea
              rows={6}
              name="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ceritakan proyek atau ide kamu di sini..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Status messages */}
          {status === "success" && (
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 px-4 py-3 rounded-xl">
              <FaCheckCircle className="shrink-0" />
              Pesan berhasil terkirim! Saya akan segera membalas.
            </div>
          )}
          {status === "error" && (
            <div className="text-red-500 text-sm font-medium bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 px-4 py-3 rounded-xl">Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.</div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-gradient-to-r from-orange-500 to-pink-500 dark:from-[#5046e5] dark:to-[#7c3aed] hover:opacity-90 disabled:opacity-60 text-white px-8 py-3 rounded-xl font-semibold text-sm transition shadow-lg shadow-orange-500/20 dark:shadow-[#5046e5]/30 flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Mengirim...
              </>
            ) : (
              <>
                <FaPaperPlane className="text-xs" /> Kirim Pesan
              </>
            )}
          </button>
        </form>

        {/* ===== KOLOM KANAN ===== */}
        <div className="space-y-5">
          {/* Info Kontak */}
          <div className="bg-white dark:bg-[#06060a] border border-gray-100 dark:border-gray-900 p-6 rounded-2xl shadow-sm space-y-5">
            <h3 className="font-extrabold text-gray-900 dark:text-white text-base border-b border-gray-100 dark:border-gray-900 pb-3">Informasi Kontak</h3>

            {[
              {
                icon: <FaEnvelope className="text-orange-500 dark:text-purple-400" />,
                label: "Email",
                value: "rizalardianto.dev@gmail.com",
                href: "mailto:rizalardianto.dev@gmail.com",
              },
              {
                icon: <FaWhatsapp className="text-emerald-500" />,
                label: "WhatsApp",
                value: "+62 823-2917-5088",
                href: "https://wa.me/6282329175088",
              },
              {
                icon: <FaMapMarkerAlt className="text-pink-500" />,
                label: "Lokasi",
                value: "Pekalongan, Jawa Tengah",
                href: null,
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-[#0d0d15] border border-gray-100 dark:border-gray-800 flex items-center justify-center shrink-0 text-sm">{item.icon}</div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-purple-400 transition break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-900 shadow-sm h-52">
            <iframe
              title="Lokasi Pekalongan"
              src="https://www.google.com/maps?q=-6.938749105705877,109.53689183322852&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Quick WhatsApp CTA */}
          <a
            href="https://wa.me/6282329175088?text=Halo%20Rizal%2C%20saya%20ingin%20berdiskusi%20tentang%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold text-sm transition shadow-lg shadow-emerald-500/20"
          >
            <FaWhatsapp className="text-base" /> Chat Langsung via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
