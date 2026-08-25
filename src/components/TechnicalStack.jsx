"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Stack technique",
    title: "Technologies & Outils",
    categories: [
      { label: "Sécurité", items: ["Wazuh", "MITRE ATT&CK", "Threat Intelligence", "DFIR", "SOC", "SIEM", "VirusTotal", "AbuseIPDB", "AlienVault OTX"] },
      { label: "Réseaux", items: ["TCP/IP", "DNS", "DHCP", "VPN", "VLAN", "Routage", "Fibre optique / FTTH"] },
      { label: "Systèmes", items: ["Windows Server", "Active Directory", "Ubuntu Server", "Linux"] },
      { label: "Programmation", items: ["Python", "HTML"] },
      { label: "Virtualisation", items: ["VMware", "VirtualBox", "Docker"] },
      { label: "IA / Machine Learning", items: ["Random Forest", "SVM", "XGBoost", "Isolation Forest", "LSTM", "K-Means", "LLaMA 3.1"] },
    ],
  },
  en: {
    eyebrow: "Technical Stack",
    title: "Technologies & Tools",
    categories: [
      { label: "Security", items: ["Wazuh", "MITRE ATT&CK", "Threat Intelligence", "DFIR", "SOC", "SIEM", "VirusTotal", "AbuseIPDB", "AlienVault OTX"] },
      { label: "Networking", items: ["TCP/IP", "DNS", "DHCP", "VPN", "VLAN", "Routing", "Fiber optics / FTTH"] },
      { label: "Systems", items: ["Windows Server", "Active Directory", "Ubuntu Server", "Linux"] },
      { label: "Programming", items: ["Python", "HTML"] },
      { label: "Virtualization", items: ["VMware", "VirtualBox", "Docker"] },
      { label: "AI / Machine Learning", items: ["Random Forest", "SVM", "XGBoost", "Isolation Forest", "LSTM", "K-Means", "LLaMA 3.1"] },
    ],
  },
};

export default function TechnicalStack() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="border-t border-[var(--border-color)] bg-[var(--surface)] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">{t.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--background)] p-6 shadow-sm"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--secondary)]">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}