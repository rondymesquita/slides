import React from 'react';
import ReactDOM from 'react-dom/client';
import { reactAdapter } from '@rondymesquita/splendid';
// import './App.css';

import * as slides from '../index.md';

// console.log(slides);

// const root = document.getElementById('root')!;
// const { render } = reactAdapter({
//   root,
//   slides,
// });

// render();

function createMarkup(htmlString: string) {
  return { __html: htmlString };
}

function Main({ slides }: any) {
  return (
    <div>
      {slides.pages.map((page) => {
        return (
          <div
            key={page.id}
            data-auto-animate
            dangerouslySetInnerHTML={createMarkup(page.html)}
          ></div>
        );
      })}
    </div>
  );
}

let root;
if (!root) {
  root = ReactDOM.createRoot(document.getElementById('root')!);
}
root.render(
  <>
    {/* <React.StrictMode> */}
    {/* <h1>Hello</h1> */}
    <Main slides={slides} />
    {/* </React.StrictMode> */}
  </>
);
