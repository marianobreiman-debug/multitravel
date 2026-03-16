import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Lorien Design System — sitio de documentación interna Multitravel
  // Excluir archivos de Figma Code Connect del build de Next.js
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.figma\.tsx?$/,
      loader: 'ignore-loader',
    });
    return config;
  },
};

export default nextConfig;
