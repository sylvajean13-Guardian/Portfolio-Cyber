"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig, socials } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const navLinksContent = {
  fr: [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Expertise", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Labs", href: "#labs" },
    { label: "Expérience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Labs", href: "#labs" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navLinks = navLinksContent[language];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-[var(--border-color)] bg-[var(--background)]/85 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-lg font-bold tracking-tight text-[var(--text)]">
            {siteConfig.name}
            <span className="text-[var(--primary)]">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 text-sm text-[var(--muted)] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleTheme}
              aria-label="Changer de thème"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--muted)] transition hover:border-[var(--primary)]/40 hover:text-[var(--text)]"
            >
              {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            <button
              onClick={toggleLanguage}
              aria-label="Changer de langue"
              className="rounded-full border border-[var(--border-color)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)] transition hover:border-[var(--primary)]/40 hover:text-[var(--text)]"
            >
              <span className={language === "fr" ? "text-[var(--secondary)]" : ""}>FR</span>
              <span className="mx-1 text-[var(--border-color)]">|</span>
              <span className={language === "en" ? "text-[var(--secondary)]" : ""}>EN</span>
            </button>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--muted)] transition hover:text-[var(--secondary)]"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--muted)] transition hover:text-[var(--secondary)]"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={socials.cv[language]}
              download
              className="flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[var(--primary)]/10 px-4 py-2 text-sm font-medium text-[var(--secondary)] transition hover:bg-[var(--primary)] hover:text-white"
            >
              <Download size={16} />
              CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            className="text-[var(--text)] lg:hidden"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] z-40 w-full overflow-hidden border-b border-[var(--border-color)] bg-[var(--background)]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="rounded-lg px-3 py-3 text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 flex items-center gap-4 border-t border-[var(--border-color)] px-3 pt-4">
                <button
                  onClick={toggleTheme}
                  aria-label="Changer de thème"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--muted)]"
                >
                  {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
                </button>

                <button
                  onClick={toggleLanguage}
                  className="rounded-full border border-[var(--border-color)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]"
                >
                  <span className={language === "fr" ? "text-[var(--secondary)]" : ""}>FR</span>
                  <span className="mx-1 text-[var(--border-color)]">|</span>
                  <span className={language === "en" ? "text-[var(--secondary)]" : ""}>EN</span>
                </button>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="text-[var(--muted)]"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="text-[var(--muted)]"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={socials.cv[language]}
                  download
                  onClick={closeMobile}
                  className="ml-auto flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white"
                >
                  <Download size={16} />
                  CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}