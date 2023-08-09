/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'www.themealdb.com',
      },
    ],
  },
}

module.exports = nextConfig
