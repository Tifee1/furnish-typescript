/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'www.course-api.com', 'course-api.com'],
  },
}

module.exports = nextConfig
