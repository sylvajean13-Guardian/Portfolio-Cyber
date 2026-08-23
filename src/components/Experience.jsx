"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Ingénieur Cybersécurité | SIEM • IA • Détection des Menaces",
    org: "SFM Technologies (Tunis)",
    period: "Février - Juillet 2026",
    bullets: [
      "Conception et développement d'un système d'intégration de l'IA dans un SIEM pour améliorer la détection avancée des cybermenaces (menaces APT, attaques zero-day).",
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
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Parcours
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Expériences professionnelles
          </h2>
        </div>

        <div className="space-y-6 border-l border-white/10 pl-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-6"
            >
              <div className="absolute -left-[41px] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950">
                <Briefcase size={11} className="text-blue-400" />
              </div>

              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="mt-1 text-sm text-blue-400">
                {exp.org} · {exp.period}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-6 text-slate-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
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