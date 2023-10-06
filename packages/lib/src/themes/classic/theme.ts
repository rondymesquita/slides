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
        fontSize: theme.fontSizes.xl,
      },
    },
  },
  components: {},
  colors: {
    primary: theme.colors.purple,
  },
}) as typeof theme;
