import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import BaseLayout from '../../layouts/BaseLayout';

export default function Cover({ children }: any) {
  return <Flex justifyContent={'center'}>{children}</Flex>;
}
