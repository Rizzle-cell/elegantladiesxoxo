/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Use static /public assets; configure remoteDomains if you use external image hosts
    domains: []
  }
}
module.exports = nextConfig
