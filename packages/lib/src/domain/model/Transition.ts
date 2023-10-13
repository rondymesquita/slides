import { AnimationProps } from 'framer-motion'

export interface TransitionTwoState {
  hidden: AnimationProps['animate']
  visible: AnimationProps['animate']
}

export interface TransitionThreeState {
  before: AnimationProps['animate']
  visible: AnimationProps['animate']
  after: AnimationProps['animate']
}

export type Transition = TransitionTwoState | TransitionThreeState

export type Direction = 'NEXT' | 'PREV'
