import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  styles: {
    global: {
      body: {},
      '*': {
        boxSizing: 'border-box',
      },
      'html,body': {
        fontFamily: 'serif !important',
      },
      h1: {
        fontWeight: 900,
        fontSize: theme.fontSizes['6xl'],
      },
      h2: {
        fontWeight: 900,
        fontSize: theme.fontSizes['5xl'],
      },
      h3: {
        fontWeight: 900,
        fontSize: theme.fontSizes['4xl'],
      },
      h4: {
        fontWeight: 900,
        fontSize: theme.fontSizes['3xl'],
      },
      h5: {
        fontWeight: 900,
        fontSize: theme.fontSizes['2xl'],
      },
      h6: {
        fontWeight: 900,
        fontSize: theme.fontSizes['xl'],
      },
    },
  },
  components: {},
  colors: {
    primary: theme.colors.purple,
  },
});
