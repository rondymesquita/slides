import { Splendid, SplendidProvider } from '@rondymesquita/splendid';
import React from 'react';
import ReactDOM from 'react-dom/client';

import * as markdown from '../index.md';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <SplendidProvider markdown={markdown} theme={'classic'}>
    <Splendid />
  </SplendidProvider>
);
