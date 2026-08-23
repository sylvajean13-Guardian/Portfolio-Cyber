"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  ShieldCheck,
  BrainCircuit,
  Network,
  Terminal,
  Activity,
  LockKeyhole,
} from "lucide-react";
import Projects from "@/components/Projects";
import Labs from "@/components/Labs";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Formation from "@/components/Formation";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const skills = [
  {
    icon: ShieldCheck,
    title: "SOC & SIEM",
    description: "Wazuh, analyse des alertes, corrélation et supervision de sécurité.",
  },
  {
    icon: BrainCircuit,
    title: "IA & Machine Learning",
    description: "Détection d'anomalies et automatisation appliquées à la cybersécurité.",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "TCP/IP, DNS, DHCP, VPN, VLAN, routage et administration réseau.",
  },
  {
    icon: Terminal,
    title: "Threat Detection",
    description: "Analyse des logs, Threat Intelligence et détection des comportements suspects.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <ScrollProgress />
      <CursorGlow />
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            JEAN DANIEL SYLVA OSSIBOUYEN<span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              À propos
            </a>
            <a href="#skills" className="transition hover:text-white">
              Compétences
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projets
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white"
          >
            Me contacter
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        {/* Background effects */}
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 w-fit">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
               Disponible pour de nouvelles opportunités
            </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 w-fit">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                 Mobilité Internationale
             </div>
</div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              SOC · SIEM · Threat Detection · AI · Security Automation
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Je protège les systèmes
              <span className="block text-blue-500">
                avant que les menaces
              </span>
              ne les compromettent.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Master Cybersécurité avec la Mention Excellente, spécialisé en
              SIEM, SOC, Threat Detection, Intelligence Artificielle et
              Threat Intelligence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
              >
                Découvrir mes projets
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="/cv/Daniel-Sylva-CV.pdf"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
              >
                <Download size={18} />
                Télécharger mon CV
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:flex sm:flex-wrap sm:gap-10">
              <div>
                <p className="text-3xl font-bold">75%</p>
                <p className="mt-1 text-sm text-slate-500">
                  Détection obtenue
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">2+</p>
                <p className="mt-1 text-sm text-slate-500">
                  Années d'expérience IT
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">SIEM</p>
                <p className="mt-1 text-sm text-slate-500">
                  Wazuh & Security
                </p>
              </div>
            </div>
          </motion.div>

          {/* SOC VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square max-w-[520px]">
              {/* Outer rings */}
              <div className="absolute inset-8 animate-[spin_20s_linear_infinite] rounded-full border border-blue-500/20" />
              <div className="absolute inset-20 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-cyan-500/20" />

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 shadow-[0_0_100px_rgba(37,99,235,0.25)] backdrop-blur-xl">
                  <div className="absolute inset-5 animate-pulse rounded-full border border-blue-400/20" />

                  <ShieldCheck
                    size={90}
                    strokeWidth={1}
                    className="text-blue-400"
                  />
                </div>
              </div>

              {/* Security nodes */}
              <SecurityNode
                icon={<Activity size={22} />}
                label="SIEM"
                position="left-0 top-1/2"
              />

              <SecurityNode
                icon={<BrainCircuit size={22} />}
                label="AI"
                position="right-0 top-1/4"
              />

              <SecurityNode
                icon={<LockKeyhole size={22} />}
                label="Threat Intel"
                position="right-4 bottom-1/4"
              />

              <SecurityNode
                icon={<Network size={22} />}
                label="Network"
                position="left-10 bottom-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            À propos
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Une approche orientée
            <span className="text-blue-500"> défense.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Je m'intéresse à l'utilisation du Machine Learning pour la détection d'anomalies, la corrélation d'alertes SOC et la réponse automatisée aux incidents (SOAR).
             Convaincu que la prochaine génération de défense cyber sera pilotée par l'IA.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/10 bg-slate-900/40 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Expertise
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Mes compétences
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border border-white/10 bg-slate-950/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT PREVIEW */}
      <section
        id="projects"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-slate-950 p-8 md:p-14">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                  Projet principal
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight">
                  Détection intelligente des menaces avec
                  <span className="text-blue-500"> Wazuh + IA</span>
                </h2>

                <p className="mt-6 leading-7 text-slate-400">
                  Conception et déploiement d'un système de détection et
                  réponse combinant SIEM, Intelligence Artificielle et
                  Threat Intelligence.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Wazuh",
                    "Python",
                    "Machine Learning",
                    "Threat Intelligence",
                    "SOC",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Voir le projet
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-6 font-mono text-sm shadow-2xl">
                  <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
                    <span className="h-3 w-3 rounded-full bg-red-500/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <span className="h-3 w-3 rounded-full bg-green-500/70" />
                    <span className="ml-3 text-slate-500">
                      security-monitor
                    </span>
                  </div>

                  <div className="space-y-4 text-slate-400">
                    <p>
                      <span className="text-blue-400">$</span>{" "}
                      wazuh-analysis --monitor
                    </p>

                    <p className="text-green-400">
                      ✓ Threat Intelligence connected
                    </p>

                    <p className="text-yellow-400">
                      ⚠ Suspicious activity detected
                    </p>

                    <p className="text-blue-400">
                      → AI anomaly detection: ACTIVE
                    </p>

                    <p className="text-green-400">
                      ✓ Malicious IP blocked automatically
                    </p>

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="text-slate-500">
                        Detection performance
                      </p>

                      <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "75%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5 }}
                          className="h-full rounded-full bg-blue-500"
                        />
                      </div>

                      <div className="mt-2 flex justify-between text-xs">
                        <span className="text-slate-500">
                          Initial: 0%
                        </span>
                        <span className="font-semibold text-blue-400">
                          Result: 75%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* V2 */}
      <Projects />
      <Labs />
      <Experience />
      <Formation />
      <Certifications />
      <Timeline />
      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Daniel Sylva. Tous droits réservés.</p>
          <p>Cybersecurity · SOC · SIEM · AI</p>
        </div>
      </footer>
    </main>
  );
}

function SecurityNode({ icon, label, position }) {
  return (
    <div
      className={`absolute ${position} flex items-center gap-2 rounded-xl border border-blue-500/20 bg-slate-950/80 px-4 py-3 text-xs text-slate-300 shadow-xl backdrop-blur-xl`}
    >
      <span className="text-blue-400">{icon}</span>
      {label}
    </div>
  );
}