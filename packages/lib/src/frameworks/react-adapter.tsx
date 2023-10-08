import React from 'react';
import ReactDOM from 'react-dom/client';
import { Presentation, PresentationProvider } from '..';
import { log } from 'console';
// import * as slides from './index.md';

interface ReactAdapterOptions {
  root: HTMLElement;
  slides: any;
  chakraTheme?: Record<string, any>;
}

export const reactAdapter = ({
  root,
  slides,
  chakraTheme,
}: ReactAdapterOptions) => {
  const render = () => {
    log({ slides });

    ReactDOM.createRoot(root).render(
      // <React.StrictMode>
      <PresentationProvider
        chakraTheme={chakraTheme}
        slides={slides}
        theme={'classic'}
      >
        <Presentation />
      </PresentationProvider>
      // </React.StrictMode>
    );
  };

  return {
    render,
  };
};
