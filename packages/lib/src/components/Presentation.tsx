import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';

export interface PresentationProps {
  children: React.ReactElement
}
// eslint-disable-next-line no-redeclare
export default function Presentation({children}: PresentationProps) {

  return (
    <div className="presentation">
       <ChakraProvider>
          {children}
       </ChakraProvider>
    </div>
  )
}
