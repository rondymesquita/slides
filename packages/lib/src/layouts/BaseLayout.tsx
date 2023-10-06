import { Box, Flex, styled } from '@chakra-ui/react';

import React from 'react';

export default function BaseLayout({ children, ...props }: any) {
  return (
    <Flex background={'white'} flexGrow={1} className='layout' {...props}>
      {children}
    </Flex>
  );
}
