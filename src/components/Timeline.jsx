"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Vue d'ensemble",
    title: "Mon évolution",
    proLabel: "Expérience pro",
    formationLabel: "Formation",
    events: [
      { year: "2019-2020", label: "Baccalauréat Scientifique (Bac D)", type: "formation" },
      { year: "2021-2023", label: "Licence Pro. Téléinformatique — Université de Bangui", type: "formation" },
      { year: "Mars-Avril 2023", label: "Technicien Support IT — BEAC Bangui", type: "pro" },
      { year: "Juil-Oct 2023", label: "Technicien Réseaux & Télécom — Orange Centrafrique", type: "pro" },
      { year: "Juil-Sept 2024", label: "Technicien Support IT — Cours Pénale Spéciale de Bangui", type: "pro" },
      { year: "2024-2026", label: "Master Cybersécurité — ESGITECH Tunis", type: "formation" },
      { year: "Fév-Juil 2026", label: "Ingénieur Cybersécurité — SFM Technologies", type: "pro" },
    ],
  },
  en: {
    eyebrow: "Overview",
    title: "My Journey",
    proLabel: "Professional experience",
    formationLabel: "Education",
    events: [
      { year: "2019-2020", label: "Scientific Baccalaureate (Bac D)", type: "formation" },
      { year: "2021-2023", label: "Professional Bachelor's in Teleinformatics — University of Bangui", type: "formation" },
      { year: "Mar-Apr 2023", label: "IT Support Technician — BEAC Bangui", type: "pro" },
      { year: "Jul-Oct 2023", label: "Network & Telecom Technician — Orange Centrafrique", type: "pro" },
      { year: "Jul-Sep 2024", label: "IT Support Technician — Special Criminal Court of Bangui", type: "pro" },
      { year: "2024-2026", label: "Master's in Cybersecurity — ESGITECH Tunis", type: "formation" },
      { year: "Feb-Jul 2026", label: "Cybersecurity Engineer — SFM Technologies", type: "pro" },
    ],
  },
};

export default function Timeline() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="timeline" className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border-color)] sm:left-1/2" />

          <div className="space-y-8">
            {t.events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={event.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`relative flex items-center gap-4 sm:w-1/2 ${
                    isLeft ? "sm:ml-0 sm:pr-8" : "sm:ml-auto sm:pl-8 sm:text-right sm:flex-row-reverse"
                  }`}
                >
                  <span
                    className={`absolute left-0 h-4 w-4 rounded-full border-2 border-[var(--background)] sm:left-auto ${
                      isLeft ? "sm:-right-2" : "sm:-left-2"
                    }`}
                    style={{
                      backgroundColor: event.type === "pro" ? "var(--primary)" : "var(--secondary)",
                    }}
                  />
                  <div className="ml-6 rounded-xl border border-[var(--border-color)] bg-[var(--surface)]/40 px-4 py-3 sm:ml-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--secondary)]">
                      {event.year}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{event.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-xs text-[var(--muted)]">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" /> {t.proLabel}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" /> {t.formationLabel}
          </span>
        </div>
      </div>
    </section>
  );
}