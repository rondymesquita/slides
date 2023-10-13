import { useEffect, useRef, useState } from 'react';

import { useKeyboardController } from '../controllers/keyboard-controller';
import { useMouseController } from '../controllers/mouse-controller';
import { Direction } from '../domain/model/Transition';
import { useLocalStorageState } from './useLocalStorageState';

export const useNavigation = (slidesCount: number, initialIndex: number) => {
  const [activeIndex, setActiveIndex,] = useLocalStorageState<number>(initialIndex)
  const [transitionDirection, setTransitionDirection,] = useState<Direction>('NEXT');
  const [lastNavTime, setLastNavTime,] = useState<number>();
  const firstRenderRef = useRef(true);


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

  useMouseController({
    onNext,
    onPrev,
  });

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    if (transitionDirection === 'NEXT') {
      setActiveIndex((index) => {
        const newIndex = index < slidesCount - 1 ? index + 1 : index;
        return newIndex
      });
    } else {
      setActiveIndex((index) => {
        const newIndex = index > 0 ? index - 1 : index;
        return newIndex
      });
    }


  }, [lastNavTime,])

  return {
    activeIndex,
    transitionDirection,
  }
}
