"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Résultats de laboratoire",
    title: "Impact & Résultats",
    disclaimer:
      "Résultats issus d'expérimentations en environnement de laboratoire — non représentatifs d'un déploiement en production réelle.",
    metrics: [
      { value: "75%", label: "Taux de détection", description: "Taux de détection obtenu lors des scénarios testés en laboratoire." },
      { value: "12", label: "Techniques MITRE", description: "Techniques MITRE ATT&CK simulées et documentées." },
      { value: "5", label: "Machines virtuelles", description: "Machines virtuelles composant le laboratoire SOC." },
      { value: "3", label: "Sources Threat Intel", description: "Sources de Threat Intelligence intégrées (VirusTotal, AbuseIPDB, OTX)." },
      { value: "1", label: "Workflow automatisé", description: "Workflow SOC automatisé de bout en bout, de la détection au reporting." },
    ],
  },
  en: {
    eyebrow: "Lab Results",
    title: "Impact & Results",
    disclaimer:
      "Results from experiments in a laboratory environment — not representative of a real production deployment.",
    metrics: [
      { value: "75%", label: "Detection Rate", description: "Detection rate achieved during the tested lab scenarios." },
      { value: "12", label: "MITRE Techniques", description: "MITRE ATT&CK techniques simulated and documented." },
      { value: "5", label: "Virtual Machines", description: "Virtual machines composing the SOC lab." },
      { value: "3", label: "TI Sources", description: "Integrated Threat Intelligence sources (VirusTotal, AbuseIPDB, OTX)." },
      { value: "1", label: "Automated Workflow", description: "End-to-end automated SOC workflow, from detection to reporting." },
    ],
  },
};

export default function ImpactMetrics() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="border-t border-[var(--border-color)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[var(--text)] sm:text-4xl">{t.title}</h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {t.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)]/50 p-5 text-center"
            >
              <p className="text-3xl font-bold text-[var(--secondary)] sm:text-4xl">{m.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--text)]">
                {m.label}
              </p>
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{m.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs italic text-[var(--muted)]">
          {t.disclaimer}
        </p>
      </div>
    </section>
  );
}