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
      'h1,h2,h3,h4,h5,h6': {
        color: 'primary.200',
        fontWeight: 900,
        fontSize: '20px',
      },
    },
  },
  components: {},
  colors: {
    primary: theme.colors.purple,
  },
});
