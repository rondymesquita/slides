import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import BaseLayout from '../../../layouts/BaseLayout';
import theme from '../theme';

export default function Cover({ children }: any) {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      height={'552px'}
      sx={{}}
    >
      <Center
        textAlign={'center'}
        sx={{
          h1: {
            fontSize: theme.fontSizes['7xl'],
            color: 'red',
          },
          h2: {
            fontSize: theme.fontSizes['3xl'],
          },
          'code,pre': {
            textAlign: 'left',
          },
        }}
      >
        {children}
      </Center>
    </Flex>
  );
}
