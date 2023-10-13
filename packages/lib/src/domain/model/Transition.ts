import { AnimationProps } from 'framer-motion'

export interface Transition {
  right: AnimationProps['animate']
  visible: AnimationProps['animate']
  left: AnimationProps['animate']
}


export type TransitionName = 'slide' | 'fade'

export type TransitionDirection = 'NEXT' | 'PREV'
