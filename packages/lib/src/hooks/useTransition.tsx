import { useEffect, useState } from 'react'

import { SplendidContextValues, useSplendidContext } from '../contexts/SplendidContext';
import { Transition } from '../domain/model/Transition';

const getSlideTransition = ({ presentationSize, }: SplendidContextValues) => {
  const scale = 1;
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
const getFadeTransition = () => {
  const transition: Transition = {
    before: { opacity: 0, },
    visible: { opacity: 1, },
    after: { opacity: 0, },
  }

  return transition
}

const defaultTransitions = new Map<string, (c: SplendidContextValues) => Transition>()
defaultTransitions.set('slide', getSlideTransition)
defaultTransitions.set('fade', getFadeTransition)

export const useTransition = () => {
  const context = useSplendidContext()

  const [transition, setTransition,] = useState<Transition>(getSlideTransition(context));

  useEffect(() => {

  }, [])

  useEffect(() => {
    const t = defaultTransitions.get(context.transitionName)!
    setTransition(t(context))
  }, [context.transitionName,])

  const getTransition = (index: number, activeIndex: number) => {
    if ('hidden' in transition) {
      return index === activeIndex ? transition.visible : transition.hidden
    } else {
      return index === activeIndex ? transition.visible : index > activeIndex ? transition.before : transition.after
    }
  }

  const defineTransition = (name: string, f: (c: SplendidContextValues) => Transition) => {

    setTransition(f())
  }

  return { getTransition, }
}
