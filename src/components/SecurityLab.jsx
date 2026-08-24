"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Environnement",
    title: "Laboratoire SOC",
    metrics: [
      { value: "5", label: "Machines virtuelles" },
      { value: "12", label: "Techniques ATT&CK" },
      { value: "3", label: "Sources Threat Intel" },
      { value: "1", label: "SIEM" },
      { value: "1", label: "Pipeline IA" },
    ],
    flow: [
      { label: "Attaquant", detail: "Kali Linux — Red Team", role: "Simulation des techniques MITRE ATT&CK" },
      { label: "Windows Server / AD", detail: "Contrôleur de domaine", role: "Cible principale — authentification, LDAP, Kerberos" },
      { label: "Windows 10 / Ubuntu Server", detail: "Endpoints", role: "Poste client + serveur Linux (SSH, FIM)" },
      { label: "Wazuh SIEM", detail: "Amazon Linux", role: "Collecte, corrélation et génération d'alertes" },
      { label: "Threat Intelligence", detail: "VirusTotal, AbuseIPDB, OTX", role: "Enrichissement contextuel des IOC" },
      { label: "Analyse IA", detail: "LLaMA 3.1 via Groq", role: "Classification et scoring des alertes" },
      { label: "Réponse active", detail: "Blocage automatique", role: "Réponse automatisée sur IP confirmées malveillantes" },
    ],
  },
  en: {
    eyebrow: "Environment",
    title: "Security Operations Lab",
    metrics: [
      { value: "5", label: "Virtual Machines" },
      { value: "12", label: "ATT&CK Techniques" },
      { value: "3", label: "TI Sources" },
      { value: "1", label: "SIEM" },
      { value: "1", label: "AI Pipeline" },
    ],
    flow: [
      { label: "Attacker", detail: "Kali Linux — Red Team", role: "Simulation of MITRE ATT&CK techniques" },
      { label: "Windows Server / AD", detail: "Domain Controller", role: "Primary target — authentication, LDAP, Kerberos" },
      { label: "Windows 10 / Ubuntu Server", detail: "Endpoints", role: "Client workstation + Linux server (SSH, FIM)" },
      { label: "Wazuh SIEM", detail: "Amazon Linux", role: "Collection, correlation and alert generation" },
      { label: "Threat Intelligence", detail: "VirusTotal, AbuseIPDB, OTX", role: "Contextual IOC enrichment" },
      { label: "AI Analysis", detail: "LLaMA 3.1 via Groq", role: "Alert classification and scoring" },
      { label: "Active Response", detail: "Automated blocking", role: "Automated response on confirmed malicious IPs" },
    ],
  },
};

export default function SecurityLab() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="labs-architecture" className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
        </div>

        <div className="mb-14 grid grid-cols-3 gap-4 sm:grid-cols-5">
          {t.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--surface)]/40 py-4 text-center"
            >
              <p className="text-2xl font-bold text-[var(--secondary)]">{m.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-[var(--muted)]">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-xl flex-col items-center gap-2">
          {t.flow.map((step, i) => (
            <div key={step.label} className="flex w-full flex-col items-center">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group w-full rounded-xl border border-[var(--border-color)] bg-[var(--surface)]/40 px-5 py-4 transition hover:border-[var(--primary)]/40"
              >
                <p className="text-sm font-semibold text-[var(--text)]">{step.label}</p>
                <p className="text-xs text-[var(--secondary)]">{step.detail}</p>
                <p className="mt-1 text-xs text-[var(--muted)] opacity-0 transition group-hover:opacity-100">
                  {step.role}
                </p>
              </motion.div>
              {i < t.flow.length - 1 && <span className="my-1 text-[var(--muted)]">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}