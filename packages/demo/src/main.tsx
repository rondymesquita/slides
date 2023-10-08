import { Splendid, SplendidProvider } from '@rondymesquita/splendid';
import React from 'react';
import ReactDOM from 'react-dom/client';

import * as slides from '../index.md';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <SplendidProvider slides={slides} theme={'classic'}>
    <Splendid />
  </SplendidProvider>
);
