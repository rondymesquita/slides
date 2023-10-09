import MarkdownIt from 'markdown-it';

import { MarkdownAttributes } from '..';
import { createMarkdownParser } from './create-markdown-parser';
import { codeHighlightPrism } from './markdown/code-highlight-prism';

const fileRegex = /\.(md)$/;

const markdown = () => {

  const md = new MarkdownIt({ html: true, });
  md.use(codeHighlightPrism)

  return {
    name: 'splendid:markdown',
    enforce: 'pre',
    transform(src: string, id: string) {
      if (fileRegex.test(id)) {
        const parser = createMarkdownParser(md)
        const pages = parser(src)

        const attributes = pages[0].attributes as MarkdownAttributes

        const contextPages = `const pages = ${JSON.stringify(pages)};`;
        const contextAttributes = `const attributes = ${JSON.stringify(attributes)};`;
        const context = [contextPages, contextAttributes,].join('\n')

        const exportsCode = 'export { pages, attributes }';
        const code = [context, exportsCode,].join('\n');
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
