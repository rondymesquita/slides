import MarkdownIt from 'markdown-it'
// eslint-disable-next-line
import Prism from 'prismjs';

export const codeHighlightPrism = (md: markdownit) => {
  md.renderer.rules.fence = (tokens: any[], idx: number, options: MarkdownIt.Options, env: any, self: any) => {

    const token = tokens[idx]
    let html: string =  '';
    const res = []
    if (token.type === 'fence' && token.info !== 'yml:splendid'){
      // console.log('called', env, token)
      html = Prism.highlight(token.content, Prism.languages[token.info], token.info);
      res.push(
        '<pre class="line-numbers splendid-pre">',
        `<code class="splendid-code splendid-code-prism language-${token.info}">`,
        html,
        '</code>',
        '</pre>'
      )
      return res.join('')
    }

    return ''
  }
}
