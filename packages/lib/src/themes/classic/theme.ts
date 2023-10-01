import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  styles: {
    global: {
      body: {},
      '*': {
        boxSizing: 'border-box',
      },
      'html,body': {
        color: 'fg.700',
        background: 'bg.0',
        fontFamily: 'serif !important',
      },
      'h1,h2,h3,h4,h5,h6': {
        color: 'primary.600',
      },
    },
  },
  components: {},
  colors: {
    primary: theme.colors.purple,
  },
});
