"use client";

import { motion } from "framer-motion";
import { EXPERIENCE_DATA, STATS_DATA } from "@/constants";
import Profile3DTilt from "@/components/Profile3DTilt";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AboutContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16 pb-12"
    >
      {/* Bagian Atas: Profil & Deskripsi */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-12 items-center">
        {/* FOTO PROFIL INTERAKTIF 3D */}
        <Profile3DTilt />

        {/* Deskripsi Tentang Saya */}
        <div className="space-y-6 flex-grow w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-primary font-bold uppercase tracking-widest">Tentang Saya</span>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 dark:from-[#00d2ff] dark:via-[#8b5cf6] dark:to-[#ec4899] bg-clip-text text-transparent">
              About Me
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed"
          >
            <p>
              Sebagai Fullstack Developer, saya terbiasa membangun sistem digital dari hulu ke hilir—mulai dari arsitektur database yang solid hingga interface yang responsif. Saya memiliki ketertarikan mendalam pada optimasi performa,
              keamanan, dan penerapan teknologi modern.
            </p>
            <p>Selalu tertantang untuk mengeksplorasi ekosistem baru dan mengimplementasikan solusi digital terbaik yang mampu mendorong pertumbuhan bisnis maupun efisiensi organisasi secara nyata.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {STATS_DATA.map((stat, i) => {
              let numTextColor = "text-orange-500 dark:text-purple-400";
              if (stat.line?.includes("bg-pink-500")) numTextColor = "text-pink-500 dark:text-blue-400";
              if (stat.line?.includes("bg-red-500")) numTextColor = "text-red-500 dark:text-pink-400";
              if (stat.line?.includes("bg-emerald-500")) numTextColor = "text-emerald-500 dark:text-emerald-400";

              const isLongText = stat.num.length > 8;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 bg-surface border border-border-custom rounded-xl text-center relative overflow-hidden group cursor-pointer ${stat.glow} flex flex-col justify-center min-h-[90px] md:min-h-[100px] transition-all duration-300`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl mb-2"
                  >
                    {stat.icon}
                  </motion.div>
                  <h4
                    className={`font-black tracking-tight leading-tight transition-colors duration-300 ${numTextColor} ${
                      isLongText
                        ? "text-xs md:text-sm whitespace-normal px-1 break-words"
                        : "text-2xl"
                    }`}
                  >
                    {stat.num}
                  </h4>

                  <p className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 font-medium mt-1 leading-tight">{stat.label}</p>
                  
                  <motion.div
                    initial={{ width: "30%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className={`h-[2px] ${stat.line} mx-auto mt-2 rounded-full`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* ================= BAGIAN FILOSOFI KERJA ================= */}
      <motion.div variants={itemVariants} className="space-y-6 border-t border-border-custom/60 pt-12 relative">
        {/* Ambient glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-10 right-0 w-64 h-64 bg-orange-400/10 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs text-primary font-bold uppercase tracking-widest">Prinsip Kerja</span>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-2">
            Filosofi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 dark:from-[#00d2ff] dark:to-[#8b5cf6]">Pendekatan Pengembangan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "Efficiency First",
              subtitle: "Mindset",
              desc: "Menulis kode bukan cuma agar aplikasi berjalan, tapi bagaimana struktur logic tetap bersih, ringan, dan mudah di-maintain jangka panjang.",
              color: "text-orange-500 dark:text-purple-400",
              borderColor: "border-orange-500/20 dark:border-purple-500/20",
              glowColor: "group-hover:shadow-orange-500/10 dark:group-hover:shadow-purple-500/20",
            },
            {
              num: "02",
              title: "User-Centric Development",
              subtitle: "Execution",
              desc: "Sisi backend yang kuat harus diimbangi dengan frontend yang interaktif dan responsif demi kenyamanan penuh pengguna.",
              color: "text-pink-500 dark:text-blue-400",
              borderColor: "border-pink-500/20 dark:border-blue-400/20",
              glowColor: "group-hover:shadow-pink-500/10 dark:group-hover:shadow-blue-400/20",
            },
            {
              num: "03",
              title: "Adaptive Learning",
              subtitle: "Growth",
              desc: "Teknologi terus berubah. Mengadopsi teknologi baru secara cepat dan tepat adalah kunci memberikan solusi bisnis terbaik.",
              color: "text-emerald-500",
              borderColor: "border-emerald-500/20",
              glowColor: "group-hover:shadow-emerald-500/10",
            },
          ].map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group p-6 bg-surface/40 border ${principle.borderColor} rounded-2xl space-y-3 relative overflow-hidden cursor-pointer transition-all duration-300 shadow-sm ${principle.glowColor}`}
            >
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.5, rotate: 90 }}
                transition={{ duration: 0.6 }}
              />

              <div className={`${principle.color} font-black text-4xl opacity-20 absolute top-4 right-4 transition-all duration-300 group-hover:opacity-30 group-hover:scale-110`}>
                {principle.num}
              </div>

              <div className="relative z-10">
                <div className={`${principle.color} font-bold text-lg mb-1`}>
                  {principle.num} / {principle.subtitle}
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                  {principle.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
                  {principle.desc}
                </p>
              </div>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className={`h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bagian Bawah: Perjalanan Karier / Timeline */}
      <motion.div variants={itemVariants} className="space-y-6 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs text-primary font-bold uppercase tracking-widest">Journey Saya</span>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-2">
            Pengalaman & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 dark:from-[#00d2ff] dark:to-[#8b5cf6]">Pendidikan</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-border-custom/80 ml-3 pl-6 space-y-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
              className="relative group/item"
            >
              <motion.span
                whileHover={{ scale: 1.5 }}
                className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-background z-10 transition-all duration-300 group-hover/item:bg-primary group-hover/item:border-primary/20 group-hover/item:shadow-[0_0_15px_rgba(254,119,67,0.6)] dark:group-hover/item:shadow-[0_0_15px_rgba(99,102,241,0.6)] cursor-pointer"
              />

              <motion.div
                whileHover={{ x: 8, y: -4 }}
                className="bg-surface border border-border-custom p-5 md:p-6 rounded-2xl space-y-2 relative overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none"
                  whileHover={{ scale: 1.5, rotate: 45 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 relative z-10">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-xs text-primary font-bold tracking-wider uppercase bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-lg w-fit shadow-sm"
                  >
                    {exp.period}
                  </motion.span>
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500">{exp.company}</h4>
                </div>

                <div className="pt-1 relative z-10">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 group-hover/item:text-primary transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed pt-2 border-t border-border-custom/40 mt-2 group-hover/item:border-primary/10 transition-colors">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
