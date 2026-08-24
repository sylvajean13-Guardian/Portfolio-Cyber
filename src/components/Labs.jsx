"use client";

import { motion } from "framer-motion";
import { HardDrive, Search, Terminal, Server } from "lucide-react";

const labSetup = [
  { icon: Terminal, machine: "VM Windows", tools: ["EZTools", "Splunk"] },
  { icon: HardDrive, machine: "VM Kali Linux", tools: ["Volatility3", "Wireshark"] },
];

const caseFiles = [
  "Collecte de triage disque",
  "Dump mémoire",
  "Page file",
  "Capture réseau",
  "Export de logs Splunk",
];

const socLabMachines = [
  { vm: "VM1", role: "SIEM / Wazuh", os: "Amazon Linux", ip: "192.168.56.100" },
  { vm: "VM2", role: "Contrôleur de domaine (AD DS)", os: "Windows Server 2025", ip: "192.168.56.10" },
  { vm: "VM3", role: "Poste client du domaine", os: "Windows 10", ip: "192.168.56.20" },
  { vm: "VM4", role: "Serveur Linux (SSH, FIM)", os: "Ubuntu Server 24.04 LTS", ip: "192.168.56.30" },
  { vm: "VM5", role: "Machine attaquante (Red Team)", os: "Kali Linux", ip: "192.168.56.40" },
];

export default function Labs() {
  return (
    <section id="labs" className="border-t border-[var(--border-color)] bg-[var(--surface)]/30 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            Formation pratique
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">
            Labs & environnements
          </h2>
        </div>

        {/* Lab 1 : SOC/SIEM du mémoire */}
        <div className="mb-8 rounded-2xl border border-[var(--border-color)] bg-[var(--background)]/60 p-7">
          <div className="mb-4 flex items-center gap-2 text-[var(--secondary)]">
            <Server size={20} />
            <h3 className="text-lg font-semibold text-[var(--text)]">
              Laboratoire SOC virtualisé — Mémoire SFM Technologies
            </h3>
          </div>
          <p className="mb-6 text-sm leading-6 text-[var(--muted)]">
            Environnement de 5 machines virtuelles interconnectées (VMware, réseau NAT isolé
            192.168.56.0/24) reproduisant un système d'information d'entreprise, utilisé pour
            simuler 12 techniques d'attaque MITRE ATT&CK et mesurer l'apport des agents Wazuh.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border-color)] text-[var(--muted)]">
                  <th className="pb-2 pr-4">VM</th>
                  <th className="pb-2 pr-4">Rôle</th>
                  <th className="pb-2 pr-4">OS</th>
                  <th className="pb-2">IP</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted)]">
                {socLabMachines.map((m) => (
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

        {/* Lab 2 : DFIR */}
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">
            Home Lab — Elevate DFIR Skills 2024
          </h3>
          <p className="max-w-3xl text-sm leading-6 text-[var(--muted)]">
            Environnement self-hosted d'investigation numérique et de réponse aux incidents,
            construit pour manipuler des cas réels d'analyse forensique.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {labSetup.map((setup, index) => {
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
                  {setup.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-3 py-1 text-xs text-[var(--secondary)]"
                    >
                      {t}
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
            <h3 className="text-lg font-semibold text-[var(--text)]">Cas pratiques traités</h3>
          </div>
          <ul className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-3">
            {caseFiles.map((c) => (
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