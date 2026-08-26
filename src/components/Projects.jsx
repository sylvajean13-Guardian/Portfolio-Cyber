"use client";

import { motion } from "framer-motion";
import { Bot, Search, HardDrive } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { socials } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Autres projets",
    title: "Ce que j'ai aussi construit",
    problemLabel: "Problème",
    solutionLabel: "Solution",
    resultLabel: "Résultat",
    githubLabel: "Voir sur GitHub",
    statusLabels: { completed: "Terminé", "in-progress": "En cours" },
    projects: [
      {
        icon: Bot,
        category: "Security Automation",
        title: "Agent IA SOC autonome",
        status: "completed",
        problem: "Le triage manuel des alertes Wazuh est chronophage et manque de contexte externe pour évaluer la réelle criticité d'un événement.",
        solution: "Développement d'un agent Python qui collecte les alertes via OpenSearch, les enrichit avec 3 sources de Threat Intelligence, les classe grâce au modèle LLaMA 3.1 (via Groq), bloque automatiquement les IP confirmées malveillantes, et génère un rapport PDF envoyé par email — en cycle automatisé toutes les 30 minutes.",
        technologies: ["Python", "LLaMA 3.1 / Groq", "VirusTotal", "AbuseIPDB", "AlienVault OTX", "fpdf2", "SMTP"],
        result: "Premier cycle de test : 20 alertes analysées, 14 classées HAUTE, 0 faux positif, rapport PDF généré et envoyé en moins de 8 minutes.",
      },
      {
        icon: Search,
        category: "Automation & NLP",
        title: "Agent de veille SOC/Cybersécurité",
        status: "in-progress",
        problem: "La veille manuelle sur les offres d'emploi cybersécurité du marché ivoirien prend du temps et génère beaucoup de bruit (offres commerciales déguisées, doublons).",
        solution: "Agent Python de scraping automatisé avec filtrage par critères stricts (contrats CDI uniquement, mots-clés SOC/SIEM/Threat Intelligence) et un système de scoring à trois niveaux pour prioriser les opportunités pertinentes.",
        technologies: ["Python", "Scraping", "NLP", "Scoring"],
        result: "Pipeline de filtrage automatisé opérationnel, réduisant le temps de veille manuelle et priorisant les offres selon leur pertinence.",
      },
      {
        icon: HardDrive,
        category: "Digital Forensics & Incident Response",
        title: "DFIR Home Lab",
        status: "in-progress",
        problem: "Acquérir une compétence pratique en investigation numérique nécessite de manipuler de vrais artefacts (disque, mémoire, réseau) plutôt que de la théorie seule.",
        solution: "Mise en place d'un environnement self-hosted avec une VM Windows (EZTools, Splunk) et une VM Kali Linux (Volatility3, Wireshark) pour analyser 5 cas pratiques fournis dans le cadre du programme Elevate DFIR Skills 2024.",
        technologies: ["Volatility3", "Splunk", "Wireshark", "EZTools"],
        result: "5 cas traités : triage disque, dump mémoire, page file, capture réseau (PCAP), export de logs Splunk.",
      },
    ],
  },
  en: {
    eyebrow: "Other Projects",
    title: "What I've also built",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    githubLabel: "View on GitHub",
    statusLabels: { completed: "Completed", "in-progress": "In Progress" },
    projects: [
      {
        icon: Bot,
        category: "Security Automation",
        title: "Autonomous SOC AI Agent",
        status: "completed",
        problem: "Manual triage of Wazuh alerts is time-consuming and lacks external context to assess an event's real criticality.",
        solution: "Developed a Python agent that collects alerts via OpenSearch, enriches them with 3 Threat Intelligence sources, classifies them using the LLaMA 3.1 model (via Groq), automatically blocks confirmed malicious IPs, and generates a PDF report sent by email — in an automated cycle every 30 minutes.",
        technologies: ["Python", "LLaMA 3.1 / Groq", "VirusTotal", "AbuseIPDB", "AlienVault OTX", "fpdf2", "SMTP"],
        result: "First test cycle: 20 alerts analyzed, 14 classified HIGH, 0 false positives, PDF report generated and sent in under 8 minutes.",
      },
      {
        icon: Search,
        category: "Automation & NLP",
        title: "SOC/Cybersecurity Job Monitoring Agent",
        status: "in-progress",
        problem: "Manually monitoring cybersecurity job postings on the Ivorian market is time-consuming and generates a lot of noise (disguised sales listings, duplicates).",
        solution: "Automated Python scraping agent with strict filtering criteria (permanent contracts only, SOC/SIEM/Threat Intelligence keywords) and a three-tier scoring system to prioritize relevant opportunities.",
        technologies: ["Python", "Scraping", "NLP", "Scoring"],
        result: "Operational automated filtering pipeline, reducing manual monitoring time and prioritizing postings by relevance.",
      },
      {
        icon: HardDrive,
        category: "Digital Forensics & Incident Response",
        title: "DFIR Home Lab",
        status: "in-progress",
        problem: "Building practical digital forensics skills requires handling real artifacts (disk, memory, network) rather than theory alone.",
        solution: "Set up a self-hosted environment with a Windows VM (EZTools, Splunk) and a Kali Linux VM (Volatility3, Wireshark) to analyze 5 practical cases provided as part of the Elevate DFIR Skills 2024 program.",
        technologies: ["Volatility3", "Splunk", "Wireshark", "EZTools"],
        result: "5 cases handled: disk triage, memory dump, page file, network capture (PCAP), Splunk log export.",
      },
    ],
  },
};

export default function Projects() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="more-projects" className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col rounded-2xl border border-[var(--border-color)] bg-[var(--surface)]/40 p-7 transition duration-300 hover:-translate-y-2 hover:border-[var(--primary)]/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--secondary)]">
                  <Icon size={24} />
                </div>

                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--secondary)]">
                    {project.category}
                  </p>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                      project.status === "completed"
                        ? "bg-[var(--success)]/10 text-[var(--success)]"
                        : "bg-[var(--warning)]/10 text-[var(--warning)]"
                    }`}
                  >
                    {t.statusLabels[project.status]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>

                <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--critical)]">
                      {t.problemLabel}
                    </p>
                    <p className="mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--secondary)]">
                      {t.solutionLabel}
                    </p>
                    <p className="mt-1">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--success)]">
                      {t.resultLabel}
                    </p>
                    <p className="mt-1">{project.result}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-color)] bg-black/5 px-3 py-1 text-xs text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)] transition hover:text-[var(--text)]"
                >
                  <FaGithub size={16} />
                  {t.githubLabel}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}