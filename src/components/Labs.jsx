"use client";

import { motion } from "framer-motion";
import { HardDrive, Search, Terminal, Server } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Formation pratique",
    title: "Labs & environnements",
    lab1Title: "Laboratoire SOC virtualisé — Mémoire SFM Technologies",
    lab1Description: "Environnement de 5 machines virtuelles interconnectées (VMware, réseau NAT isolé 192.168.56.0/24) reproduisant un système d'information d'entreprise, utilisé pour simuler 12 techniques d'attaque MITRE ATT&CK et mesurer l'apport des agents Wazuh.",
    tableHeaders: { vm: "VM", role: "Rôle", os: "OS", ip: "IP" },
    machines: [
      { vm: "VM1", role: "SIEM / Wazuh", os: "Amazon Linux", ip: "192.168.56.100" },
      { vm: "VM2", role: "Contrôleur de domaine (AD DS)", os: "Windows Server 2025", ip: "192.168.56.10" },
      { vm: "VM3", role: "Poste client du domaine", os: "Windows 10", ip: "192.168.56.20" },
      { vm: "VM4", role: "Serveur Linux (SSH, FIM)", os: "Ubuntu Server 24.04 LTS", ip: "192.168.56.30" },
      { vm: "VM5", role: "Machine attaquante (Red Team)", os: "Kali Linux", ip: "192.168.56.40" },
    ],
    lab2Title: "Home Lab — Elevate DFIR Skills 2024",
    lab2Description: "Environnement self-hosted d'investigation numérique et de réponse aux incidents, construit pour manipuler des cas réels d'analyse forensique.",
    labSetup: [
      { icon: Terminal, machine: "VM Windows", tools: ["EZTools", "Splunk"] },
      { icon: HardDrive, machine: "VM Kali Linux", tools: ["Volatility3", "Wireshark"] },
    ],
    caseFilesTitle: "Cas pratiques traités",
    caseFiles: ["Collecte de triage disque", "Dump mémoire", "Page file", "Capture réseau", "Export de logs Splunk"],
  },
  en: {
    eyebrow: "Hands-on Training",
    title: "Labs & Environments",
    lab1Title: "Virtualized SOC Lab — SFM Technologies Thesis",
    lab1Description: "Environment of 5 interconnected virtual machines (VMware, isolated NAT network 192.168.56.0/24) reproducing an enterprise information system, used to simulate 12 MITRE ATT&CK attack techniques and measure the contribution of Wazuh agents.",
    tableHeaders: { vm: "VM", role: "Role", os: "OS", ip: "IP" },
    machines: [
      { vm: "VM1", role: "SIEM / Wazuh", os: "Amazon Linux", ip: "192.168.56.100" },
      { vm: "VM2", role: "Domain Controller (AD DS)", os: "Windows Server 2025", ip: "192.168.56.10" },
      { vm: "VM3", role: "Domain Client Workstation", os: "Windows 10", ip: "192.168.56.20" },
      { vm: "VM4", role: "Linux Server (SSH, FIM)", os: "Ubuntu Server 24.04 LTS", ip: "192.168.56.30" },
      { vm: "VM5", role: "Attacking Machine (Red Team)", os: "Kali Linux", ip: "192.168.56.40" },
    ],
    lab2Title: "Home Lab — Elevate DFIR Skills 2024",
    lab2Description: "Self-hosted digital forensics and incident response environment, built to work through real forensic analysis cases.",
    labSetup: [
      { icon: Terminal, machine: "Windows VM", tools: ["EZTools", "Splunk"] },
      { icon: HardDrive, machine: "Kali Linux VM", tools: ["Volatility3", "Wireshark"] },
    ],
    caseFilesTitle: "Cases Handled",
    caseFiles: ["Disk triage collection", "Memory dump", "Page file", "Network capture", "Splunk log export"],
  },
};

export default function Labs() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="labs" className="border-t border-[var(--border-color)] bg-[var(--surface)]/30 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
        </div>

        <div className="mb-8 rounded-2xl border border-[var(--border-color)] bg-[var(--background)]/60 p-7">
          <div className="mb-4 flex items-center gap-2 text-[var(--secondary)]">
            <Server size={20} />
            <h3 className="text-lg font-semibold text-[var(--text)]">{t.lab1Title}</h3>
          </div>
          <p className="mb-6 text-sm leading-6 text-[var(--muted)]">{t.lab1Description}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border-color)] text-[var(--muted)]">
                  <th className="pb-2 pr-4">{t.tableHeaders.vm}</th>
                  <th className="pb-2 pr-4">{t.tableHeaders.role}</th>
                  <th className="pb-2 pr-4">{t.tableHeaders.os}</th>
                  <th className="pb-2">{t.tableHeaders.ip}</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted)]">
                {t.machines.map((m) => (
                  <tr key={m.vm} className="border-b border-[var(--border-color)]/50">
                    <td className="py-2 pr-4 font-semibold text-[var(--secondary)]">{m.vm}</td>
                    <td className="py-2 pr-4 text-[var(--text)]">{m.role}</td>
                    <td className="py-2 pr-4">{m.os}</td>
                    <td className="py-2 font-mono text-xs">{m.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">{t.lab2Title}</h3>
          <p className="max-w-3xl text-sm leading-6 text-[var(--muted)]">{t.lab2Description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.labSetup.map((setup, index) => {
            const Icon = setup.icon;
            return (
              <motion.div
                key={setup.machine}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--background)]/60 p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--secondary)]">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)]">{setup.machine}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {setup.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-3 py-1 text-xs text-[var(--secondary)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--border-color)] bg-[var(--background)]/60 p-7">
          <div className="mb-4 flex items-center gap-2 text-[var(--secondary)]">
            <Search size={20} />
            <h3 className="text-lg font-semibold text-[var(--text)]">{t.caseFilesTitle}</h3>
          </div>
          <ul className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-3">
            {t.caseFiles.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}