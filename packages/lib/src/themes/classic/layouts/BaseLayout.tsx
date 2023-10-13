import { Flex } from '@chakra-ui/react';
import React from 'react';

import theme from '../theme';

export default function BaseLayout({
  children,
  ...props
}: any) {
  return (
    <Flex
      background={'white'}
      flexGrow={1}
      className='layout'
      __css={{
        ...props.sx,
        h1: { fontSize: theme.fontSizes['2xl'], },
        h2: { fontSize: theme.fontSizes['2xl'], },
        h3: { fontSize: theme.fontSizes['xl'], },
        h4: { fontSize: theme.fontSizes['xl'], },
        h5: { fontSize: theme.fontSizes['xl'], },
        h6: { fontSize: theme.fontSizes['xl'], },
      }}
    >
      {children}
    </Flex>
  );
}
