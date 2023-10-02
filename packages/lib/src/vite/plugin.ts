// import react from '@vitejs/plugin-react'
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import { ResolvedConfig, UserConfig } from 'vite';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';

export const slidePlugin = () => {
  const md = markdownIt({ html: true });
  md.use(markdownItAttrs);

  return {
    name: 'slidePlugin',
    configResolved: (config: UserConfig): UserConfig => {
      config.plugins.unshift(
        mdPlugin({
          mode: [Mode.HTML],
          markdownIt: md,
        })
      );
      return config;
    },
  };
};
export const slidePlugin2 = () => {
  const md = markdownIt({ html: true });
  md.use(markdownItAttrs);

  return [
    mdPlugin({
      mode: [Mode.HTML],
      markdownIt: md,
    }),
  ];
};
