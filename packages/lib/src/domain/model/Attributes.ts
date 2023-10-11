import { PresentationSize } from './PresentationSize';
import { TransitionName } from './Transition';

export interface PageAttributes {
  layout?: string;
}

export interface MarkdownAttributes {
  theme: string
  syntaxHighlight?: 'prism' | 'shiki'
  syntaxHighlightEnabled?: boolean
  presentationSize?: PresentationSize
  transitionName?: TransitionName
  animationDuration?: number
}
