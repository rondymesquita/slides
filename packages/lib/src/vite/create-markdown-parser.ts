import crypto from 'crypto'
import yml from 'js-yaml'

import { Page } from '../domain/model/Page';

export const createMarkdownParser = (md: markdownit) => {
  const parser = (sourceMarkdown: string): Page[] => {
    const markdowns = sourceMarkdown.split('---');
    const pages: Page[] = [];

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

    return pages;
  }

  return parser
}
