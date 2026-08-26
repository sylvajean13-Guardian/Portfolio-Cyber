"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Certifications & Réalisations",
    title: "Ce qui valide mon expertise",
    certificationsLabel: "Certifications",
    achievementsLabel: "Réalisations clés",
    issuedLabel: "Émise",
    idLabel: "ID",
    statusLabels: { completed: "Terminée", "in-progress": "En cours" },
    certifications: [
      { title: "Building LLM Applications with Prompt Engineering", issuer: "NVIDIA", date: "Avril 2026", id: "v4rq1bLWQO-q2Ymc5WeYfw", status: "completed", image: "/images/certifications/nvidia.jpg" },
      { title: "DFIR Foundations and Techniques Course — Professional Skills and Readiness", issuer: "Blue Cape Security", date: "Août 2026", id: "11082026", status: "completed", image: "/images/certifications/bluecape-security.jpg" },
      { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "Janvier 2025", status: "completed", image: "/images/certifications/cisco.jpg" },
    ],
    achievements: [
      "Conception et déploiement d'une plateforme de détection et réponse aux cybermenaces basée sur Wazuh SIEM, OpenSearch, Threat Intelligence et Intelligence Artificielle.",
      "Mise en place d'un laboratoire de cybersécurité reproduisant un environnement d'entreprise avec Active Directory, Windows Server, Windows et Linux.",
      "Simulation et analyse de 12 techniques d'attaque selon le référentiel MITRE ATT&CK afin d'évaluer et d'améliorer les capacités de détection.",
      "Développement d'un agent SOC automatisé intégrant la collecte des événements, l'analyse par IA, la Threat Intelligence et la réponse automatisée.",
      "Intégration de VirusTotal, AbuseIPDB et AlienVault OTX pour enrichir automatiquement les événements de sécurité.",
      "Mise en œuvre de mécanismes d'Active Response permettant le blocage automatique d'adresses IP malveillantes.",
      "Automatisation de la génération de rapports SOC et du suivi des incidents.",
      "Amélioration du taux de détection lors des tests de 0 % à 75 % grâce à l'optimisation des mécanismes de détection et à l'intégration de l'IA.",
    ],
  },
  en: {
    eyebrow: "Certifications & Achievements",
    title: "What validates my expertise",
    certificationsLabel: "Certifications",
    achievementsLabel: "Key Achievements",
    issuedLabel: "Issued",
    idLabel: "ID",
    statusLabels: { completed: "Completed", "in-progress": "In Progress" },
    certifications: [
      { title: "Building LLM Applications with Prompt Engineering", issuer: "NVIDIA", date: "April 2026", id: "v4rq1bLWQO-q2Ymc5WeYfw", status: "completed", image: "/images/certifications/nvidia.jpg" },
      { title: "DFIR Foundations and Techniques Course — Professional Skills and Readiness", issuer: "Blue Cape Security", date: "August 2026", id: "11082026", status: "completed", image: "/images/certifications/bluecape-security.jpg" },
      { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "January 2025", status: "completed", image: "/images/certifications/cisco.jpg" },
    ],
    achievements: [
      "Designed and deployed a threat detection and response platform based on Wazuh SIEM, OpenSearch, Threat Intelligence and Artificial Intelligence.",
      "Built a cybersecurity lab reproducing an enterprise environment with Active Directory, Windows Server, Windows and Linux.",
      "Simulated and analyzed 12 attack techniques according to the MITRE ATT&CK framework to evaluate and improve detection capabilities.",
      "Developed an automated SOC agent integrating event collection, AI analysis, Threat Intelligence and automated response.",
      "Integrated VirusTotal, AbuseIPDB and AlienVault OTX to automatically enrich security events.",
      "Implemented Active Response mechanisms enabling automatic blocking of malicious IP addresses.",
      "Automated SOC report generation and incident tracking.",
      "Improved detection rate during testing from 0% to 75% through detection optimization and AI integration.",
    ],
  },
};

export default function Certifications() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="certifications" className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2 text-[var(--secondary)]">
              <BadgeCheck size={20} />
              <h3 className="text-lg font-semibold text-[var(--text)]">{t.certificationsLabel}</h3>
            </div>

            <div className="space-y-4">
              {t.certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6 shadow-sm transition hover:border-[var(--primary)]/40"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-[var(--border-color)] bg-white p-2">
                    <Image
                      src={cert.image}
                      alt={cert.issuer}
                      fill
                      sizes="56px"
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold text-[var(--text)]">{cert.title}</h4>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                          cert.status === "completed"
                            ? "bg-[var(--success)]/10 text-[var(--success)]"
                            : "bg-[var(--warning)]/10 text-[var(--warning)]"
                        }`}
                      >
                        {t.statusLabels[cert.status]}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--secondary)]">{cert.issuer}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--muted)]">
                      <span>{t.issuedLabel} : {cert.date}</span>
                      {cert.id && <span>{t.idLabel} : {cert.id}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2 text-[var(--secondary)]">
              <Award size={20} />
              <h3 className="text-lg font-semibold text-[var(--text)]">{t.achievementsLabel}</h3>
            </div>

            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6 shadow-sm">
              <ul className="space-y-4">
                {t.achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
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