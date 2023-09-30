// import { defineConfig } from 'vite'

// // https://vitejs.dev/config/
// export default defineConfig({
  //   plugins: [react()],
  // })
  import path from 'path'
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'


// const md = markdownIt({ html: true, })
// md.use(markdownItAttrs)

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [
  //   react(),
  //   // mdPlugin({
  //   //   mode: [Mode.HTML,],
  //   //   markdownIt: md,
  //   // }),
  //   // dts({ insertTypesEntry: true, }),
  // ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'slides',
      formats: ['es', 'umd',],
      fileName: (format) => `slides.${format}.js`,
    },
    rollupOptions: {
      // plugins: [polyfillNode(),],
      external: ['react', 'react-dom', 'styled-components',],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
  server: { port: 5173, },
})
