import { useEffect } from 'react';

import { IController } from './icontroller';

export const useKeyboardController = (controller: IController) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.code == 'ArrowLeft') {
      controller.onPrev();
    } else if (event.code == 'ArrowRight') {
      controller.onNext();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

};
