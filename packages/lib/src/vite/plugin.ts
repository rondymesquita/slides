// import react from '@vitejs/plugin-react'
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';

const md = markdownIt({ html: true });
md.use(markdownItAttrs);

export const splendid = () => {
  return [
    mdPlugin({
      mode: [Mode.HTML],
      markdownIt: md,
    }),
  ];
};
