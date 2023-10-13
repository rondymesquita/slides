import './style.css';

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme()

export default extendTheme({
  fonts: {
    heading: 'LibreBaskerville, sans-serif',
    body: 'LibreBaskerville, sans-serif',
  },
  styles: {
    global: {
      FontFace: {},
      body: {},
      '*': { boxSizing: 'border-box', },
      'html,body': { fontFamily: 'LibreBaskerville', },
      '.splendid': { backgroundColor: theme.colors.linkedin, },
      '.slides': { backgroundColor: theme.colors.white, },
      'ul,li': {
        boxSizing: 'border-box',
        fontSize: theme.fontSizes.lg,
      },
      blockquote: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.gray[500],
      },
      a: { textDecoration: 'underline dotted', },
    },
  },
}) as typeof theme;
