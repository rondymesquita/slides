import { Controller } from './controller';
import { IController } from './icontroller';

export class KeyboardController {
  constructor(controller: IController) {
    document.onkeydown = (event: KeyboardEvent) => {
      // const e = event || window.event;

      if (event.code == 'ArrowLeft') {
        controller.onPrev();
      } else if (event.code == 'ArrowRight') {
        controller.onNext();
      }
    };
  }
}
