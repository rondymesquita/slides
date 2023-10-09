// eslint-disable-next-line
import Prism from 'prismjs';
// import 'prismjs/themes/prism-dark.css';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import { merge } from '../../util/merge-object';


Prism.manual = true

export interface LoadPrimsOptions {
  theme: string
}

export const loadPrism = async(options?: LoadPrimsOptions) => {

  const { theme, } = merge(options, { theme: 'prism-dark', });

  import('./themes/prism-coy.css')
  import('prismjs/plugins/line-numbers/prism-line-numbers')
  import('prismjs/plugins/line-numbers/prism-line-numbers.css')

  const codeBlocks: NodeListOf<Element> = document.querySelectorAll('.splendid-code-prism')
  for (let index = 0; index < codeBlocks.length; index++) {
    const element = codeBlocks[index];
    Prism.highlightElement(element);
  }
}
