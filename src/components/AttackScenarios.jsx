"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Tests en laboratoire simulé",
    title: "Scénarios d'attaque",
    subtitle:
      "12 techniques MITRE ATT&CK simulées dans l'environnement de laboratoire, avant/après déploiement des agents Wazuh.",
    scenarios: [
      { technique: "Brute Force SSH", id: "T1110.001", description: "Attaque par force brute sur le service SSH via Hydra (simulée, environnement de laboratoire).", detection: "Détecté", detail: "Règles 5760, 2501, 2502, 5758 — niveau 10", status: "detected" },
      { technique: "Brute Force WinRM", id: "T1110.001", description: "Force brute sur le service WinRM via CrackMapExec avec wordlist rockyou.txt.", detection: "Détecté", detail: "Règles 60122, 60204 — niveau 10 — 14 728 alertes générées", status: "detected" },
      { technique: "Mouvement latéral — Evil-WinRM", id: "T1021.006", description: "Connexion PowerShell distante via WinRM après compromission de credentials.", detection: "Détecté", detail: "Règles 92652, 67028 — niveau 6", status: "detected" },
      { technique: "Création compte Domain Admin", id: "T1136.001 + T1098.001", description: "Création d'un compte et ajout au groupe Admins du domaine via Evil-WinRM.", detection: "Détecté", detail: "Règle 60109 — niveau 8 — mapping MITRE Account Manipulation", status: "detected" },
      { technique: "Modification /etc/passwd", id: "T1565.001", description: "Ajout d'un compte backdoor avec UID=0 (privilèges root) sur le serveur Linux.", detection: "Détecté", detail: "Règle 550 (FIM) — niveau 7", status: "detected" },
      { technique: "Création compte sudo malveillant", id: "T1136.001", description: "Création d'un compte avec privilèges sudo complets pour persistance.", detection: "Détecté", detail: "Règle 5902 — niveau 8 — tactique Persistence", status: "detected" },
      { technique: "SYN Flood DoS", id: "T1499", description: "Déni de service via hping3 (1,2M paquets en 15 secondes) contre le contrôleur de domaine.", detection: "Non détecté", detail: "Nécessite un IDS réseau dédié — hors du périmètre HIDS de Wazuh", status: "not-detected" },
      { technique: "Kerberoasting", id: "T1558.003", description: "Tentative d'extraction de ticket TGS via Impacket-GetUserSPNs pour cracking hors ligne.", detection: "Bloqué en amont", detail: "Windows Server 2025 impose AES-256 — RC4 refusé (KDC_ERR_ETYPE_NOSUPP)", status: "blocked" },
    ],
    statusLabels: { detected: "Détecté", "not-detected": "Non détecté", blocked: "Bloqué en amont" },
  },
  en: {
    eyebrow: "Simulated Lab Testing",
    title: "Attack Scenarios",
    subtitle:
      "12 MITRE ATT&CK techniques simulated in the lab environment, before/after Wazuh agent deployment.",
    scenarios: [
      { technique: "SSH Brute Force", id: "T1110.001", description: "Brute force attack against the SSH service via Hydra (simulated, lab environment).", detection: "Detected", detail: "Rules 5760, 2501, 2502, 5758 — level 10", status: "detected" },
      { technique: "WinRM Brute Force", id: "T1110.001", description: "Brute force on the WinRM service via CrackMapExec using the rockyou.txt wordlist.", detection: "Detected", detail: "Rules 60122, 60204 — level 10 — 14,728 alerts generated", status: "detected" },
      { technique: "Lateral Movement — Evil-WinRM", id: "T1021.006", description: "Remote PowerShell session via WinRM after credential compromise.", detection: "Detected", detail: "Rules 92652, 67028 — level 6", status: "detected" },
      { technique: "Domain Admin Account Creation", id: "T1136.001 + T1098.001", description: "Account creation and addition to the Domain Admins group via Evil-WinRM.", detection: "Detected", detail: "Rule 60109 — level 8 — MITRE Account Manipulation mapping", status: "detected" },
      { technique: "/etc/passwd Modification", id: "T1565.001", description: "Addition of a backdoor account with UID=0 (root privileges) on the Linux server.", detection: "Detected", detail: "Rule 550 (FIM) — level 7", status: "detected" },
      { technique: "Malicious Sudo Account Creation", id: "T1136.001", description: "Creation of an account with full sudo privileges for persistence.", detection: "Detected", detail: "Rule 5902 — level 8 — Persistence tactic", status: "detected" },
      { technique: "SYN Flood DoS", id: "T1499", description: "Denial of service via hping3 (1.2M packets in 15 seconds) against the domain controller.", detection: "Not detected", detail: "Requires a dedicated network IDS — outside Wazuh's HIDS scope", status: "not-detected" },
      { technique: "Kerberoasting", id: "T1558.003", description: "TGS ticket extraction attempt via Impacket-GetUserSPNs for offline cracking.", detection: "Blocked upstream", detail: "Windows Server 2025 enforces AES-256 — RC4 rejected (KDC_ERR_ETYPE_NOSUPP)", status: "blocked" },
    ],
    statusLabels: { detected: "Detected", "not-detected": "Not detected", blocked: "Blocked upstream" },
  },
};

const statusIcons = {
  detected: { icon: CheckCircle2, color: "var(--success)" },
  "not-detected": { icon: XCircle, color: "var(--critical)" },
  blocked: { icon: ShieldAlert, color: "var(--secondary)" },
};

export default function AttackScenarios() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)]">{t.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {t.scenarios.map((s, i) => {
            const cfg = statusIcons[s.status];
            const StatusIcon = cfg.icon;
            return (
              <motion.div
                key={s.technique}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)]/40 p-6"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-[var(--text)]">{s.technique}</h3>
                    <span className="mt-1 inline-block rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-mono text-[var(--muted)]">
                      {s.id}
                    </span>
                  </div>
                  <StatusIcon size={20} style={{ color: cfg.color }} className="shrink-0" />
                </div>

                <p className="text-sm leading-6 text-[var(--muted)]">{s.description}</p>

                <div className="mt-4 border-t border-[var(--border-color)] pt-3">
                  <p className="text-xs font-semibold" style={{ color: cfg.color }}>
                    {s.detection}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{s.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}