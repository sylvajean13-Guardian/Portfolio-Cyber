"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  { year: "2019-2020", label: "Baccalauréat Scientifique (Bac D)", type: "formation" },
  { year: "2021-2023", label: "Licence Pro. Téléinformatique — Université de Bangui", type: "formation" },
  { year: "Mars-Avril 2023", label: "Technicien Support IT — BEAC Bangui", type: "pro" },
  { year: "Juil-Oct 2023", label: "Technicien Réseaux & Télécom — Orange Centrafrique", type: "pro" },
  { year: "Juil-Sept 2024", label: "Technicien Support IT — Cours Pénale Spéciale de Bangui", type: "pro" },
  { year: "2024-2026", label: "Master Cybersécurité — ESGITECH Tunis", type: "formation" },
  { year: "Fév-Juil 2026", label: "Ingénieur Cybersécurité — SFM Technologies", type: "pro" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Vue d'ensemble
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Mon évolution</h2>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 sm:left-1/2" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={event.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`relative flex items-center gap-4 sm:w-1/2 ${
                    isLeft ? "sm:ml-0 sm:pr-8" : "sm:ml-auto sm:pl-8 sm:text-right sm:flex-row-reverse"
                  }`}
                >
                  <span
                    className={`absolute left-0 h-4 w-4 rounded-full border-2 border-slate-950 sm:left-auto ${
                      isLeft ? "sm:-right-2" : "sm:-left-2"
                    } ${event.type === "pro" ? "bg-blue-500" : "bg-cyan-400"}`}
                  />
                  <div className="ml-6 rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 sm:ml-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                      {event.year}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">{event.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" /> Expérience pro
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> Formation
          </span>
        </div>
      </div>
    </section>
  );
}