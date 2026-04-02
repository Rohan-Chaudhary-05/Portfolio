"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { personal } from "@/lib/data";

const charVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const chars = personal.tagline.split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Radial glow behind heading */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none -z-10">
        <div
          className="w-[700px] h-[300px] rounded-full blur-[120px]"
          style={{ background: "rgba(6,182,212,0.08)" }}
        />
      </div>

      {/* Ambient blobs */}
      <div className="absolute top-[-8%] right-[-4%] w-[480px] h-[480px] rounded-full blur-[130px] pointer-events-none -z-10"
        style={{ background: "rgba(6,182,212,0.055)" }} />
      <div className="absolute bottom-[-4%] left-[-6%] w-[360px] h-[360px] rounded-full blur-[110px] pointer-events-none -z-10"
        style={{ background: "rgba(6,182,212,0.04)" }} />

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text content */}
        <div className="flex-1 min-w-0">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-7"
          >
            <span className="inline-flex items-center gap-2.5 text-sm text-text-secondary border border-border rounded-full px-3.5 py-1.5 bg-card/60 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available from September 2026
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="tracking-tight text-text-primary leading-[1.06] mb-5"
            style={{ fontSize: "clamp(3.04rem, 6.4vw, 4.8rem)" }}
          >
            {personal.name}
          </motion.h1>

          {/* Tagline — typewriter */}
          <motion.p
            className="text-text-secondary font-medium mb-6"
            style={{ fontSize: "clamp(1.625rem, 3vw, 1.95rem)" }}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.038, delayChildren: 0.55 },
              },
            }}
            aria-label={personal.tagline}
          >
            {chars.map((char, i) => (
              <motion.span
                key={i}
                variants={charVariants}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl mb-10"
          >
            {personal.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.05, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-hover hover:shadow-[0_0_28px_rgba(6,182,212,0.45)] transition-all duration-300"
            >
              Get In Touch
            </button>
            <a
              href="/rohan-chaudhary-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border text-text-secondary text-sm font-medium hover:border-accent/50 hover:text-text-primary hover:shadow-[0_0_16px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              <Download size={15} strokeWidth={2} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex-shrink-0 hidden md:flex items-center justify-center"
        >
          <div
            className="w-80 h-80 rounded-full border-2 border-accent/40 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.25) 0%, rgba(6,182,212,0.08) 100%)" }}
          >
            <span
              className="text-7xl font-bold text-accent"
              style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
            >
              RC
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] text-text-muted tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
