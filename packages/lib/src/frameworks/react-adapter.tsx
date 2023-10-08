import React from 'react';
import ReactDOM from 'react-dom/client';

import { Splendid, SplendidProvider } from '..';

interface ReactAdapterOptions {
  root: HTMLElement;
  slides: any;
  chakraTheme?: Record<string, any>;
}

export const reactAdapter = ({
  chakraTheme,
  root,
  slides,
}: ReactAdapterOptions) => {
  const render = () => {
    ReactDOM.createRoot(root).render(
      // <React.StrictMode>
      <SplendidProvider
        chakraTheme={chakraTheme}
        slides={slides}
        theme={'classic'}
      >
        <Splendid />
      </SplendidProvider>
      // </React.StrictMode>
    );
  };

  return { render, };
};
