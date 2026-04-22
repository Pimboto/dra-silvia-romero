/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // 👈 genera sitio estático
  images: {
    unoptimized: true,        // 👈 necesario para export
  },
  trailingSlash: true,        // 👈 recomendado para Cloudflare
};

module.exports = nextConfig;