import { AnimationProps } from 'framer-motion'

export interface Transition {
  enter: AnimationProps['initial']
  visible: AnimationProps['animate']
  exit: AnimationProps['exit']
}


export type TransitionName = 'slide' | 'fade'

export type TransitionDirection = 'NEXT' | 'PREV'
