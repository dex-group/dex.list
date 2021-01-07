import React from 'react'
import { Box } from 'theme-ui'
import { Global, css } from '@emotion/react'
import SEO from '@dexgroup/gatsby-theme-dexlist-design/src/components/seo'
import Footer from '@dexgroup/gatsby-theme-dexlist-design/src/components/footer'

export default ({ children }) => (
  <Box id='tools'>
    <SEO title="Tools" />
    <Global
      styles={css`
        @supports (font-variation-settings: normal) {
          html { font-family: 'Inter var', sans-serif }
        }
        html {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%
        }
        html, body {
          height: 100%
        }
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale
        }
        a {
          text-decoration: none;
          position: relative;
          display: inline-block;
          transition: all .2s ease 0s
        }
        a:active, a:hover {
          outline-width: 0
        }
        body {
          margin: 0
        }
      `}
    />
    {children}
    <Footer />
  </Box>
)
