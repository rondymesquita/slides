import { useEffect, useState } from 'react'

import { PresentationSize } from '../domain/model/PresentationSize';
import { Transition } from '../domain/model/Transition';

const getSlideTransition = (presentationSize: PresentationSize) => {
  const scale = 1.3;
  const transition: Transition = {
    before: {
      translate: `${presentationSize.width * scale}px`,
      opacity: 1,
      scale,
    },
    visible: {
      translate: '0',
      opacity: 1,
      scale: 1,
    },
    after: {
      translate: `-${presentationSize.width * scale}px`,
      opacity: 1,
      scale,
    },
  }
  return transition
}
const getFadeTransition = (presentationSize: PresentationSize) => {
  const transition: Transition = {
    before: { opacity: 0, },
    visible: { opacity: 1, },
    after: { opacity: 0, },
  }

  return transition
}

const transitions = new Map<string, (p: PresentationSize) => Transition>()
transitions.set('slide', getSlideTransition)
transitions.set('fade', getFadeTransition)

export const useSlideTransition = (name: string, presentationSize: PresentationSize) => {

  const [transition, setTransition,] = useState<Transition>(getSlideTransition(presentationSize));

  useEffect(() => {
    const t = transitions.get(name) || getSlideTransition
    setTransition(t(presentationSize))
  }, [])

  const getTransition = (index: number, activeIndex: number) => {
    if ('hidden' in transition) {
      return index === activeIndex ? transition.visible : transition.hidden
    } else {
      return index === activeIndex ? transition.visible : index > activeIndex ? transition.before : transition.after
    }

  }

  return { getTransition, }
}
