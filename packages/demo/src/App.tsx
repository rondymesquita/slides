import { useState } from 'react';
import {
  Presentation,
  PresentationProvider,
  Slides,
  extendTheme,
} from '@rondymesquita/slides';
import './App.css';
import * as slides from './index.md';

function App() {
  const chakraTheme = extendTheme({
    colors: {
      brand: {
        100: 'blue',
        900: '#1a202c',
      },
    },
  });

  return (
    <>
      <PresentationProvider
        // chakraTheme={chakraTheme}
        slides={slides}
        theme={'classic'}
      >
        <Presentation />
      </PresentationProvider>
    </>
  );
}

export default App;
