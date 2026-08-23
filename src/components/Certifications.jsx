"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Building LLM Applications with Prompt Engineering",
    issuer: "NVIDIA",
    date: "Avril 2026",
    id: "v4rq1bLWQO-q2Ymc5WeYfw",
  },
  {
    title: "DFIR Foundations and Techniques Course — Professional Skills and Readiness",
    issuer: "Blue Cape Security",
    date: "Août 2026",
    id: "11082026",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Janvier 2025",
  },
];

const achievements = [
  "Conception et déploiement d'une plateforme de détection et réponse aux cybermenaces basée sur Wazuh SIEM, OpenSearch, Threat Intelligence et Intelligence Artificielle.",
  "Mise en place d'un laboratoire de cybersécurité reproduisant un environnement d'entreprise avec Active Directory, Windows Server, Windows et Linux.",
  "Simulation et analyse de 12 techniques d'attaque selon le référentiel MITRE ATT&CK afin d'évaluer et d'améliorer les capacités de détection.",
  "Développement d'un agent SOC automatisé intégrant la collecte des événements, l'analyse par IA, la Threat Intelligence et la réponse automatisée.",
  "Intégration de VirusTotal, AbuseIPDB et AlienVault OTX pour enrichir automatiquement les événements de sécurité.",
  "Mise en œuvre de mécanismes d'Active Response permettant le blocage automatique d'adresses IP malveillantes.",
  "Automatisation de la génération de rapports SOC et du suivi des incidents.",
  "Amélioration du taux de détection lors des tests de 0 % à 75 % grâce à l'optimisation des mécanismes de détection et à l'intégration de l'IA.",
];

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Certifications & Réalisations
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Ce qui valide mon expertise
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Certifications */}
          <div>
            <div className="mb-6 flex items-center gap-2 text-blue-400">
              <BadgeCheck size={20} />
              <h3 className="text-lg font-semibold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition hover:border-blue-500/40"
                >
                  <h4 className="font-semibold text-white">{cert.title}</h4>
                  <p className="mt-1 text-sm text-blue-400">{cert.issuer}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                    <span>Émise : {cert.date}</span>
                    {cert.id && <span>ID : {cert.id}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Réalisations */}
          <div>
            <div className="mb-6 flex items-center gap-2 text-blue-400">
              <Award size={20} />
              <h3 className="text-lg font-semibold text-white">Réalisations clés</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <ul className="space-y-4">
                {achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 text-sm leading-6 text-slate-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {a}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}