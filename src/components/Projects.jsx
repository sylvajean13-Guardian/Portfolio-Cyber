"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Bot, Search } from "lucide-react";

const projects = [
  {
    icon: ShieldCheck,
    tag: "Projet de fin d'études — SFM Technologies, Tunis",
    title: "Intégration de l'IA dans un SIEM Wazuh",
    description:
      "Conception d'un laboratoire virtualisé de 5 machines (Wazuh, Active Directory, Windows 10, Ubuntu Server, Kali Linux attaquant) et exécution de 12 techniques d'attaque structurées selon le référentiel MITRE ATT&CK. Comparaison rigoureuse avant/après déploiement des agents Wazuh : passage d'une absence totale de détection à un taux de détection de 75 %, avec mapping automatique MITRE et conformité PCI DSS / GDPR / HIPAA / NIST-800-53.",
    tech: ["Wazuh", "MITRE ATT&CK", "Active Directory", "VMware", "Machine Learning"],
  },
  {
    icon: Bot,
    tag: "Contribution personnelle du mémoire",
    title: "Agent IA SOC autonome",
    description:
      "Développement d'un agent Python qui collecte les alertes Wazuh via OpenSearch, les enrichit automatiquement avec 3 sources de Threat Intelligence (VirusTotal, AbuseIPDB, AlienVault OTX), les classe grâce au modèle LLaMA 3.1 (via l'API Groq), bloque les IP malveillantes via le pare-feu Windows et génère un rapport PDF envoyé par email — le tout en cycle automatisé toutes les 30 minutes.",
    tech: ["Python", "LLaMA 3.1 / Groq", "Threat Intelligence", "fpdf2", "SMTP"],
  },
  {
    icon: Search,
    tag: "Projet personnel",
    title: "Agent IA de veille sur les offres SOC/Cybersécurité",
    description:
      "Agent de veille automatisée pour le marché ivoirien, avec filtrage par critères (contrats CDI, mots-clés SOC/SIEM, exclusion des offres commerciales déguisées) et un système de scoring à trois niveaux pour prioriser les opportunités pertinentes.",
    tech: ["Python", "Automatisation", "NLP", "Scoring"],
  },
];

export default function Projects() {
  return (
    <section id="projects-v2" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Projets
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Ce que j'ai construit</h2>
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
                className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={24} />
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-400">
                  {project.tag}
                </p>

                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}