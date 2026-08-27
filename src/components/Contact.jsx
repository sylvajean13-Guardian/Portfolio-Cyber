"use client";

import { motion } from "framer-motion";
import { Mail, Download, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {
    eyebrow: "Contact",
    title1: "Sécurisons",
    title2: "ce qui vient.",
    subtitle: "Ouvert aux opportunités en cybersécurité, CDI, aux rôles SOC, à l'ingénierie sécurité et aux collaborations internationales.",
    location: "Afrique Centrale et de l'Ouest — Mobilité internationale",
    openTo: "Ouvert aux : CDI · Missions de consulting · Opportunités internationales",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    linkedinValue: "Jean Daniel Sylva Ossibouyen",
    githubValue: "Voir mon profil",
    cvButton: "Télécharger mon CV",
    reportButton: "Télécharger le mémoire complet",
  },
  en: {
    eyebrow: "Contact",
    title1: "Let's secure",
    title2: "what's next.",
    subtitle: "Open to cybersecurity opportunities, Full time SOC roles, security engineering and international collaborations.",
    location: "Central & West Africa — International mobility",
    openTo: "Open to: Full-time · Consulting engagements · International opportunities",
    emailLabel: "Email",
    phoneLabel: "Phone",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    linkedinValue: "Jean Daniel Sylva Ossibouyen",
    githubValue: "View my profile",
    cvButton: "Download my CV",
    reportButton: "Download the full thesis",
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = content[language];

  const contactLinks = [
    { icon: Mail, label: t.emailLabel, value: socials.email, href: `mailto:${socials.email}` },
    { icon: Phone, label: t.phoneLabel, value: "+216 50 64 04 86", href: "tel:+21650640486" },
    { icon: FaLinkedin, label: t.linkedinLabel, value: t.linkedinValue, href: socials.linkedin },
    { icon: FaGithub, label: t.githubLabel, value: t.githubValue, href: socials.github },
  ];

  return (
    <section id="contact" className="border-t border-[var(--border-color)] px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">
            {t.title1}
            <span className="text-[var(--primary)]"> {t.title2}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted)]">{t.subtitle}</p>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
            <MapPin size={16} className="text-[var(--secondary)]" />
            {t.location}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-[var(--border-color)] bg-[var(--surface)]/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--secondary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon size={22} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                  {link.label}
                </p>
                <p className="mt-1 truncate text-sm font-medium text-[var(--text)]">
                  {link.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          
          href={socials.cv[language]}
          download
          className="flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3 font-semibold text-white transition hover:brightness-110"

          >
          <Download size={18} />
           {t.cvButton}
          </a>

          <a
          href={socials.report}
          download
          className="flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-7 py-3 font-semibold text-[var(--text)] transition hover:border-[var(--primary)]/40"
          >
          <Download size={18} />
          {t.reportButton}
          </a>
        </div>
      </div>
    </section>
  );
}