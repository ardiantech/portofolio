"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane, FaLinkedin } from "react-icons/fa";

type QuickContact = {
  label: string;
  hint: string;
  href: string;
  icon: IconType;
  iconClass: string;
  hoverClass: string;
};

const QUICK_CONTACTS: QuickContact[] = [
  {
    label: "WhatsApp",
    hint: "Chat langsung",
    href: "https://wa.me/6282329175088",
    icon: FaWhatsapp,
    iconClass: "text-emerald-500",
    hoverClass: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
  },
  {
    label: "Email",
    hint: "Kirim pesan",
    href: "mailto:rizalardianto.dev@gmail.com",
    icon: FaEnvelope,
    iconClass: "text-orange-500 dark:text-purple-400",
    hoverClass: "hover:border-orange-500/40 dark:hover:border-purple-500/40 hover:shadow-orange-500/10 dark:hover:shadow-purple-500/10",
  },
  {
    label: "LinkedIn",
    hint: "Terhubung",
    href: "https://www.linkedin.com/in/rizal-ardianto",
    icon: FaLinkedin,
    iconClass: "text-[#0077B5]",
    hoverClass: "hover:border-[#0077B5]/40 hover:shadow-[#0077B5]/10",
  },
];

const CONTACT_DETAILS = [
  {
    icon: FaEnvelope,
    iconClass: "text-orange-500 dark:text-purple-400",
    label: "Email",
    value: "rizalardianto.dev@gmail.com",
    href: "mailto:rizalardianto.dev@gmail.com",
  },
  {
    icon: FaWhatsapp,
    iconClass: "text-emerald-500",
    label: "WhatsApp",
    value: "+62 823-2917-5088",
    href: "https://wa.me/6282329175088",
  },
  {
    icon: FaMapMarkerAlt,
    iconClass: "text-pink-500",
    label: "Lokasi",
    value: "Pekalongan, Jawa Tengah",
    href: null,
  },
];

export default function ContactContent() {
  const formRef = useRef<HTMLFormElement>(null);
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? 0 : 18;

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
    } catch (error: unknown) {
      const err = error as { status?: number; text?: string };
      console.error("EmailJS error detail:", err?.status, err?.text, error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full min-h-12 bg-background border border-border-custom rounded-xl px-4 py-3.5 text-sm text-text-main placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-orange-400 dark:focus:border-purple-500 focus:ring-2 focus:ring-orange-400/20 dark:focus:ring-purple-500/20 transition-colors";

  return (
    <div className="space-y-8 sm:space-y-10 pb-12">
      <motion.div initial={{ opacity: 0, y: rise }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative">
        <div className="absolute -top-6 -left-4 w-28 h-28 sm:w-32 sm:h-32 bg-orange-400/10 dark:bg-purple-600/10 rounded-full blur-[50px] pointer-events-none" />
        <span className="text-[11px] font-black tracking-[0.25em] text-orange-500 dark:text-purple-400 uppercase block mb-2">Hubungi Saya</span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Mari{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 dark:from-[#00d2ff] dark:via-[#8b5cf6] dark:to-[#ec4899]">Berkolaborasi</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-lg leading-relaxed">
          Punya proyek, ide, atau sekadar ingin berdiskusi? Saya terbuka untuk segala bentuk kolaborasi. Kirim pesan dan saya akan membalas secepatnya.
        </p>
      </motion.div>

      {/* QUICK CONTACT */}
      <motion.div
        initial={{ opacity: 0, y: rise }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-2.5 sm:gap-4"
      >
        {QUICK_CONTACTS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center gap-1.5 sm:gap-2 min-h-[96px] sm:min-h-[112px] p-3 rounded-2xl border bg-white dark:bg-[#06060a] border-gray-100 dark:border-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${item.hoverClass}`}
            >
              <span className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#0d0d15] border border-gray-100 dark:border-gray-800 flex items-center justify-center text-lg shrink-0 transition-colors group-hover:border-gray-300 dark:group-hover:border-gray-700">
                <Icon className={item.iconClass} />
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-100 text-center leading-tight">{item.label}</span>
              <span className="hidden sm:block text-[10px] text-gray-400 dark:text-gray-500 font-medium">{item.hint}</span>
            </a>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
        {/* FORM */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: rise }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-2 bg-white dark:bg-[#06060a] border border-gray-100 dark:border-gray-900 p-5 sm:p-6 md:p-8 rounded-2xl space-y-5 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-400/5 dark:bg-purple-600/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative">
            <h2 className="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white">Kirim Pesan</h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">Isi form di bawah, saya biasanya membalas dalam 1×24 jam.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label htmlFor="from_name" className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Nama Lengkap
              </label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                required
                autoComplete="name"
                value={formData.from_name}
                onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                placeholder="Nama Anda"
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="from_email" className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Email
              </label>
              <input
                id="from_email"
                type="email"
                name="from_email"
                required
                autoComplete="email"
                inputMode="email"
                value={formData.from_email}
                onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                placeholder="email@anda.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Subjek
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Tulis subjek pesan"
              className={inputClass}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Pesan
            </label>
            <textarea
              id="message"
              rows={5}
              name="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ceritakan proyek atau ide kamu di sini..."
              className={`${inputClass} resize-none min-h-[140px]`}
            />
          </div>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                role="status"
                aria-live="polite"
                className="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 px-4 py-3 rounded-xl"
              >
                <FaCheckCircle className="shrink-0 mt-0.5" />
                Pesan berhasil terkirim! Saya akan segera membalas.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                role="alert"
                aria-live="assertive"
                className="text-red-500 text-sm font-medium bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 px-4 py-3 rounded-xl"
              >
                Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto min-h-12 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-[#5046e5] dark:to-[#7c3aed] hover:opacity-90 disabled:opacity-60 text-white px-8 py-3 rounded-xl font-semibold text-sm transition shadow-lg shadow-orange-500/20 dark:shadow-[#5046e5]/30 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
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
        </motion.form>

        {/* SIDE COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: rise }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5"
        >
          <div className="bg-white dark:bg-[#06060a] border border-gray-100 dark:border-gray-900 p-5 sm:p-6 rounded-2xl shadow-sm space-y-4 sm:space-y-5">
            <h3 className="font-extrabold text-gray-900 dark:text-white text-base border-b border-gray-100 dark:border-gray-900 pb-3">Informasi Kontak</h3>

            {CONTACT_DETAILS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-[#0d0d15] border border-gray-100 dark:border-gray-800 flex items-center justify-center shrink-0">
                    <Icon className={`text-sm ${item.iconClass}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-purple-400 transition break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-900 shadow-sm h-44 sm:h-56 lg:h-52">
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
        </motion.div>
      </div>
    </div>
  );
}