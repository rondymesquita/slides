import { Box, Flex, styled } from '@chakra-ui/react';

import React from 'react';

export default function BaseLayout({ children }: any) {
  return <Flex>{children}</Flex>;
}
