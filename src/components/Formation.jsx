"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const formations = [
  {
    degree: "Master en Sécurité des Systèmes d'Informations",
    mention: "Mention : Excellente",
    school: "Ecole Supérieure de Génie Informatique et de Technologie (ESGITECH), Tunis, Tunisie",
    period: "Sept 2024 - Juillet 2026",
    details: [
      "Spécialisation : Sécurité des Systèmes d'Information, Cryptographie, Gestion des risques.",
      "Projet de fin d'études : Intégration de l'IA dans un SIEM pour la détection avancée des cybermenaces (SFM Technologies).",
      "Modules clés : SOC & Threat Intelligence, Pentest, Forensics, Sécurité Cloud, Machine Learning appliqué à la cybersécurité.",
    ],
  },
  {
    degree: "Licence Professionnelle en Téléinformatique",
    mention: "Mention : Bien",
    school: "Université de Bangui, Bangui, Centrafrique",
    period: "Janvier 2021 - Octobre 2023",
    details: [
      "Spécialisation : Téléinformatique (Réseau et Télécommunication).",
      "Projet de fin d'études : Etude du déploiement d'un réseau optique à Ngaragba en utilisant du FTTH.",
      "Modules clés : Fibres optiques, FTTH.",
    ],
  },
  {
    degree: "Baccalauréat Scientifique (Bac D)",
    mention: "Mention : Passable",
    school: "Lycée de Mbaïki (Centrafrique)",
    period: "Septembre 2019 - Septembre 2020",
    details: [],
  },
];

export default function Formation() {
  return (
    <section id="formation" className="border-t border-white/10 bg-slate-900/40 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Parcours académique
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Formations</h2>
        </div>

        <div className="space-y-6 border-l border-white/10 pl-8">
          {formations.map((f, index) => (
            <motion.div
              key={f.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-slate-950/60 p-6"
            >
              <div className="absolute -left-[41px] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950">
                <GraduationCap size={11} className="text-blue-400" />
              </div>

              <h3 className="text-lg font-semibold">{f.degree}</h3>
              <p className="mt-1 text-sm text-blue-400">
                {f.school} · {f.period}
              </p>
              {f.mention && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {f.mention}
                </p>
              )}

              {f.details.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {f.details.map((d, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-6 text-slate-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}