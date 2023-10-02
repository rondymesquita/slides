import { Box, Flex, styled } from '@chakra-ui/react';

import React from 'react';

export default function BaseLayout({ children }: any) {
  return (
    <Flex
      aspectRatio={'4/3'}
      // max-width='100%'
      // max-height={'100%'}
      max-height={'700px'}
      border='2px solid white'
    >
      {children}
    </Flex>
  );
}

// export default styled(Flex, {
//   baseStyle: {
//     textAlign: 'center',
//     // color: 'red !important',
//     border: '1px solid red',
//     height: '100vh',
//   },
// });
