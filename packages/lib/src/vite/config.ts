import MarkdownIt from 'markdown-it';
import { UserConfig, mergeConfig } from 'vite';
import markdownItAttrs from 'markdown-it-attrs';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';

export interface CustomUserConfig extends UserConfig {
  splendid: {
    fulano: string;
  };
}

export const getConfig = (): UserConfig => {
  const md = MarkdownIt({ html: true });
  md.use(markdownItAttrs);

  return {
    plugins: [
      mdPlugin({
        mode: [Mode.HTML],
        markdownIt: md,
      }),
    ],
  };
};

export const defineConfig = (config: CustomUserConfig): UserConfig => {
  const plugins = getConfig().plugins;
  config.plugins?.unshift(plugins);
  return config;
  // return mergeConfig(getConfig(), config);
};
