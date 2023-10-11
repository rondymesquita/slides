import { useEffect, useState } from 'react';

import { useSplendidContext } from '../../contexts/SplendidContext';
import { useKeyboardController } from '../../controllers/keyboard-controller';
import { useMouseController } from '../../controllers/mouse-controller';
import { TransitionDirection } from '../../domain/model/Transition';
import { useLocalStorageState } from '../useLocalStorageState';
import { useSlideTransition } from './useSlideTransition';

export const useSlideNavigator = (slidesCount: number, initialIndex: number) => {
  const { presentationSize, } = useSplendidContext();

  const [activeSlideIndex, setActiveSlideIndex,] = useLocalStorageState<number>(initialIndex)
  const [transitionDirection, setTransitionDirection,] = useState<TransitionDirection>('NEXT');
  const [lastNavTime, setLastNavTime,] = useState<number>(new Date().getTime());
  const { transition, updateTransition, } = useSlideTransition('slide', transitionDirection, presentationSize)

  const onNext = () => {
    setTransitionDirection('NEXT')
    setLastNavTime(new Date().getTime())
  }

  const onPrev = () => {
    setTransitionDirection('PREV')
    setLastNavTime(new Date().getTime())
  }
  useKeyboardController({
    onNext,
    onPrev,
  });

  useMouseController({ onNext, });

  useEffect(() => {
    updateTransition()
  }, [lastNavTime,])

  useEffect(() => {
    if (transitionDirection === 'NEXT') {
      setActiveSlideIndex((index) => {
        const newIndex = index < slidesCount - 1 ? index + 1 : index;
        return newIndex
      });
    } else {
      setActiveSlideIndex((index) => {
        const newIndex = index > 0 ? index - 1 : index;
        return newIndex
      });
    }
  }, [transition,])

  return {
    activeSlideIndex,
    transitionDirection,
    transition,
  }
}
