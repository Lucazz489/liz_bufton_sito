import type { NextConfig } from "next";

// Export statico: `npm run build` genera la cartella `out/`
// pronta per Cloudflare Pages / Netlify.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
