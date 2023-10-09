import { useEffect } from 'react';

import { IController } from './icontroller';

export const useMouseController = (controller: Pick<IController, 'onNext'>) => {
  const onClick = () => {
    controller.onNext();
  };
  useEffect(() => {
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);
};
