import { AnimationProps } from 'framer-motion'

export interface Transition {
  initial: AnimationProps['initial']
  animate: AnimationProps['animate']
  exit: AnimationProps['exit']
}


export type TransitionName = 'slide' | 'fade'

export type TransitionDirection = 'NEXT' | 'PREV'
