"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ShieldAlert, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const content = {
  fr: {
    title: "Ingénieur Réseaux & Cybersécurité",
    subtitle: "SOC · SIEM · Threat Detection · AI · Security Automation",
    valueProp:
      "Je conçois des systèmes capables de détecter, analyser et répondre aux menaces de sécurité.",
    ctaProjects: "Explorer mes projets",
    ctaCV: "Télécharger mon CV",
    panelTitle: "Triage d'alerte SOC",
    panelBadge: "Alerte de laboratoire",
    alertId: "Alerte #WZ-60109",
    ruleLabel: "Règle Wazuh",
    mitreLabel: "MITRE ATT&CK",
    severityLabel: "Sévérité",
    severityValue: "8 — Élevée",
    description:
      "Création d'un compte utilisateur et ajout au groupe « Admins du domaine » détectée via session Evil-WinRM.",
    stepsLabel: "Étapes d'analyse",
    steps: [
      { label: "Détection", detail: "Event ID 4720 corrélé à une session WinRM active" },
      { label: "Corrélation", detail: "Compte créé puis élevé en moins de 30 secondes" },
      { label: "Décision", detail: "Comportement anormal — élévation de privilèges non planifiée" },
    ],
    statusLabel: "Statut",
    statusValue: "Analysée & contenue",
    disclaimer:
      "Alerte issue d'un scénario simulé en environnement de laboratoire — analyse réalisée manuellement dans le cadre du mémoire.",
  },
  en: {
    title: "Cybersecurity Engineer",
    subtitle: "SOC · SIEM · Threat Detection · AI · Security Automation",
    valueProp:
      "I design systems capable of detecting, analyzing and responding to security threats.",
    ctaProjects: "Explore my projects",
    ctaCV: "Download my CV",
    panelTitle: "SOC Alert Triage",
    panelBadge: "Lab Alert",
    alertId: "Alert #WZ-60109",
    ruleLabel: "Wazuh Rule",
    mitreLabel: "MITRE ATT&CK",
    severityLabel: "Severity",
    severityValue: "8 — High",
    description:
      "User account creation and addition to the 'Domain Admins' group detected via an active Evil-WinRM session.",
    stepsLabel: "Analysis Steps",
    steps: [
      { label: "Detection", detail: "Event ID 4720 correlated with an active WinRM session" },
      { label: "Correlation", detail: "Account created then elevated in under 30 seconds" },
      { label: "Decision", detail: "Abnormal behavior — unplanned privilege escalation" },
    ],
    statusLabel: "Status",
    statusValue: "Analyzed & contained",
    disclaimer:
      "Alert from a simulated scenario in a lab environment — manually analyzed as part of the thesis.",
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--secondary)]/10 blur-[140px]" />
      <div className="absolute right-1/3 top-0 h-56 w-56 rounded-full bg-[var(--accent-amber)]/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-[var(--primary)]/40 shadow-[0_0_30px_rgba(37,99,235,0.15)] sm:h-32 sm:w-32">
            <Image
              src="/images/profile.jpg"
              alt="Jean Daniel Sylva Ossibouyen"
              fill
              sizes="148px"
              className="object-cover"
              priority
            />
          </div>

        </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
            {t.title}
          </h1>

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--secondary)]">
            {t.subtitle}
          </p>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
            {t.valueProp}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:brightness-110"
            >
              {t.ctaProjects}
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>

            <a
              href={socials.cv[language]}
              download
              className="flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--secondary)]"
            >
              <Download size={18} />
              {t.ctaCV}
            </a>

            <div className="flex items-center gap-3 pl-1">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--muted)] transition hover:text-[var(--secondary)]"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--muted)] transition hover:text-[var(--secondary)]"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Alert Triage Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)]/70 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between border-b border-[var(--border-color)] pb-4">
              <div className="flex items-center gap-2 text-[var(--text)]">
                <ShieldAlert size={18} className="text-[var(--critical)]" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {t.panelTitle}
                </span>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-[var(--warning)]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--warning)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--warning)]" />
                {t.panelBadge}
              </span>
            </div>

            <p className="text-xs font-mono text-[var(--muted)]">{t.alertId}</p>

            <p className="mt-2 text-sm leading-6 text-[var(--text)]">{t.description}</p>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[var(--border-color)] pt-4">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-[var(--muted)]">
                  {t.ruleLabel}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--text)]">60109</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-[var(--muted)]">
                  {t.mitreLabel}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--secondary)]">
                  T1098.001
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-[var(--muted)]">
                  {t.severityLabel}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--critical)]">
                  {t.severityValue}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-[var(--muted)]">
                  {t.statusLabel}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-sm font-semibold text-[var(--success)]">
                  <CheckCircle2 size={13} />
                  {t.statusValue}
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-[var(--border-color)] pt-4">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]">
                {t.stepsLabel}
              </p>
              <div className="space-y-2.5">
                {t.steps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    className="flex items-start gap-2 text-xs"
                  >
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[9px] font-bold text-[var(--primary)]">
                      {i + 1}
                    </span>
                    <div>
                      <span className="font-semibold text-[var(--text)]">{step.label} — </span>
                      <span className="text-[var(--muted)]">{step.detail}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-[10px] italic text-[var(--muted)]">{t.disclaimer}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}