import React from 'react';
import ReactDOM from 'react-dom/client';
import { Presentation, PresentationProvider } from '..';

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
