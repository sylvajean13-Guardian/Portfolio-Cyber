"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ShieldAlert, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    badge: "Disponible pour des opportunités en cybersécurité",
    title: "Ingénieur Cybersécurité",
    subtitle: "SOC · SIEM · Threat Detection · AI · Security Automation",
    valueProp:
      "Je conçois des systèmes capables de détecter, analyser et répondre aux menaces de sécurité.",
    ctaProjects: "Explorer mes projets",
    ctaCV: "Télécharger mon CV",
    panelTitle: "Triage d'alerte",
    panelBadge: "Cas réel — Lab",
    alertName: "Force brute — WinRM",
    steps: [
      { label: "Alerte reçue", detail: "Règles 60122 / 60204 — Wazuh SIEM" },
      { label: "Mapping MITRE", detail: "T1110.001 — Brute Force (Credential Access)" },
      { label: "Enrichissement", detail: "IP interne au lab — hors périmètre Threat Intel publique" },
      { label: "Sévérité évaluée", detail: "Niveau 10 — tentatives répétées, échec systématique" },
      { label: "Action recommandée", detail: "Blocage de la source + surveillance du compte ciblé" },
    ],
    footerNote:
      "Analyse basée sur un scénario documenté du mémoire (environnement de laboratoire).",
  },
  en: {
    badge: "Available for cybersecurity opportunities",
    title: "Cybersecurity Engineer",
    subtitle: "SOC · SIEM · Threat Detection · AI · Security Automation",
    valueProp:
      "I design systems capable of detecting, analyzing and responding to security threats.",
    ctaProjects: "Explore my projects",
    ctaCV: "Download my CV",
    panelTitle: "Alert Triage",
    panelBadge: "Real Case — Lab",
    alertName: "WinRM Brute Force",
    steps: [
      { label: "Alert received", detail: "Rules 60122 / 60204 — Wazuh SIEM" },
      { label: "MITRE Mapping", detail: "T1110.001 — Brute Force (Credential Access)" },
      { label: "Enrichment", detail: "Internal lab IP — outside public Threat Intel scope" },
      { label: "Severity assessed", detail: "Level 10 — repeated attempts, consistent failure" },
      { label: "Recommended action", detail: "Block source + monitor targeted account" },
    ],
    footerNote:
      "Analysis based on a documented thesis scenario (laboratory environment).",
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
                src="/images/profile-hero.jpg"
                alt="Jean Daniel Sylva Ossibouyen"
                fill
                sizes="128px"
                className="object-cover"
                priority
              />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--secondary)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--success)]" />
              {t.badge}
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
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between border-b border-[var(--border-color)] pb-4">
              <div className="flex items-center gap-2 text-[var(--text)]">
                <ShieldAlert size={18} className="text-[var(--secondary)]" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {t.panelTitle}
                </span>
              </div>
              <span className="rounded-full bg-[var(--warning)]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--warning)]">
                {t.panelBadge}
              </span>
            </div>

            <p className="mb-5 text-sm font-semibold text-[var(--text)]">{t.alertName}</p>

            <div className="space-y-3">
              {t.steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--background)] p-3"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--success)]" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[var(--text)]">{step.label}</p>
                    <p className="mt-0.5 text-xs leading-5 text-[var(--muted)]">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-4 text-[10px] italic text-[var(--muted)]">{t.footerNote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}