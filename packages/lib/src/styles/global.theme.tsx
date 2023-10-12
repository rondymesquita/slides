import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  styles: {
    global: {
      body: {},
      '*': { boxSizing: 'border-box', },
      'html,body': {
        overflow: 'hidden',
        userSelect: 'none',
      },
      '.border': { border: '1px solid red', },
    },
  },
});
