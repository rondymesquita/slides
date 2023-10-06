import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import BaseLayout from '../../../layouts/BaseLayout';
import theme from '../theme';

export default function Cover({ children }: any) {
  return (
    <BaseLayout justifyContent={'center'} alignItems={'center'} sx={{}}>
      <Center
        textAlign={'center'}
        sx={{
          h1: {
            fontSize: theme.fontSizes['5xl'],
            fontWeight: '100',
          },
          h2: {
            fontSize: theme.fontSizes['2xl'],
            fontWeight: '100',
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
