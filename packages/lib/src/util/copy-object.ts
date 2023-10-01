export const copy = (object: any) => {
  const copied: any = {};

  if (typeof object !== 'object') {
    return object;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (Array.isArray(element)) {
        const copiedArr = [];
        for (let index = 0; index < element.length; index++) {
          const el = element[index];
          copiedArr.push(copy(el));
        }
        copied[key] = copiedArr;
      } else if (typeof element === 'object') {
        copied[key] = copy(element);
      } else {
        copied[key] = element;
      }
    }
  }
  return copied;
};
