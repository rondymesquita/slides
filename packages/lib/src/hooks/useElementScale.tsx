import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useWindowSize } from './useWindowSize';
import { useElementSize } from './useElementSize';

export function useElementScale(
  elementRef: React.RefObject<HTMLElement> | undefined
) {
  const [scale, setScale] = useState(0);
  const { size: windowSize } = useWindowSize();
  const { size: elementSize } = useElementSize(elementRef);

  useLayoutEffect(() => {
    if (
      windowSize.width &&
      windowSize.height &&
      elementSize.width &&
      elementSize.height
    ) {
      const calcScale = Math.min(
        windowSize.width / elementSize.width,
        windowSize.height / elementSize.height
      );
      setScale(calcScale);
    }
  }, [windowSize, elementSize]);

  return { scale };
}
