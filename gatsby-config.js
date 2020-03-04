module.exports = {
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
    'gatsby-plugin-netlify'
  ]
}
