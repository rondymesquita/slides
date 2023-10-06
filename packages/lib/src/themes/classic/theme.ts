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
        fontSize: 18,
      },
      h1: {
        fontSize: theme.fontSizes['2xl'],
      },
      h2: {
        fontSize: theme.fontSizes['2xl'],
      },
      h3: {
        fontSize: theme.fontSizes['xl'],
      },
      h4: {
        fontSize: theme.fontSizes['xl'],
      },
      h5: {
        fontSize: theme.fontSizes['xl'],
      },
      h6: {
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
