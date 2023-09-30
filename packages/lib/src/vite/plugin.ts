// import react from '@vitejs/plugin-react'
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import { UserConfig } from 'vite'
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown'

export const defineConfig = (config: UserConfig, env: { mode: string, command: string }) => {
  const md = markdownIt({ html: true, })
  md.use(markdownItAttrs)

  console.log('installed', { config, });
  config.plugins = [
    // react(),
    ...config.plugins,
    mdPlugin({
      mode: [Mode.HTML,],
      markdownIt: md,
    }),
  ]
  console.log(config.plugins);
  return config

}

export const slidePlugin2 = () => {

  const md = markdownIt({ html: true, })
  md.use(markdownItAttrs)

  return {
    name: 'slidePlugin',
    config: (config: UserConfig, env: { mode: string, command: string }) => {

      console.log('installed', { config, });
      config.plugins = [
        // react(),
        ...config.plugins,
        mdPlugin({
          mode: [Mode.HTML,],
          markdownIt: md,
        }),
      ]
      console.log(config.plugins);
      return config
    },
  }
}
export const slidePlugin = () => {

  const md = markdownIt({ html: true, })
  md.use(markdownItAttrs)

  console.log('installed');

  return [
    mdPlugin({
      mode: [Mode.HTML,],
      markdownIt: md,
    })
  ]
}
