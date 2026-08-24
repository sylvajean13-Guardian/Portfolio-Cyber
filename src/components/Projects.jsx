"use client";

import { motion } from "framer-motion";
import { Bot, Search, HardDrive } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { socials } from "@/data/portfolio";

const projects = [
  {
    icon: Bot,
    category: "Security Automation",
    title: "Agent IA SOC autonome",
    problem:
      "Le triage manuel des alertes Wazuh est chronophage et manque de contexte externe pour évaluer la réelle criticité d'un événement.",
    solution:
      "Développement d'un agent Python qui collecte les alertes via OpenSearch, les enrichit avec 3 sources de Threat Intelligence, les classe grâce au modèle LLaMA 3.1 (via Groq), bloque automatiquement les IP confirmées malveillantes, et génère un rapport PDF envoyé par email — en cycle automatisé toutes les 30 minutes.",
    technologies: ["Python", "LLaMA 3.1 / Groq", "VirusTotal", "AbuseIPDB", "AlienVault OTX", "fpdf2", "SMTP"],
    result:
      "Premier cycle de test : 20 alertes analysées, 14 classées HAUTE, 0 faux positif, rapport PDF généré et envoyé en moins de 8 minutes.",
  },
  {
    icon: Search,
    category: "Automation & NLP",
    title: "Agent de veille SOC/Cybersécurité",
    problem:
      "La veille manuelle sur les offres d'emploi cybersécurité du marché ivoirien prend du temps et génère beaucoup de bruit (offres commerciales déguisées, doublons).",
    solution:
      "Agent Python de scraping automatisé avec filtrage par critères stricts (contrats CDI uniquement, mots-clés SOC/SIEM/Threat Intelligence) et un système de scoring à trois niveaux pour prioriser les opportunités pertinentes.",
    technologies: ["Python", "Scraping", "NLP", "Scoring"],
    result:
      "Pipeline de filtrage automatisé opérationnel, réduisant le temps de veille manuelle et priorisant les offres selon leur pertinence.",
  },
  {
    icon: HardDrive,
    category: "Digital Forensics & Incident Response",
    title: "DFIR Home Lab",
    problem:
      "Acquérir une compétence pratique en investigation numérique nécessite de manipuler de vrais artefacts (disque, mémoire, réseau) plutôt que de la théorie seule.",
    solution:
      "Mise en place d'un environnement self-hosted avec une VM Windows (EZTools, Splunk) et une VM Kali Linux (Volatility3, Wireshark) pour analyser 5 cas pratiques fournis dans le cadre du programme Elevate DFIR Skills 2024.",
    technologies: ["Volatility3", "Splunk", "Wireshark", "EZTools"],
    result:
      "5 cas traités : triage disque, dump mémoire, page file, capture réseau (PCAP), export de logs Splunk.",
  },
];

export default function Projects() {
  return (
    <section id="more-projects" className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            Other Projects
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">
            Ce que j'ai aussi construit
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
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

                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--secondary)]">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-[var(--text)]">
                  {project.title}
                </h3>

                <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--critical)]">
                      Problem
                    </p>
                    <p className="mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--secondary)]">
                      Solution
                    </p>
                    <p className="mt-1">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--success)]">
                      Result
                    </p>
                    <p className="mt-1">{project.result}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border-color)] bg-white/5 px-3 py-1 text-xs text-[var(--muted)]"
                    >
                      {t}
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
                  Voir sur GitHub
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}