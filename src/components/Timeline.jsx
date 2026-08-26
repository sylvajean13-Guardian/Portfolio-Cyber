"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Vue d'ensemble",
    title: "Mon évolution",
    academicLabel: "Parcours académique",
    professionalLabel: "Parcours professionnel",
    academic: [
      { year: "2019-2020", label: "Baccalauréat Scientifique (Bac D)" },
      { year: "2021-2023", label: "Licence Pro. Téléinformatique — Université de Bangui" },
      { year: "2024-2026", label: "Master Cybersécurité — ESGITECH Tunis" },
    ],
    professional: [
      { year: "Mars-Avril 2023", label: "Technicien Support IT — BEAC Bangui" },
      { year: "Juil-Oct 2023", label: "Technicien Réseaux & Télécom — Orange Centrafrique" },
      { year: "Juil-Sept 2024", label: "Technicien Support IT — Cours Pénale Spéciale de Bangui" },
      { year: "Fév-Juil 2026", label: "Ingénieur Cybersécurité — SFM Technologies" },
    ],
  },
  en: {
    eyebrow: "Overview",
    title: "My Journey",
    academicLabel: "Academic Path",
    professionalLabel: "Professional Path",
    academic: [
      { year: "2019-2020", label: "Scientific Baccalaureate (Bac D)" },
      { year: "2021-2023", label: "Professional Bachelor's in Teleinformatics — University of Bangui" },
      { year: "2024-2026", label: "Master's in Cybersecurity — ESGITECH Tunis" },
    ],
    professional: [
      { year: "Mar-Apr 2023", label: "IT Support Technician — BEAC Bangui" },
      { year: "Jul-Oct 2023", label: "Network & Telecom Technician — Orange Centrafrique" },
      { year: "Jul-Sep 2024", label: "IT Support Technician — Special Criminal Court of Bangui" },
      { year: "Feb-Jul 2026", label: "Cybersecurity Engineer — SFM Technologies" },
    ],
  },
};

function TimelineColumn({ icon: Icon, label, items, accentColor }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-2" style={{ color: accentColor }}>
        <Icon size={20} />
        <h3 className="text-lg font-semibold text-[var(--text)]">{label}</h3>
      </div>

      <div className="relative space-y-5 border-l-2 pl-6" style={{ borderColor: accentColor }}>
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-4 shadow-sm"
          >
            <span
              className="absolute -left-[31px] top-5 h-3 w-3 rounded-full border-2 border-[var(--background)]"
              style={{ backgroundColor: accentColor }}
            />
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: accentColor }}>
              {item.year}
            </p>
            <p className="mt-1 text-sm text-[var(--text)]">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="timeline" className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
        <TimelineColumn
          icon={Briefcase}
          label={t.professionalLabel}
          items={t.professional}
          accentColor="var(--primary)"
        />
        <TimelineColumn
          icon={GraduationCap}
          label={t.academicLabel}
          items={t.academic}
          accentColor="var(--secondary)"
        />
      </div>
      </div>
    </section>
  );
}