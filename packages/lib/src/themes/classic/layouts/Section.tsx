import React from 'react';
import BaseLayout from '../../../layouts/BaseLayout';

export default function Section({ children }: any) {
  return (
    <BaseLayout
      p={8}
      sx={{
        ul: {
          paddingLeft: '8',
        },
      }}
    >
      {children}
    </BaseLayout>
  );
}
