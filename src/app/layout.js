import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://portfolio-cyber-gamma.vercel.app/"), // ⚠️ remplace par ton vrai domaine une fois déployé
  title: {
    default: "Jean Daniel Sylva Ossibouyen | Ingénieur Cybersécurité SOC · SIEM · IA",
    template: "%s | Jean Daniel Sylva Ossibouyen",
  },
  description:
    "Ingénieur en cybersécurité spécialisé en SOC, SIEM (Wazuh), Threat Detection et IA appliquée à la sécurité défensive. Disponible pour des opportunités en Afrique Centrale et de l'Ouest.",
  keywords: [
    "cybersécurité",
    "SOC analyst",
    "SIEM",
    "Wazuh",
    "détection des menaces",
    "threat intelligence",
    "ingénieur sécurité informatique",
    "Afrique",
    "Tunisie",
    "Centrafrique",
  ],
  authors: [{ name: "Jean Daniel Sylva Ossibouyen" }],
  creator: "Jean Daniel Sylva Ossibouyen",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tondomaine.com",
    title: "Jean Daniel Sylva Ossibouyen | Ingénieur Cybersécurité",
    description:
      "SOC · SIEM · IA appliquée à la cybersécurité défensive. Portfolio et projets de détection des menaces.",
    siteName: "Portfolio - Jean Daniel Sylva Ossibouyen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jean Daniel Sylva Ossibouyen - Ingénieur Cybersécurité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Daniel Sylva Ossibouyen | Ingénieur Cybersécurité",
    description: "SOC · SIEM · IA appliquée à la cybersécurité défensive.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}