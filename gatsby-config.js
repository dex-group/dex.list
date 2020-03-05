module.exports = {
  siteMetadata: {
    siteUrl: 'https://dexlist.page/',
    title: 'DEX List',
    description: 'The index page for creative workers.',
    author: '@dingyi',
    twitter: '@dexgroup',
    facebook: '@dexgroup',
    image: './src/images/share.jpg',
    organization: '@dexgroup',
    canonicalUrl: 'https://dexlist.page/',
    navLinks: [{
        to: "/",
        name: "resources",
        count: "536",
        icon: '/images/menu-resources.png'
      },
      {
        to: "/studios",
        name: "studios",
        count: "244",
        icon: '/images/menu-studios.png'
      },
      {
        to: "/designers",
        name: "designers",
        count: "30",
        icon: '/images/menu-designers.png'
      },
      {
        to: "/tools",
        name: "tools",
        count: "54",
        icon: '/images/menu-tools.png'
      },
      {
        to: "/ios",
        name: "iOS",
        count: "324",
        icon: '/images/menu-iOS.png'
      },
      {
        to: "/mac",
        name: "macOS",
        count: "39",
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-101495671-2',
        head: false
      },
    }, {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'EMHYBILA'
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`
  ]
}
