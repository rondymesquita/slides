import { useState } from 'react'

import { PresentationSize } from '../../domain/model/PresentationSize';
import { Transition, TransitionDirection, TransitionName } from '../../domain/model/Transition';

const getSlideTransition = (transitionDirection: TransitionDirection, presentationSize: PresentationSize) => {
  const transitionLeft: Transition = {
    initial: { translate: `${presentationSize.width}px`, },
    animate: { translate: '0', },
    exit: { translate: `-${presentationSize.width}px`, },
  }

  const transitionRight: Transition = {
    initial: { translate: `-${presentationSize.width}px`, },
    animate: { translate: '0', },
    exit: { translate: `${presentationSize.width}px`, },
  }

  return transitionDirection === 'NEXT' ? transitionLeft : transitionRight
}
const getFadeTransition = (transitionDirection: TransitionDirection, presentationSize: PresentationSize) => {
  const transition: Transition = {
    initial: { opacity: 0, },
    animate: { opacity: 1, },
    exit: { opacity: 0, },
  }

  return transition
}

const transitions = new Map<TransitionName, (t: TransitionDirection, p: PresentationSize) => Transition>()
transitions.set('slide', getSlideTransition)
transitions.set('fade', getFadeTransition)

export const useSlideTransition = (name: TransitionName, direction: TransitionDirection, presentationSize: PresentationSize) => {

  const [transition, setTransition,] = useState<Transition>(getSlideTransition(direction, presentationSize));

  const t = transitions.get(name) || getSlideTransition

  const updateTransition = () => {
    setTransition(t(direction, presentationSize))
  }

  return {
    transition,
    updateTransition,
  }
}
