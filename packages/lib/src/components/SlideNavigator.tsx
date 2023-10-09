import React, { useRef } from 'react';
import { useNavigate } from 'react-router';

import { useKeyboardController } from '../controllers/keyboard-controller';
import { useMouseController } from '../controllers/mouse-controller';

export default function SlideNavigator({ size, }: any) {
  const slideIndex = useRef(0);

  const navigate = useNavigate();

  useKeyboardController({
    onNext: () => {
      const index = slideIndex.current;
      const newIndex = index < size - 1 ? index + 1 : index;
      slideIndex.current = newIndex;
      navigate(`/${newIndex}`);
    },
    onPrev: () => {
      const index = slideIndex.current;
      const newIndex = index > 0 ? index - 1 : index;
      slideIndex.current = newIndex;
      navigate(`/${newIndex}`);
    },
  });

  useMouseController({
    onNext: () => {
      const index = slideIndex.current;
      const newIndex = index < size - 1 ? index + 1 : index;
      slideIndex.current = newIndex;
      navigate(`/${newIndex}`);
    },
    onPrev: () => {},
  });

  return <></>;
}
