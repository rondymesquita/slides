import { copy } from './copy-object';

export const merge = <T = any>(left: T, right: T): T => {
  const merged: any = copy(left);
  for (const key in right) {
    if (Object.prototype.hasOwnProperty.call(right, key)) {
      const newValue = copy(right[key]);
      if (!merged[key]) {
        merged[key] = newValue;
      }
    }
  }
  return merged;
};
