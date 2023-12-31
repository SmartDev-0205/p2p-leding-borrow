/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir:"dist",
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    return config
  },
  images: {
    unoptimized: true
}
}

module.exports = nextConfig
