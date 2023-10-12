import './style.css';

import { extendTheme, theme } from '@chakra-ui/react';


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
      'html,body': {
        fontFamily: 'LibreBaskerville',
        backgroundColor: theme.colors.black,
      },
    },
  },
  components: {},
  colors: { primary: theme.colors.purple, },
}) as typeof theme;
