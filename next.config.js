/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // For custom domain kaiacha.com
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig

