/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    /* config options here */
    trailingSlash: false,
    async rewrites() {
        return [
          {
            source: "/test-blog",
            destination: "https://gatsbystarterblogsource.gatsbyjs.io",
          },
        ]
      },
  }
  
  module.exports = nextConfig