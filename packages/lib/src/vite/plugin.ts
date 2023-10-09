// eslint-disable-next-line
import Prism from 'prismjs';
// import 'prismjs/plugins/line-numbers/prism-line-numbers';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
// import 'prismjs/components/prism-typescript';
import MarkdownIt from 'markdown-it';

import { createMarkdownParser } from './create-markdown-parser';
import { codeHighlightPrism } from './markdown/code-highlight-prism';

const fileRegex = /\.(md)$/;


const markdown = () => {

  // vite.loadConfigFromFile({
  //   command: 'serve',
  //   mode: 'development',
  // }, path.join(process.cwd(), 'vite.config.ts'))

  const md = new MarkdownIt({
    html: true,
    // highlight(str, lang, attrs) {
    //   // Prism.manual = true;
    //   if (lang === 'yml:splendid') return str
    //   console.log({
    //     str,
    //     lang,
    //   })
    //   // console.log(Prism)

    //   const html = Prism.highlight(str, Prism.languages[lang], lang);
    //   console.log({ html, })
    //   // return html
    //   return str
    // },
  });
  md.use(codeHighlightPrism)


  return {
    name: 'splendid:markdown',
    enforce: 'pre',
    transform(src: string, id: string) {
      if (fileRegex.test(id)) {
        const parser = createMarkdownParser(md)
        const pages = parser(src)
        console.log(pages[0]);


        const contextCode = `const pages = ${JSON.stringify(pages)}`;
        const exportsCode = 'export { pages }';
        const code = [contextCode, exportsCode,].join('\n');
        return {
          code,
          map: null,
        };
      }
    },
  };
};

export const splendid = () => {
  return [
    markdown(),
    // react({ include: /\.(js|jsx|ts|tsx|md)$/ }),
    // react(),
    // mdPlugin({
    //   mode: [Mode.HTML],
    //   markdownIt: md,
    // }),
  ];
}
