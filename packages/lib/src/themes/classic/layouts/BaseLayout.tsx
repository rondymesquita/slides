import { Box, Flex, styled } from '@chakra-ui/react';
import theme from '../theme';
import React from 'react';

export default function BaseLayout({ children, ...props }: any) {
  return (
    <Flex
      background={'white'}
      flexGrow={1}
      className='layout'
      sx={{
        ...props.sx,
        h1: {
          fontSize: theme.fontSizes['2xl'],
        },
        h2: {
          fontSize: theme.fontSizes['2xl'],
        },
        h3: {
          fontSize: theme.fontSizes['xl'],
        },
        h4: {
          fontSize: theme.fontSizes['xl'],
        },
        h5: {
          fontSize: theme.fontSizes['xl'],
        },
        h6: {
          fontSize: theme.fontSizes['xl'],
        },
        'ul,li': {
          boxSizing: 'border-box',
          fontSize: theme.fontSizes.lg,
        },
        blockquote: {
          fontSize: theme.fontSizes.md,
          color: theme.colors.gray[500],
        },
        a: {
          // color: theme.colors.gray[500],
          textDecoration: 'underline dotted',
        },
      }}
    >
      {children}
    </Flex>
  );
}
