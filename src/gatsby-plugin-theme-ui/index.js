import baseTheme from "@dexgroup/gatsby-theme-dexlist-design/src/gatsby-plugin-theme-ui/index"

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
  },
  sizes: {
    container: 1216, //1152 + 64
  },
  layout: {
    container: {
      maxWidth: 'container',
      mx: `auto`,
      px: 3,
      py: 4,
    }
  },
  images: {
    icon: {
      borderRadius: '22.5%',
      display: 'block',
      margin: '0 auto'
    }
  },
  styles: {
    ...baseTheme.styles,
    h3: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: '13px',
      lineHeight: '1.4',
      textAlign: 'center',
      color: '#c6d2ff',
      visibility: 'hidden',
      position: 'absolute',
      width: '100%',
      left: '0',
      m: 0,
      px: 2,
      pt: 2,
    },
    item: {
      p: 4,
      pb: 5,
      borderRadius: 16,
      height: '100%',
      position: 'relative',
      '&:hover': {
        backgroundColor: 'rgba(70, 79, 115, .4)',
        transition: 'all .4s ease-in',
        '& > h3': {
          visibility: 'visible',
          transition: 'all .4s ease-in',
        }
      }
    }
  }
}
