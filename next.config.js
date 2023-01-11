/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'blitz-more-practice-tailwind.imgix.net',
  },
}

module.exports = nextConfig
