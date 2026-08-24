"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "À propos",
    title1: "Une approche orientée",
    title2: "défense.",
    text: "Je m'intéresse à l'utilisation du Machine Learning pour la détection d'anomalies, la corrélation d'alertes SOC et la réponse automatisée aux incidents (SOAR). Convaincu que la prochaine génération de défense cyber sera pilotée par l'IA.",
  },
  en: {
    eyebrow: "About",
    title1: "A defense-oriented",
    title2: "approach.",
    text: "I'm focused on using Machine Learning for anomaly detection, SOC alert correlation and automated incident response (SOAR). Convinced that the next generation of cyber defense will be AI-driven.",
  },
};

export default function About() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-8 h-32 w-32 sm:h-36 sm:w-36"
        >
          <div className="absolute inset-0 rounded-full bg-[var(--primary)]/30 blur-xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[var(--primary)]/50 shadow-[0_0_40px_rgba(37,99,235,0.25)]">
            <Image
              src="/images/profile.jpg"
              alt="Jean Daniel Sylva Ossibouyen"
              fill
              sizes="144px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
          {t.eyebrow}
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">
          {t.title1}
          <span className="text-[var(--primary)]"> {t.title2}</span>
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">{t.text}</p>
      </div>
    </section>
  );
}