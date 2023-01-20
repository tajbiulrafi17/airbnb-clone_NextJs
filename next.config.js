/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoidGFqYml1bHJhZmkxNyIsImEiOiJjbGQ0cjVrbDMwZmNnM3BrYmZnbjN0czY2In0.kabBM1j634TjLBXiyknfAQ",
  },
};

module.exports = nextConfig;
