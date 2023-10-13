import { useEffect, useRef, useState } from 'react';

import { useSplendidContext } from '../../contexts/SplendidContext';
import { useKeyboardController } from '../../controllers/keyboard-controller';
import { useMouseController } from '../../controllers/mouse-controller';
import { TransitionDirection } from '../../domain/model/Transition';
import { useLocalStorageState } from '../useLocalStorageState';
import { useSlideTransition } from './useSlideTransition';

export const useSlideNavigator = (slidesCount: number, initialIndex: number) => {
  const { presentationSize, transitionName,  } = useSplendidContext();

  const [activeSlideIndex, setActiveSlideIndex,] = useLocalStorageState<number>(initialIndex)
  const [transitionDirection, setTransitionDirection,] = useState<TransitionDirection>('NEXT');
  const [lastNavTime, setLastNavTime,] = useState<number>();
  const { transition, updateTransition, } = useSlideTransition(transitionName, transitionDirection, presentationSize)

  const firstRenderRef = useRef(true);


  const onNext = () => {
    setTransitionDirection('NEXT')
    console.log('called next')
    setLastNavTime(new Date().getTime())
  }

  const onPrev = () => {
    setTransitionDirection('PREV')
    console.log('called prev')
    setLastNavTime(new Date().getTime())
  }
  useKeyboardController({
    onNext,
    onPrev,
  });

  useMouseController({ onNext, });

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    updateTransition()
    // console.log('lastNavTime', lastNavTime, transition)

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


  }, [lastNavTime,])

  // useEffect(() => {
  //   if (transitionDirection === 'NEXT') {
  //     setActiveSlideIndex((index) => {
  //       const newIndex = index < slidesCount - 1 ? index + 1 : index;
  //       return newIndex
  //     });
  //   } else {
  //     setActiveSlideIndex((index) => {
  //       const newIndex = index > 0 ? index - 1 : index;
  //       return newIndex
  //     });
  //   }

  //   console.log('transition', transition, transitionDirection)
  // }, [transition,])

  // useLayoutEffect(() => {
  //   console.log('transition', transition)
  //   loadPrism()
  // }, [activeSlideIndex,])

  return {
    activeSlideIndex,
    transitionDirection,
    transition,
  }
}
