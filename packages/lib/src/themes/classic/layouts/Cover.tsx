import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import BaseLayout from './BaseLayout';
import theme from '../theme';

export default function Cover({ children }: any) {
  return (
    <BaseLayout justifyContent={'center'} alignItems={'center'}>
      <Center
        flexGrow={1}
        textAlign={'center'}
        sx={{
          h1: {
            fontSize: theme.fontSizes['5xl'],
          },
          h2: {
            fontSize: theme.fontSizes['2xl'],
          },
          'code,pre': {
            textAlign: 'left',
          },
        }}
      >
        {children}
      </Center>
    </BaseLayout>
  );
}
