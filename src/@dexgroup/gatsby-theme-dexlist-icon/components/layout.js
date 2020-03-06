import React from 'react'
import { Box } from 'theme-ui'
import { Global, css } from '@emotion/core'
import Footer from '@dexgroup/gatsby-theme-dexlist-design/src/components/footer'

export default ({ children }) => (
  <Box id='icon'>
    <Global
      styles={css`
        @supports (font-variation-settings: normal) {
          html { font-family: 'Inter var', sans-serif }
        }
        html {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
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
          background-color: rgb(14, 19, 39)
        }
        body #icon {
          color: #fff;
          h2 {
            color: #fff
          }
          .logo :hover {
            background-color: #ffffff0d
          }
          .subscribe {
            color: #fff;
            &:focus {
              color: #fff
            }
            &:not(:placeholder-shown) ~ button {
              color: #fff
            }
          }
          footer {
            color: #c6d2ff;
            a {
              color: #fff;
              :hover {
                color: #888
              }
            }
          }
        }
      `}
    />
    {children}
    <Footer />
  </Box>
)
