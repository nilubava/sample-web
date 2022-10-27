/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    /* config options here */
    trailingSlash: false,
    async rewrites() {
        return [
          {
            source: "/test-blog/:any*",
            destination: "https://gatsby-blog-ruby.vercel.app/:any*",
          },
        ]
      },
  }
  
  module.exports = nextConfig