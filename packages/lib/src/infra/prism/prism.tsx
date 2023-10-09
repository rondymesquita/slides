// eslint-disable-next-line
import Prism from 'prismjs';
// import 'prismjs/themes/prism-dark.css';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';


Prism.manual = true

export const loadPrism = () => {
  import('prismjs/themes/prism-dark.css')
  import('prismjs/plugins/line-numbers/prism-line-numbers')
  import('prismjs/plugins/line-numbers/prism-line-numbers.css')

  const codeBlocks: NodeListOf<Element> = document.querySelectorAll('.splendid-code-prism')
  for (let index = 0; index < codeBlocks.length; index++) {
    const element = codeBlocks[index];
    console.log({ element, });
    Prism.highlightElement(element);
  }
}
