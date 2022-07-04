/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.codepen.io"],
  },
};

const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM(nextConfig);
