"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Parcours",
    title: "Expériences professionnelles",
    experiences: [
      {
        role: "Ingénieur Cybersécurité | SIEM • IA • Détection des Menaces",
        org: "SFM Technologies (Tunis)",
        period: "Février - Juillet 2026",
        bullets: [
          "Conception et développement d'un système d'intégration de l'IA dans un SIEM pour améliorer la détection avancée de comportements et techniques d'attaque.",
          "Collecte, normalisation et analyse de logs de sécurité provenant de multiples sources (pare-feux, IDS/IPS, serveurs) pour identifier des comportements suspects.",
          "Implémentation de modèles de machine learning (détection d'anomalies, classification) pour automatiser l'identification des incidents et réduire les faux positifs.",
          "Étude comparative des solutions SIEM existantes (Splunk, ELK Stack, IBM QRadar) et analyse de leurs limites face aux attaques sophistiquées.",
          "Conception de scénarios de détection avancés et amélioration des processus de surveillance et de réponse aux incidents (SOAR).",
          "Rédaction de la documentation technique du projet et présentation des résultats à l'équipe sécurité.",
        ],
      },
      {
        role: "Technicien Support IT & Infrastructure",
        org: "Cours Pénale Spéciale de Bangui",
        period: "Juillet - Septembre 2024",
        bullets: [
          "Gestion complète des ressources informatiques : inventaire, maintenance préventive et corrective des équipements (PC, imprimantes, périphériques réseau).",
          "Assistance technique de proximité aux utilisateurs : résolution des incidents, configuration des postes de travail sous Windows et installation des logiciels.",
          "Support actif de l'infrastructure réseau : câblage, configuration des switches et routeurs, surveillance de la connectivité réseau.",
          "Participation à la mise en place de procédures de sauvegarde et de sécurité des données sensibles de l'institution.",
          "Rédaction de rapports d'incident et documentation des interventions techniques.",
        ],
      },
      {
        role: "Technicien Réseaux & Télécommunications",
        org: "Orange Centrafrique",
        period: "Juillet - Octobre 2023",
        bullets: [
          "Configuration, déploiement et tests du répéteur GRENTECH pour étendre la couverture réseau mobile dans les zones peu desservies.",
          "Analyse et diagnostic des problèmes de connectivité sur les équipements de télécommunication (antennes, répéteurs, liaisons micro-ondes).",
          "Participation aux campagnes de mesures de qualité de signal et élaboration de rapports techniques d'analyse.",
          "Développement d'une approche rigoureuse de l'analyse réseau et des protocoles de télécommunication en contexte professionnel.",
        ],
      },
      {
        role: "Technicien Support IT – Infrastructure Bancaire",
        org: "Banque des Etats de l'Afrique Centrale (BEAC) - Bangui",
        period: "Mars - Avril 2023",
        bullets: [
          "Assistance technique aux utilisateurs finaux dans un environnement bancaire sécurisé (résolution d'incidents, support helpdesk).",
          "Découverte et analyse de l'architecture réseau de la BEAC : topologie, segmentation VLAN, protocoles de sécurité.",
          "Initiation aux faisceaux hertziens utilisés pour l'interconnexion sécurisée de la BEAC avec les autres institutions financières régionales.",
          "Prise de conscience de l'importance des exigences de sécurité et de disponibilité dans un contexte d'infrastructure critique.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Career",
    title: "Professional Experience",
    experiences: [
      {
        role: "Cybersecurity Engineer | SIEM • AI • Threat Detection",
        org: "SFM Technologies (Tunis)",
        period: "February - July 2026",
        bullets: [
          "Designed and developed an AI integration system within a SIEM to improve advanced detection of attack behaviors and techniques.",
          "Collected, normalized and analyzed security logs from multiple sources (firewalls, IDS/IPS, servers) to identify suspicious behavior.",
          "Implemented machine learning models (anomaly detection, classification) to automate incident identification and reduce false positives.",
          "Conducted a comparative study of existing SIEM solutions (Splunk, ELK Stack, IBM QRadar) and analyzed their limitations against sophisticated attacks.",
          "Designed advanced detection scenarios and improved monitoring and incident response (SOAR) processes.",
          "Wrote the project's technical documentation and presented results to the security team.",
        ],
      },
      {
        role: "IT Support & Infrastructure Technician",
        org: "Special Criminal Court of Bangui",
        period: "July - September 2024",
        bullets: [
          "Full management of IT resources: inventory, preventive and corrective maintenance of equipment (PCs, printers, network peripherals).",
          "Hands-on technical support for users: incident resolution, Windows workstation configuration and software installation.",
          "Active network infrastructure support: cabling, switch and router configuration, network connectivity monitoring.",
          "Contributed to establishing backup and security procedures for the institution's sensitive data.",
          "Wrote incident reports and documented technical interventions.",
        ],
      },
      {
        role: "Network & Telecommunications Technician",
        org: "Orange Centrafrique",
        period: "July - October 2023",
        bullets: [
          "Configured, deployed and tested the GRENTECH repeater to extend mobile network coverage in underserved areas.",
          "Analyzed and diagnosed connectivity issues on telecommunications equipment (antennas, repeaters, microwave links).",
          "Participated in signal quality measurement campaigns and produced technical analysis reports.",
          "Developed a rigorous approach to network analysis and telecommunications protocols in a professional context.",
        ],
      },
      {
        role: "IT Support Technician – Banking Infrastructure",
        org: "Bank of Central African States (BEAC) - Bangui",
        period: "March - April 2023",
        bullets: [
          "Provided technical support to end users in a secure banking environment (incident resolution, helpdesk support).",
          "Explored and analyzed BEAC's network architecture: topology, VLAN segmentation, security protocols.",
          "Gained exposure to microwave links used for BEAC's secure interconnection with other regional financial institutions.",
          "Developed awareness of security and availability requirements in a critical infrastructure context.",
        ],
      },
    ],
  },
};

export default function Experience() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="experience" className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
        </div>

        <div className="space-y-6 border-l border-[var(--border-color)] pl-8">
          {t.experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6 shadow-sm"
            >
              <div className="absolute -left-[41px] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--primary)]/40 bg-[var(--background)]">
                <Briefcase size={11} className="text-[var(--secondary)]" />
              </div>

              <h3 className="text-lg font-semibold text-[var(--text)]">{exp.role}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--secondary)]">
                {exp.org} · {exp.period}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-6 text-[var(--muted)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}