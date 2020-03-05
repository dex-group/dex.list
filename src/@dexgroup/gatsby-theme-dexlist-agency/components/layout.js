import React from 'react'
import { Box } from 'theme-ui'
import { Global, css } from '@emotion/core'
import SEO from '@dexgroup/gatsby-theme-dexlist-design/src/components/seo'
import Footer from '@dexgroup/gatsby-theme-dexlist-design/src/components/footer'

export default ({ children }) => (
  <Box id='agency'>
    <SEO title="Studios" />
    <Global
      styles={css`
        @import url('https://rsms.me/inter/inter.css');
        @import url('https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap');
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
          margin: 0;
        }
        body #agency {
          h3 {
            font-size: 18px;
            font-weight: 700;
            color: #350909;
            visibility: visible;
            position: inherit
          }
        }
      `}
    />
    {children}
    <Footer />
  </Box>
)