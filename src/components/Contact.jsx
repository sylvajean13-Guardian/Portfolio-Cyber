"use client";

import { motion } from "framer-motion";
import { Mail, Download, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// ⚠️ Remplace la valeur ci-dessous par ton lien GitHub une fois que tu l'as
const GITHUB_URL = "https://github.com/TON-PSEUDO";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sylvajean13@gmail.com",
    href: "mailto:sylvajean13@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+216 50 64 04 86",
    href: "tel:+21650640486",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Jean Daniel Sylva Ossibouyen",
    href: "https://www.linkedin.com/in/jean-daniel-sylva-ossibouyen-4534b0332/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "sylvajean13-Guardian",
    href: "https://github.com/sylvajean13-Guardian",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Construisons quelque chose de
            <span className="text-blue-500"> sécurisé.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Vous recherchez un profil en cybersécurité, SOC, SIEM ou Threat
            Detection ? Échangeons.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
            <MapPin size={16} className="text-blue-400" />
            Afrique Centrale et de l'Ouest — Mobilité internationale
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
                className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {link.label}
                </p>
                <p className="mt-1 truncate text-sm font-medium text-slate-200">
                  {link.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/cv/Daniel-Sylva-CV.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500"
          >
            <Download size={18} />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}