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
        height={'100%'}
        sx={{
          h1: { fontSize: theme.fontSizes['4xl'], },
          'code,pre': { textAlign: 'left', },
        }}
      >
        {children}
      </Center>
    </BaseLayout>
  );
}
