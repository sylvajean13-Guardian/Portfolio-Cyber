"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Radar,
  Globe,
  Bot,
  Network,
  Search,
  BrainCircuit,
  Server,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Expertise",
    title: "Compétences en sécurité",
    areas: [
      { icon: ShieldCheck, title: "SOC & SIEM", description: "Wazuh, surveillance des alertes, analyse de logs, corrélation, detection engineering." },
      { icon: Radar, title: "Threat Detection", description: "Règles de détection, détection d'anomalies, MITRE ATT&CK, analyse comportementale." },
      { icon: Globe, title: "Threat Intelligence", description: "VirusTotal, AbuseIPDB, AlienVault OTX, enrichissement des IOC." },
      { icon: Bot, title: "Security Automation", description: "Python, Active Response, blocage automatisé, workflows SOC." },
      { icon: Network, title: "Network Security", description: "TCP/IP, DNS, DHCP, VPN, VLAN, routage, supervision réseau." },
      { icon: Search, title: "DFIR", description: "Investigation numérique, réponse aux incidents, collecte de preuves, analyse de logs." },
      { icon: BrainCircuit, title: "IA & Machine Learning", description: "Détection d'anomalies, Random Forest, SVM, XGBoost, Isolation Forest, LSTM." },
      { icon: Server, title: "Systèmes", description: "Linux, Ubuntu Server, Windows Server, Active Directory, virtualisation." },
    ],
  },
  en: {
    eyebrow: "Expertise",
    title: "Security Expertise",
    areas: [
      { icon: ShieldCheck, title: "SOC & SIEM", description: "Wazuh, alert monitoring, log analysis, correlation, detection engineering." },
      { icon: Radar, title: "Threat Detection", description: "Detection rules, anomaly detection, MITRE ATT&CK, behavioral analysis." },
      { icon: Globe, title: "Threat Intelligence", description: "VirusTotal, AbuseIPDB, AlienVault OTX, IOC enrichment." },
      { icon: Bot, title: "Security Automation", description: "Python, Active Response, automated blocking, SOC workflows." },
      { icon: Network, title: "Network Security", description: "TCP/IP, DNS, DHCP, VPN, VLAN, routing, network monitoring." },
      { icon: Search, title: "DFIR", description: "Digital forensics, incident response, evidence collection, log analysis." },
      { icon: BrainCircuit, title: "AI & Machine Learning", description: "Anomaly detection, Random Forest, SVM, XGBoost, Isolation Forest, LSTM." },
      { icon: Server, title: "Systems", description: "Linux, Ubuntu Server, Windows Server, Active Directory, virtualization." },
    ],
  },
};

export default function Expertise() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="skills" className="border-t border-[var(--border-color)] bg-[var(--surface)]/30 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-2xl border border-[var(--border-color)] bg-[var(--background)]/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-[var(--primary)]/40"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--secondary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)]">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}