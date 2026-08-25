"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Parcours académique",
    title: "Formations",
    formations: [
      {
        degree: "Master en Sécurité des Systèmes d'Informations",
        mention: "Mention : Excellente",
        school: "Ecole Supérieure de Génie Informatique et de Technologie (ESGITECH), Tunis, Tunisie",
        period: "Sept 2024 - Juillet 2026",
        details: [
          "Spécialisation : Sécurité des Systèmes d'Information, Cryptographie, Gestion des risques.",
          "Projet de fin d'études : Intégration de l'IA dans un SIEM pour la détection avancée des cybermenaces (SFM Technologies).",
          "Modules clés : SOC & Threat Intelligence, Pentest, Forensics, Sécurité Cloud, Machine Learning appliqué à la cybersécurité.",
        ],
      },
      {
        degree: "Licence Professionnelle en Téléinformatique",
        mention: "Mention : Bien",
        school: "Université de Bangui, Bangui, Centrafrique",
        period: "Janvier 2021 - Octobre 2023",
        details: [
          "Spécialisation : Téléinformatique (Réseau et Télécommunication).",
          "Projet de fin d'études : Etude du déploiement d'un réseau optique à Ngaragba en utilisant du FTTH.",
          "Modules clés : Fibres optiques, FTTH.",
        ],
      },
      {
        degree: "Baccalauréat Scientifique (Bac D)",
        mention: null,
        school: "Lycée de Mbaïki (Centrafrique)",
        period: "Septembre 2019 - Septembre 2020",
        details: [],
      },
    ],
  },
  en: {
    eyebrow: "Academic Background",
    title: "Education",
    formations: [
      {
        degree: "Master's Degree in Information Systems Security",
        mention: "Honors: Highest Distinction",
        school: "Ecole Supérieure de Génie Informatique et de Technologie (ESGITECH), Tunis, Tunisia",
        period: "Sept 2024 - July 2026",
        details: [
          "Specialization: Information Systems Security, Cryptography, Risk Management.",
          "Capstone project: AI integration into a SIEM for advanced cyberthreat detection (SFM Technologies).",
          "Key modules: SOC & Threat Intelligence, Pentesting, Forensics, Cloud Security, Machine Learning applied to cybersecurity.",
        ],
      },
      {
        degree: "Professional Bachelor's Degree in Teleinformatics",
        mention: "Honors: Good",
        school: "University of Bangui, Bangui, Central African Republic",
        period: "January 2021 - October 2023",
        details: [
          "Specialization: Teleinformatics (Networking and Telecommunications).",
          "Capstone project: Study of an optical fiber network deployment in Ngaragba using FTTH.",
          "Key modules: Fiber optics, FTTH.",
        ],
      },
      {
        degree: "Scientific Baccalaureate (Bac D)",
        mention: null,
        school: "Lycée de Mbaïki (Central African Republic)",
        period: "September 2019 - September 2020",
        details: [],
      },
    ],
  },
};

export default function Formation() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="formation" className="border-t border-[var(--border-color)] bg-[var(--surface)]/30 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
        </div>

        <div className="space-y-6 border-l border-[var(--border-color)] pl-8">
          {t.formations.map((f, index) => (
            <motion.div
              key={f.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-[var(--border-color)] bg-[var(--background)]/60 p-6"
            >
              <div className="absolute -left-[41px] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--primary)]/40 bg-[var(--background)]">
                <GraduationCap size={11} className="text-[var(--secondary)]" />
              </div>

              <h3 className="text-lg font-semibold text-[var(--text)]">{f.degree}</h3>
              <p className="mt-1 text-sm text-[var(--secondary)]">
                {f.school} · {f.period}
              </p>
              {f.mention && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                  {f.mention}
                </p>
              )}

              {f.details.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {f.details.map((d, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-6 text-[var(--muted)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}