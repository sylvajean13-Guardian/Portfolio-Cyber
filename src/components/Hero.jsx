"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";
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
    panelTitle: "Security Operations Center",
    panelBadge: "Lab Environment",
    metrics: [
      { label: "ÉVÉNEMENTS", value: "24 892" },
      { label: "ALERTES", value: "127" },
      { label: "SÉVÉRITÉ HAUTE", value: "8" },
      { label: "IP BLOQUÉES", value: "34" },
    ],
    statuses: [
      { label: "SIEM", state: "EN LIGNE" },
      { label: "THREAT INTEL", state: "EN LIGNE" },
      { label: "ANALYSE IA", state: "EN LIGNE" },
      { label: "RÉPONSE ACTIVE", state: "EN LIGNE" },
    ],
    progressLabel: "Taux de détection — Scénarios de labo",
    disclaimer:
      "Données issues d'un environnement de laboratoire expérimental — non représentatives d'un système en production.",
  },
  en: {
    badge: "Available for cybersecurity opportunities",
    title: "Cybersecurity Engineer",
    subtitle: "SOC · SIEM · Threat Detection · AI · Security Automation",
    valueProp:
      "I design systems capable of detecting, analyzing and responding to security threats.",
    ctaProjects: "Explore my projects",
    ctaCV: "Download my CV",
    panelTitle: "Security Operations Center",
    panelBadge: "Lab Environment",
    metrics: [
      { label: "EVENTS", value: "24,892" },
      { label: "ALERTS", value: "127" },
      { label: "HIGH SEVERITY", value: "8" },
      { label: "BLOCKED IPS", value: "34" },
    ],
    statuses: [
      { label: "SIEM", state: "ONLINE" },
      { label: "THREAT INTEL", state: "ONLINE" },
      { label: "AI ANALYSIS", state: "ONLINE" },
      { label: "ACTIVE RESPONSE", state: "ONLINE" },
    ],
    progressLabel: "Detection Rate — Lab Scenarios",
    disclaimer:
      "Data from an experimental laboratory environment — not representative of a production system.",
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--secondary)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--success)]" />
            {t.badge}
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
              href={socials.cv}
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

        {/* RIGHT — Security Operations Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)]/70 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between border-b border-[var(--border-color)] pb-4">
              <div className="flex items-center gap-2 text-[var(--text)]">
                <ShieldCheck size={18} className="text-[var(--secondary)]" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {t.panelTitle}
                </span>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-[var(--warning)]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--warning)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--warning)]" />
                {t.panelBadge}
              </span>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4">
              {t.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-bold text-[var(--text)]">{m.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-[var(--muted)]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-[var(--border-color)] pt-4">
              {t.statuses.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-[var(--muted)]">{s.label}</span>
                  <span className="flex items-center gap-1.5 font-semibold text-[var(--success)]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--success)]" />
                    {s.state}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5">
              <div className="mb-1.5 flex justify-between text-[10px] text-[var(--muted)]">
                <span>{t.progressLabel}</span>
                <span className="text-[var(--secondary)]">75%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.4, delay: 0.6 }}
                  className="h-full rounded-full bg-[var(--secondary)]"
                />
              </div>
            </div>

            <p className="mt-4 text-[10px] italic text-[var(--muted)]">{t.disclaimer}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}