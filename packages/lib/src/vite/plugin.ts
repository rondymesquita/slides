import react from '@vitejs/plugin-react';
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import yml from 'js-yaml';
import { log } from 'console';
import crypto from 'crypto';
// import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';
// import * as vite from 'vite';
// import { extractFrontMatter } from './markdown/parsers/parse-frontmatter';

// md.use(markdownItAttrs);
function myPlugin(md: markdownIt): void {
  // md.block.
  // md.renderer.rules.fence = function (tokens, idx, options, env, self) {
  // console.log({ options, env, idx });
  // };
  // md.core.ruler.push("example", exampleRule)
}

const fileRegex = /\.(md)$/;
const markdown = () => {
  const md = markdownIt({
    html: true,
    highlight: function (str, lang) {
      console.log({ lang });
      if (lang === 'yml:splendid') return false;
      return '';
    },
  });

  // md.use(myPlugin);

  return {
    name: 'splendid:markdown',
    enforce: 'pre',
    transform(src: string, id: string) {
      if (fileRegex.test(id)) {
        const markdowns = src.split('---');

        const pages = [];
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
              console.log({ token });

              const html = md.renderer.render(tokens, md.options, {});

              pages.push({
                attributes,
                html,
                id,
              });
              break loopTokens;
            }
          }

          // md.ena

          if (!isThereAttributesToParse) {
            const html = md.renderer.render(tokens, md.options, {});
            pages.push({
              attributes: {},
              html,
              id,
            });
          }
        }

        const contextCode = `const pages = ${JSON.stringify(pages)}`;
        const exportsCode = `export { pages }`;
        const code = [contextCode, exportsCode].join('\n');
        return {
          code,
          map: null,
        };
      }
    },
  };
};

export default function splendid() {
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
