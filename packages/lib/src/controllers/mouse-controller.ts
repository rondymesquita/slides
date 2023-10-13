import { useEffect } from 'react';

import { IController } from './icontroller';

export const useMouseController = (controller: IController) => {
  const onNext = () => {
    controller.onNext();
  };

  useEffect(() => {
    document.addEventListener('click', onNext);
    document.addEventListener('wheel', ({ deltaY, }) => {
      if (deltaY > 0) {
        controller.onNext()
      } else {
        controller.onPrev()
      }
    });

    return () => {
      document.removeEventListener('click', onNext);
      document.removeEventListener('wheel', onNext);
    };
  }, []);
};
