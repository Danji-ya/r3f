/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.(obj|glb|gltf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][name][ext]',
      },
    });
    return config;
  },
};

module.exports = nextConfig;
