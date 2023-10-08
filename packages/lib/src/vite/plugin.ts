import crypto from 'crypto';
import yml from 'js-yaml';
import MarkdownIt from 'markdown-it';

import { Page } from '../domain/model/Page';


const fileRegex = /\.(md)$/;

const createMarkdownParser = (md: MarkdownIt) => {
  const parser = (sourceMarkdown: string): Page[] => {
    const markdowns = sourceMarkdown.split('---');
    const pages: Page[] = [];

    console.log({ markdowns, }, markdowns.length);

    for (let index = 0; index < markdowns.length; index++) {
      const markdown = markdowns[index];
      const tokens = md.parse(markdown, {});

      const id = crypto.randomBytes(16).toString('hex');

      let isThereAttributesToParse = false;

      loopTokens: for (let index = 0; index < tokens.length; index++) {
        const token = tokens[index];

        if (token.type === 'fence' && token.info === 'yml:splendid') {
          const attributes = yml.load(token.content);
          isThereAttributesToParse = true;

          tokens[index].hidden = true;
          tokens[index].content = '';

          const html = md.renderer.render(tokens, md.options, {});

          pages.push(new Page({
            attributes,
            html,
            id,
          }));
          break loopTokens;
        }
      }

      if (!isThereAttributesToParse) {
        const html = md.renderer.render(tokens, md.options, {});
        pages.push(new Page({
          attributes: { },
          html,
          id,
        }));
      }
    }

    console.log({ pages, });

    return pages;
  }

  return parser
}

const markdown = () => {

  const md = new MarkdownIt({ html: true, });


  return {
    name: 'splendid:markdown',
    enforce: 'pre',
    transform(src: string, id: string) {
      if (fileRegex.test(id)) {
        const parser = createMarkdownParser(md)
        const pages = parser(src)

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
