import React from 'react';
import ReactDOM from 'react-dom/client';
import { Presentation, PresentationProvider } from '@rondymesquita/splendid';
// import './App.css';

import * as slides from '../index.md';

// console.log(slides);

// const root = document.getElementById('root')!;
// const { render } = reactAdapter({
//   root,
//   slides,
// });

// render();

// function createMarkup(htmlString: string) {
//   return { __html: htmlString };
// }

// function Main({ slides }: any) {
//   return (
//     <div>
//       {slides.pages.map((page) => {
//         return (
//           <div
//             key={page.id}
//             data-auto-animate
//             dangerouslySetInnerHTML={createMarkup(page.html)}
//           ></div>
//         );
//       })}
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PresentationProvider slides={slides} theme={'classic'}>
    <Presentation />
  </PresentationProvider>
);
