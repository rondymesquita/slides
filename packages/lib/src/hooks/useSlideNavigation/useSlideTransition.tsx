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

const transitions = new Map<TransitionName, (t: TransitionDirection, p: PresentationSize) => Transition>()
transitions.set('slide', getSlideTransition)

export const useSlideTransition = (transitionName: TransitionName, transitionDirection: TransitionDirection, presentationSize: PresentationSize) => {

  const [transition, setTransition,] = useState<Transition>();

  const t = transitions.get(transitionName) || getSlideTransition

  const updateTransition = () => {
    setTransition(t(transitionDirection, presentationSize))
  }

  return {
    transition,
    updateTransition,
  }
}
