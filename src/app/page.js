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
import { useLanguage } from "@/context/LanguageContext";
import ActivitiesGallery from "@/components/ActivitiesGallery";
import TechnicalStack from "@/components/TechnicalStack";
import dynamic from "next/dynamic";
const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <div className="py-28 text-center text-sm text-[var(--muted)]">Chargement...</div>,
});
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
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
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
       <TechnicalStack />

      {/* FEATURED CASE STUDY */}
      <CaseStudy />
      <Gallery />
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
      <ActivitiesGallery />

      {/* FOOTER */}
      <FooterSection />
    </main>
  );
}

function FooterSection() {
  const { language } = useLanguage();
  const text = {
    fr: { tagline: "Ingénieur Cybersécurité", rights: "Tous droits réservés." },
    en: { tagline: "Cybersecurity Engineer", rights: "All rights reserved." },
  };
  const t = text[language];

  return (
    <footer className="border-t border-[var(--border-color)] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[var(--muted)] md:flex-row">
        <p>
          Daniel Sylva — {t.tagline}
          <span className="mx-2 text-[var(--border-color)]">|</span>
          © 2026. {t.rights}
        </p>
        <p>SOC · SIEM · Threat Detection · AI</p>
      </div>
    </footer>
  );
}