import { extendTheme, theme } from '@chakra-ui/react';
import Fonts from './Global';
import './style.css';

export default extendTheme({
  fonts: {
    heading: `'LibreBaskerville', sans-serif`,
    body: `'LibreBaskerville', sans-serif`,
  },
  styles: {
    global: {
      FontFace: {},
      body: {},
      '*': {
        boxSizing: 'border-box',
      },
      'html,body': {
        fontFamily: 'LibreBaskerville',
        backgroundColor: theme.colors.black,
      },
      h1: {
        // color: 'red',
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
      '.slide': {},
    },
  },
  components: {},
  colors: {
    primary: theme.colors.purple,
  },
}) as typeof theme;
