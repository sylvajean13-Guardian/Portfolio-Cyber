export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://portfolio-cyber-gamma.vercel.app/sitemap.xml",
  };
}