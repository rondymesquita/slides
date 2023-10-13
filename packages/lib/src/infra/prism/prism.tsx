// eslint-disable-next-line
import Prism from 'prismjs';

import { merge } from '../../util/merge-object';


Prism.manual = true

export interface LoadPrimsOptions {
  theme: string
}

export const loadPrism = async(options?: LoadPrimsOptions) => {

  const { theme, } = merge(options, { theme: 'prism-dark', });

  await import('./themes/prism-coy.css')
  await import('prismjs/plugins/line-numbers/prism-line-numbers')
  await import('prismjs/plugins/line-numbers/prism-line-numbers.css')

  const codeBlocks: NodeListOf<Element> = document.querySelectorAll('.splendid-code-prism')
  for (let index = 0; index < codeBlocks.length; index++) {
    const element = codeBlocks[index];
    Prism.highlightElement(element);
  }
}
