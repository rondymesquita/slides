import { Center } from '@chakra-ui/react';
import React from 'react';

import theme from '../theme';
import BaseLayout from './BaseLayout';

export default function Cover({ children, }: any) {
  return (
    <BaseLayout justifyContent={'center'} alignItems={'center'}>
      <Center
        flexGrow={1}
        textAlign={'center'}
        sx={{
          h1: { fontSize: theme.fontSizes['4xl'], },
          h2: { fontSize: theme.fontSizes['2xl'], },
          'code,pre': { textAlign: 'left', },
        }}
      >
        {children}
      </Center>
    </BaseLayout>
  );
}
