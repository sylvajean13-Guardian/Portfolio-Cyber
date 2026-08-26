"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  fr: {title: "Quelques moments",
    activities: [
      {src: "/images/activities/profile-hero.jpeg", caption: "TechEscape 2026 Hackathon « SMART FUTURE Powered by Generative AI », Hammamet, avril 2026",},
      {src: "/images/activities/presentation en entreprise.jpeg",caption: "Challenge PFE SFM Technologies, Tunis, avril 2026",},
      {src: "/images/activities/bootcamp tech4peace.jpeg", caption: "Cérémonie de clôture du Bootcamp Tech4Peace, Thiès, Sénégal, juin 2026",},
      {src: "/images/activities/soutenance.jpeg", caption: "Soutenance du Master professionnel en cybersécurité, Tunis, juillet 2026",},
      {src: "/images/activities/remise de diplome.jpeg", caption: "Remise de diplôme du Master professionnel en cybersécurité, Tunis, juillet 2026",},
    ],
  },

  en: {title: "A Few Moments",
    activities: [
      {src: "/images/activities/profile-hero.jpeg",caption: "TechEscape 2026  « SMART FUTURE Powered by Generative AI » Hackathon, Hammamet, April 2026",},
      {src: "/images/activities/presentation en entreprise.jpeg", caption:"Final-Year Project Challenge, SFM Technologies, Tunis, April 2026",},
      {src: "/images/activities/bootcamp tech4peace.jpeg",caption: "Tech4Peace Bootcamp Closing Ceremony, Thiès, Senegal, June 2026",},
      {src: "/images/activities/soutenance.jpeg", caption: "Cybersecurity Professional Master's Thesis Defense, Tunis, July 2026",},
      { src: "/images/activities/remise de diplome.jpeg", caption: "Cybersecurity Professional Master's Degree Graduation Ceremony, Tunis, July 2026",},
    ],
  },
};

export default function ActivitiesGallery() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="border-t border-[var(--border-color)] bg-[var(--surface)] px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <h2 className="mt-4 text-3xl font-bold text-[var(--text)] sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.activities.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border-color)] bg-black shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay sombre pour améliorer la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

              {/* Légende */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p
                  className="
                    text-sm
                    font-bold
                    leading-relaxed
                    text-white
                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]
                    sm:text-base
                  "
                >
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}