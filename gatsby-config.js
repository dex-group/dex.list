module.exports = {
  flags : { DEV_SSR: true },
  siteMetadata: {
    siteUrl: 'https://dexlist.page/',
    title: 'DEX List - The index page for creative workers.',
    description: 'The all-in-one List for designers, agencies, freelancers and creative workers.',
    author: '@dingyi',
    twitter: '@dingyi',
    facebook: '@dexgroup',
    image: '/images/share.png',
    organization: '@dexgroup',
    canonicalUrl: 'https://dexlist.page/',
    navLinks: [{
        to: "/",
        name: "resources",
        count: "554",
        icon: '/images/menu-resources.png'
      },
      {
        to: "/studios",
        name: "studios",
        count: "363",
        icon: '/images/menu-studios.png'
      },
      {
        to: "/designers",
        name: "designers",
        count: "184",
        icon: '/images/menu-designers.png'
      },
      {
        to: "/tools",
        name: "tools",
        count: "81",
        icon: '/images/menu-tools.png'
      },
      {
        to: "/ios",
        name: "iOS",
        count: "376",
        icon: '/images/menu-iOS.png'
      },
      {
        to: "/mac",
        name: "macOS",
        count: "181",
        icon: '/images/menu-macOS.png'
      }
    ],
  },
  plugins: [
    {
      resolve: `@dexgroup/gatsby-theme-dexlist-agency`,
      options: {
        contentPath: 'data/agency',
      }
    },
    {
      resolve: `@dexgroup/gatsby-theme-dexlist-tools`,
      options: {
        contentPath: 'data/tools',
        basePath: '/tools'
      }
    },
    {
      resolve: `@dexgroup/gatsby-theme-dexlist-icon`,
      options: {
        contentPath: 'data/icon',
      }
    },
    {
      resolve: `@dexgroup/gatsby-theme-dexlist-design`,
      options: {
        contentPath: 'data/design',
        basePath: '/'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dexlist.page/',
        sitemap: 'https://dexlist.page/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/'
        }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'DEX List - The index page for creative workers.',
        short_name: 'DEX List',
        description: 'The index page for creative workers.',
        start_url: '/',
        background_color: '#fdf3f6',
        theme_color: '#F7417A',
        display: 'standalone',
        icon: './src/images/favicon.png',
        crossOrigin: 'use-credentials'
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://dexlist.page/`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ],
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `dexlist.page`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeLinkHeaders: false,
        mergeCachingHeaders: false
      },
    },
  ]
}
