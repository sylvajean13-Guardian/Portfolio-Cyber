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
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImpactMetrics from "@/components/ImpactMetrics";
import Expertise from "@/components/Expertise";
import CaseStudy from "@/components/CaseStudy";
import AttackScenarios from "@/components/AttackScenarios";
import DetectionPipeline from "@/components/DetectionPipeline";
import SecurityLab from "@/components/SecurityLab";
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
       <Navbar />

      {/* HERO */}
       <Hero />

       <ImpactMetrics />

      {/* ABOUT */}
      <About />

       {/* SKILLS / EXPERTISE */}
       <Expertise />

      {/* FEATURED CASE STUDY */}
      <CaseStudy />

       {/* ARCHITECTURE SOC INTERACTIVE */}
      <AttackScenarios />
      <DetectionPipeline />
      <SecurityLab />

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