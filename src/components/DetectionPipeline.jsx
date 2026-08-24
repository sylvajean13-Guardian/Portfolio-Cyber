"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Fonctionnement",
    title: "Pipeline de détection",
    hint: "Cliquez sur une étape pour voir son fonctionnement.",
    stepLabel: "Étape",
    steps: [
      { label: "Collecte de logs", detail: "Les agents Wazuh installés sur les endpoints (Windows, Linux) collectent en continu les logs système, d'authentification et de modification de fichiers." },
      { label: "Wazuh SIEM", detail: "Le Wazuh Manager centralise, normalise et corrèle les événements reçus depuis l'ensemble des agents du réseau." },
      { label: "Génération d'alertes", detail: "Les événements correspondant à une règle de détection déclenchent une alerte, classée par niveau de sévérité (0 à 15)." },
      { label: "Threat Intelligence", detail: "Les indicateurs (IP, hash) sont enrichis automatiquement via VirusTotal, AbuseIPDB et AlienVault OTX." },
      { label: "Analyse IA", detail: "Le modèle LLaMA 3.1 (via l'API Groq) analyse l'alerte enrichie et propose une classification (score de menace, faux positif ou non)." },
      { label: "Évaluation de la sévérité", detail: "L'agent IA attribue un niveau de criticité final (CRITIQUE / HAUTE / MOYENNE / FAIBLE) et une action recommandée." },
      { label: "Réponse active", detail: "Si recommandé et si l'IP est publique et confirmée malveillante, un blocage automatique est appliqué via le pare-feu Windows." },
      { label: "Rapport SOC", detail: "Un rapport PDF récapitulatif est généré et envoyé par email à l'équipe SOC, avec le détail de chaque alerte analysée." },
    ],
  },
  en: {
    eyebrow: "How it works",
    title: "Detection Pipeline",
    hint: "Click on a step to see how it works.",
    stepLabel: "Step",
    steps: [
      { label: "Log Collection", detail: "Wazuh agents installed on endpoints (Windows, Linux) continuously collect system, authentication and file integrity logs." },
      { label: "Wazuh SIEM", detail: "The Wazuh Manager centralizes, normalizes and correlates events received from all agents across the network." },
      { label: "Alert Generation", detail: "Events matching a detection rule trigger an alert, classified by severity level (0 to 15)." },
      { label: "Threat Intelligence", detail: "Indicators (IPs, hashes) are automatically enriched via VirusTotal, AbuseIPDB and AlienVault OTX." },
      { label: "AI Analysis", detail: "The LLaMA 3.1 model (via the Groq API) analyzes the enriched alert and proposes a classification (threat score, false positive or not)." },
      { label: "Severity Assessment", detail: "The AI agent assigns a final criticality level (CRITICAL / HIGH / MEDIUM / LOW) and a recommended action." },
      { label: "Active Response", detail: "If recommended and if the IP is public and confirmed malicious, automatic blocking is applied via the Windows firewall." },
      { label: "SOC Report", detail: "A summary PDF report is generated and emailed to the SOC team, detailing every analyzed alert." },
    ],
  },
};

export default function DetectionPipeline() {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="border-t border-[var(--border-color)] bg-[var(--surface)]/30 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
          <p className="mt-4 text-sm text-[var(--muted)]">{t.hint}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {t.steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <button
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  active === i
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                    : "border-[var(--border-color)] bg-[var(--background)] text-[var(--muted)] hover:border-[var(--primary)]/50 hover:text-[var(--text)]"
                }`}
              >
                {step.label}
              </button>
              {i < t.steps.length - 1 && (
                <span className="hidden text-[var(--muted)] sm:inline">→</span>
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[var(--border-color)] bg-[var(--background)] p-7 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--secondary)]">
              {t.stepLabel} {active + 1} / {t.steps.length}
            </span>
            <h3 className="mt-2 text-xl font-semibold text-[var(--text)]">
              {t.steps[active].label}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {t.steps[active].detail}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}