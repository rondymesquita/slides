import React, { useState, useLayoutEffect } from 'react';

export function useElementSize(
  elementRef: React.RefObject<HTMLElement> | undefined
) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  function updateSize() {
    if (!elementRef || !elementRef.current) {
      return;
    }
    setSize({
      width: elementRef.current.offsetWidth,
      height: elementRef.current.offsetHeight,
    });
  }
  useLayoutEffect(() => {
    if (elementRef && elementRef.current) {
      elementRef.current.addEventListener('resize', updateSize);
    }

    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return { size };
}
