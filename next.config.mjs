/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "3mb",
    },
  },
  images: {
    domains: ["res.cloudinary.com", "localhost"],
  },
};

export default nextConfig;
