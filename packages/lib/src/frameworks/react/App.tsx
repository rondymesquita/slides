// import { Presentation, PresentationProvider, extendTheme } from '../';
import './App.css';
import { extendTheme } from '@chakra-ui/react';

import { Presentation, PresentationProvider } from '../..';

interface AppProps {
  slides: any;
  chakraTheme: Record<string, any>;
}

function App({ slides, chakraTheme }: AppProps) {
  return (
    <>
      <PresentationProvider
        chakraTheme={chakraTheme}
        slides={slides}
        theme={'classic'}
      >
        <Presentation />
      </PresentationProvider>
    </>
  );
}

export default App;
