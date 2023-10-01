import { Box, Flex, styled } from '@chakra-ui/react';

import React from 'react';

export default function BaseLayout({ children }: any) {
  return (
    <Flex aspectRatio={'4/3'} width='100%' border={'1px solid blue'}>
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
