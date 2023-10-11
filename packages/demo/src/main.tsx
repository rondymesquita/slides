
import { SetupProvider, Splendid, SplendidProvider } from '@rondymesquita/splendid';
import React from 'react';
import ReactDOM from 'react-dom/client';

import * as markdown from '../index.md';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <div id='slides-hydration'>
    <SetupProvider markdown={markdown}>
      <SplendidProvider>
        <Splendid/>
      </SplendidProvider>
    </SetupProvider>
  </div>
);


// setTimeout(() => {
//   hydrateRoot(document.getElementById('slides-hydration')!,
//     <SplendidProvider markdown={markdown} theme={'classic'}>
//       <Splendid/>
//     </SplendidProvider>)
// }, 5000)
