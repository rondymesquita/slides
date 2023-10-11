import { PresentationSize } from './PresentationSize';

export interface PageAttributes {
  layout?: string;
}

export interface MarkdownAttributes {
  theme: string
  syntaxHighlight?: 'prism' | 'shiki'
  syntaxHighlightEnabled?: boolean
  presentationSize: PresentationSize
}
