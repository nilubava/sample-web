/:any*:any* @type {import('next').NextConfig} :any*/;
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  assetPrefix: process.env.IS_PROD === 'true' ? 'https://website-v9.vercel.app' : '',
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "prismagraphql.com",
          },
        ],
        destination: "https://www.prisma.io/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "docs.graphqlcoin.com",
          },
        ],
        destination: "https://www.graphqlcoin.com/docs/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "docs.prisma.io",
          },
        ],
        destination: "https://www.prisma.io/docs/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "blog.prisma.io",
          },
        ],
        destination: "https://www.prisma.io/blog/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "jobs.prisma.io",
          },
        ],
        destination: "https://www.prisma.io/careers",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "careers.prisma.io",
          },
        ],
        destination: "https://www.prisma.io/careers",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "dataguide.prisma.io",
          },
        ],
        destination: "https://www.prisma.io/dataguide/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "photonjs.prisma.io",
          },
        ],
        destination: "https://github.com/prisma/prisma/releases/tag/2.0.0-preview020",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "lift.prisma.io",
          },
        ],
        destination: "https://github.com/prisma/prisma/releases/tag/2.0.0-preview020",
        permanent: true,
      },
      {
        permanent: true,
        source: "/blog/introduction-to-databases-jmt9jwidtc2a",
        destination: "https://www.prisma.io/dataguide/intro/what-are-databases",
      },
      {
        permanent: true,
        source: "/blog/comparison-of-database-models-1iz9u29nwn37",
        destination:
          "https://www.prisma.io/dataguide/intro/comparing-database-types",
      },
      {
        permanent: true,
        source: "/blog/comparing-sql-query-builders-and-orms-dkuixe3aa5a2/",
        destination:
          "https://www.prisma.io/dataguide/types/relational/comparing-sql-query-builders-and-orms",
      },
      {
        permanent: true,
        source: "/tutorials/postgres-why-choose-postgres-db08",
        destination:
          "https://www.prisma.io/dataguide/postgresql/benefits-of-postgresql",
      },
      {
        permanent: true,
        source: "/blog/ways-to-host-postgresql-w0xrhqqgp4zp/",
        destination:
          "https://www.prisma.io/dataguide/postgresql/5-ways-to-host-postgresql",
      },
      {
        permanent: true,
        source: "/tutorials/postgres-connecting-to-databases-db05",
        destination:
          "https://www.prisma.io/dataguide/postgresql/connecting-to-postgresql-databases",
      },
      {
        permanent: true,
        source: "/tutorials/postgres-configuring-user-authentication-db06",
        destination:
          "https://www.prisma.io/dataguide/postgresql/configuring-user-authentication",
      },
      {
        permanent: true,
        source: "/tutorials/postgres-create-databases-and-tables-db01",
        destination:
          "https://www.prisma.io/dataguide/postgresql/create-and-delete-databases-and-tables",
      },
      {
        permanent: true,
        source: "/tutorials/postgres-introduction-to-data-types-db02",
        destination:
          "https://www.prisma.io/dataguide/postgresql/introduction-to-data-types",
      },
      {
        permanent: true,
        source:
          "/tutorials/postgres-introduction-to-column-and-table-constraints-db03",
        destination:
          "https://www.prisma.io/dataguide/postgresql/column-and-table-constraints",
      },
      {
        permanent: true,
        source: "/blog/modern-backend-1-tsjs1ps7kip1",
        destination:
          "/blog/backend-prisma-typescript-orm-with-postgresql-data-modeling-tsjs1ps7kip1",
      },
      {
        permanent: true,
        source: "/blog/modern-backend-2-dcba1ps7kip3",
        destination:
          "/blog/backend-prisma-typescript-orm-with-postgresql-rest-api-validation-dcba1ps7kip3",
      },
      {
        permanent: true,
        source: "/forum/:any*",
        destination: "https://v1.prisma.io/forum/:any*",
      },
      {
        permanent: true,
        source: "/tutorials/:any*",
        destination: "https://v1.prisma.io/tutorials/:any*",
      },
      {
        permanent: true,
        source: "/docs/1.:any*",
        destination: "https://v1.prisma.io/docs/1.:any*",
      },
      {
        permanent: true,
        source: "/admin",
        destination: "https://github.com/prisma/studio",
      },
      {
        permanent: true,
        source: "/privacy",
        destination: "https://pris.ly/privacy",
      },
      {
        permanent: true,
        source: "/with-db-microservices",
        destination: "https://www.prisma.io",
      },
      {
        permanent: true,
        source: "/with-graphql",
        destination: "/docs/understand-prisma/prisma-in-your-stack/graphql",
      },
      {
        permanent: true,
        source: "/with-rest",
        destination: "/docs/understand-prisma/prisma-in-your-stack/rest",
      },
      {
        permanent: true,
        source: "/client/client-javascript",
        destination: "/docs/reference/tools-and-interfaces/prisma-client/api",
      },
      {
        permanent: true,
        source: "/client/client-typescript",
        destination: "/docs/reference/tools-and-interfaces/prisma-client/api",
      },
      {
        permanent: true,
        source: "/client/client-go",
        destination: "https://github.com/prisma/prisma-client-go",
      },
      {
        permanent: true,
        source: "/features/bindings",
        destination: "/docs/understand-prisma/prisma-in-your-stack/graphql",
      },
      {
        permanent: true,
        source: "/features/data-modeling",
        destination: "/docs/understand-prisma/data-modeling",
      },
      {
        permanent: true,
        source: "/features/databases",
        destination: "/docs/more/supported-databases",
      },
      {
        permanent: true,
        source: "/features/graphql-api",
        destination: "/docs/understand-prisma/prisma-in-your-stack/graphql",
      },
      {
        permanent: true,
        source: "/features/query-engine",
        destination: "/docs/understand-prisma/prisma-in-your-stack/graphql",
      },
      {
        permanent: true,
        source: "/blog/prisma-admin-beta-pai5lah43soe",
        destination: "https://github.com/prisma/studio",
      },
      {
        permanent: true,
        source: "/blog/mongodb-preview-ow4wahkekaep",
        destination: "https://github.com/prisma/prisma/issues/1277",
      },
      {
        permanent: true,
        source: "/blog/heroku-integration-homihof6eifi",
        destination:
          "https://www.prisma.io/docs/guides/deployment/deploying-to-heroku",
      },
      {
        permanent: true,
        source: "/blog/prisma-now-supports-postgres-aad74ba479cb",
        destination:
          "https://www.prisma.io/docs/reference/database-connectors/postgresql",
      },
      {
        permanent: true,
        source:
          "/blog/introducing-prisma-cloud-a-graphql-database-platform-ed591baa8737",
        destination: "https://www.prisma.io/cloud",
      },
      {
        permanent: true,
        source: "/blog/introducing-prisma-1ff423fd629e",
        destination:
          "https://www.prisma.io/blog/announcing-prisma-2-n0v98rzc8br1",
      },
      {
        permanent: true,
        source: "/dataguide/postgresql/configuring-user-authentication",
        destination:
          "/dataguide/postgresql/authentication-and-authorization/configuring-user-authentication",
      },
      {
        permanent: true,
        source:
          "/dataguide/database-tools/top-nodejs-orms-query-builders-and-database-libraries-in-2020",
        destination:
          "/dataguide/database-tools/top-nodejs-orms-query-builders-and-database-libraries",
      },
      {
        permanent: true,
        source: "/api/auth/:any*",
        destination: "/mongodb/api/auth/:any*",
      },
      {
        permanent: true,
        source: "/mongodblaunch/:any*",
        destination: "/mongodb-launch/:any*",
      },
      {
        source: "/dataplatform/:any*",
        destination: "/data-platform/:any*",
        permanent: true
      },
      {
        source: "/prisma-enterprise",
        destination: "/enterprise",
        permanent: true
      },
      {
        source: '/prisma-in-your-ecosystem',
        destination: "/stack",
        permanent: true
      },
      {
        source: '/prisma-in-your-stack',
        destination: "/stack",
        permanent: true
      },
      {
        source: '/jobs',
        destination: "/careers",
        permanent: true
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ga.js",
        destination: "https://www.google-analytics.com/analytics.js",
      },
      {
        source: "/gastats.js",
        destination: "https://www.google-analytics.com/analytics.js",
      },
      {
        source: "/cloud",
        destination: "https://prisma-homepage.netlify.app/cloud",
      },
      {
        source: "/day-2020/:any*",
        destination: "https://prisma-day-2020.netlify.app/:any*",
      },
      {
        source: "/serverless",
        destination: "https://auth-events.vercel.app/serverless",
      },
      {
        source: "/mongodb-launch/:any*",
        destination: "https://auth-events.vercel.app/:any*",
      },
      {
        source: "/autheventsassets/:any*",
        destination: "https://auth-events.vercel.app/:any*",
      },
      {
        source: "/test-blog/:any*",
        destination: "https://gatsby-blog-ruby.vercel.app/:any*",
      },     
      {
        source: "/docs/:any*",
        destination: "https://prisma2-docs.vercel.app/:any*",
      },
      {
        source: "/blog-assets/:any*",
        destination: "https://prisma-blog-ebon.vercel.app/blog-assets/:any*",
      },
      {
        source: "/blog/:any*",
        destination: "https://prisma-blog-ebon.vercel.app/:any*",
      },
      {
        source: "/dataguide/:any*",
        destination: "https://dataguide.vercel.app/:any*",
      },
      {
        source: "/v6-assets/:any*",
        destination: "https://new-prisma.netlify.app/:any*",
      },
      {
        source: "/v5/:any*",
        destination: "https://prisma-homepage.netlify.app/:any*",
      },
      {
        source: "/day/:any*",
        destination: "https://website-v8.vercel.app/day/:any*",
      },
      {
        source: "/about",
        destination: "https://website-v8.vercel.app/about",
      },
      {
        source: "/ambassador",
        destination: "https://website-v8.vercel.app/ambassador",
      },
      {
        source: "/apollo",
        destination: "https://website-v8.vercel.app/apollo",
      },
      {
        source: "/client",
        destination: "https://website-v8.vercel.app/client",
      },
      {
        source: "/cockroachdb",
        destination: "https://website-v8.vercel.app/cockroachdb",
      },
      {
        source: "/community",
        destination: "https://website-v8.vercel.app/community",
      },
      {
        source: "/day-2021",
        destination: "https://website-v8.vercel.app/day-2021",
      },
      {
        source: "/enterprise-event-2021",
        destination: "https://website-v8.vercel.app/enterprise-event-2021",
      },
      {
        source: "/events",
        destination: "https://website-v8.vercel.app/events",
      },
      {
        source: "/express",
        destination: "https://website-v8.vercel.app/express",
      },
      {
        source: "/fastify",
        destination: "https://website-v8.vercel.app/fastify",
      },
      {
        source: "/graphql",
        destination: "https://website-v8.vercel.app/graphql",
      },
      {
        source: "/hapi",
        destination: "https://website-v8.vercel.app/hapi",
      },
      {
        source: "/jobs",
        destination: "https://website-v8.vercel.app/jobs",
      },
      {
        source: "/migrate",
        destination: "https://website-v8.vercel.app/migrate",
      },
      {
        source: "/mongodb",
        destination: "https://website-v8.vercel.app/mongodb",
      },
      {
        source: "/nestjs",
        destination: "https://website-v8.vercel.app/nestjs",
      },
      {
        source: "/newsletter",
        destination: "https://website-v8.vercel.app/newsletter",
      },
      {
        source: "/nextjs",
        destination: "https://website-v8.vercel.app/nextjs",
      },
      {
        source: "/planetscale",
        destination: "https://website-v8.vercel.app/planetscale",
      },
      
      {
        source: "/react-server-components",
        destination: "https://website-v8.vercel.app/react-server-components",
      },
      {
        source: "/scholarship",
        destination: "https://website-v8.vercel.app/scholarship",
      },
      {
        source: "/showcase",
        destination: "https://website-v8.vercel.app/showcase",
      },
      {
        source: "/sitemap",
        destination: "https://website-v8.vercel.app/sitemap",
      },
      {
        source: "/sitemap-site.xml",
        destination: "https://website-v8.vercel.app/sitemap-site.xml",
      },
      {
        source: "/sitemap.xml",
        destination: "https://website-v8.vercel.app/sitemap.xml",
      },
      {
        source: "/studio",
        destination: "https://website-v8.vercel.app/studio",
      },
      {
        source: "/thank-you",
        destination: "https://website-v8.vercel.app/thank-you",
      },
      {
        source: "/typescript",
        destination: "https://website-v8.vercel.app/typescript",
      },
      {
        source: '/enterprise',
        destination: "https://website-v8.vercel.app/enterprise",
      },
      {
        source: '/careers',
        destination: "https://website-v8.vercel.app/careers",
      },
      // keep all the rewrites before this line
      {
        source: "/:any*",
        destination: "https://website-v8.vercel.app/404",
      },
    ];
  },
};

module.exports = nextConfig;