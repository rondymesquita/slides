import React from 'react';
import BaseLayout from './BaseLayout';

export default function Section({ children }: any) {
  return (
    <BaseLayout
      sx={{
        padding: 8,
        ul: {
          padding: 8,
        },
        'h1,h2,h3,h4,h5,h6': {
          marginBottom: '4',
        },
      }}
    >
      {children}
    </BaseLayout>
  );
}
