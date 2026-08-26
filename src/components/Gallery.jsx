"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Preuves visuelles",
    title: "Captures du laboratoire",
    subtitle: "Aperçu réel de l'environnement Wazuh + IA construit pour le mémoire.",
    images: [
      { src: "/images/screenshots/architecture-wazuh.png", title: "Architecture Wazuh", description: "Flux de données complet : agents, Wazuh Manager, indexation OpenSearch et Dashboard.", tech: "Wazuh · OpenSearch" },
      { src: "/images/screenshots/wazuh-dashboard-overview.png", title: "Dashboard Wazuh — Vue initiale", description: "Interface d'administration accessible depuis Kali Linux, avant déploiement des agents.", tech: "Wazuh Dashboard" },
      { src: "/images/screenshots/nmap-scan-results.png", title: "Reconnaissance réseau", description: "Scan de services Nmap identifiant les ports exposés sur le contrôleur de domaine.", tech: "Nmap" },
      { src: "/images/screenshots/ssh-bruteforce-success.png", title: "Brute force SSH réussi", description: "Attaque par dictionnaire via Hydra aboutissant à une compromission de credentials.", tech: "Hydra" },
      { src: "/images/screenshots/syn-flood-hping3.png", title: "Attaque SYN Flood", description: "1 229 197 paquets envoyés en 15 secondes contre le contrôleur de domaine.", tech: "hping3" },
      { src: "/images/screenshots/syn-flood-impact-timeline.png", title: "Impact du SYN Flood", description: "Charge réseau observée avant, pendant et après l'attaque via le Gestionnaire des tâches Windows.", tech: "Windows Task Manager" },
      { src: "/images/screenshots/domain-admin-creation.png", title: "Création compte Domain Admin", description: "Élévation de privilèges via Evil-WinRM après compromission de credentials.", tech: "Evil-WinRM" },
      { src: "/images/screenshots/wazuh-dashboard-live-events.png", title: "Détection en temps réel", description: "Agents Wazuh actifs et événements détectés en direct après déploiement.", tech: "Wazuh Dashboard" },
      { src: "/images/screenshots/wazuh-critical-alert.png", title: "Alerte critique — Règle 60109", description: "Détection de la création du compte Domain Admin, niveau de criticité 8.", tech: "Wazuh Rules Engine" },
      { src: "/images/screenshots/soc-ai-agent-report.png", title: "Rapport de l'Agent IA SOC", description: "Rapport PDF automatisé généré et envoyé par email après analyse des alertes.", tech: "Python · LLaMA 3.1" },
    ],
  },
  en: {
    eyebrow: "Visual Evidence",
    title: "Lab Screenshots",
    subtitle: "Real snapshots of the Wazuh + AI environment built for the thesis.",
    images: [
      { src: "/images/screenshots/architecture-wazuh.png", title: "Wazuh Architecture", description: "Full data flow: agents, Wazuh Manager, OpenSearch indexing and Dashboard.", tech: "Wazuh · OpenSearch" },
      { src: "/images/screenshots/wazuh-dashboard-overview.png", title: "Wazuh Dashboard — Initial View", description: "Admin interface accessed from Kali Linux, before agent deployment.", tech: "Wazuh Dashboard" },
      { src: "/images/screenshots/nmap-scan-results.png", title: "Network Reconnaissance", description: "Nmap service scan identifying exposed ports on the domain controller.", tech: "Nmap" },
      { src: "/images/screenshots/ssh-bruteforce-success.png", title: "Successful SSH Brute Force", description: "Dictionary attack via Hydra resulting in credential compromise.", tech: "Hydra" },
      { src: "/images/screenshots/syn-flood-hping3.png", title: "SYN Flood Attack", description: "1,229,197 packets sent in 15 seconds against the domain controller.", tech: "hping3" },
      { src: "/images/screenshots/syn-flood-impact-timeline.png", title: "SYN Flood Impact", description: "Network load observed before, during and after the attack via Windows Task Manager.", tech: "Windows Task Manager" },
      { src: "/images/screenshots/domain-admin-creation.png", title: "Domain Admin Account Creation", description: "Privilege escalation via Evil-WinRM after credential compromise.", tech: "Evil-WinRM" },
      { src: "/images/screenshots/wazuh-dashboard-live-events.png", title: "Real-time Detection", description: "Active Wazuh agents and live detected events after deployment.", tech: "Wazuh Dashboard" },
      { src: "/images/screenshots/wazuh-critical-alert.png", title: "Critical Alert — Rule 60109", description: "Detection of Domain Admin account creation, severity level 8.", tech: "Wazuh Rules Engine" },
      { src: "/images/screenshots/soc-ai-agent-report.png", title: "SOC AI Agent Report", description: "Automated PDF report generated and emailed after alert analysis.", tech: "Python · LLaMA 3.1" },
    ],
  },
};

export default function Gallery() {
  const { language } = useLanguage();
  const t = content[language];
  const [selected, setSelected] = useState(null);

  return (
    <section className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)]">{t.subtitle}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.images.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setSelected(img)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] text-left shadow-sm transition hover:border-[var(--primary)]/40"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black/5">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[var(--text)]">{img.title}</h3>
                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{img.description}</p>
                <span className="mt-2 inline-block rounded-full bg-[var(--primary)]/10 px-2.5 py-1 text-[10px] font-medium text-[var(--secondary)]">
                  {img.tech}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl bg-[var(--background)] shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Fermer"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
              >
                <X size={18} />
              </button>
              <div className="relative aspect-video w-full">
                <Image
                  src={selected.src}
                  alt={selected.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--text)]">{selected.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{selected.description}</p>
                <span className="mt-3 inline-block rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--secondary)]">
                  {selected.tech}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}