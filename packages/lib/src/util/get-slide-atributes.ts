import { Attributes } from '../domain/model/Attributes';
import { kebabToCamelCase } from './kebab-to-camel-case';
import { merge } from './merge-object';

const DEFAULT_ATTRIBUTES: Attributes = {
  slideLayout: 'Section',
};

export const getAttributes2 = (htmlString: string) => {
  const attributesToExtract = ['slide-layout'];
  const div = document.createElement('div');
  div.innerHTML = htmlString;

  const attributes: any = {};
  attributesToExtract.forEach((attribute) => {
    const attributeValue = div
      .querySelector(`*[${attribute}]`)
      ?.getAttribute(`${attribute}`);

    if (attributeValue) {
      attributes[kebabToCamelCase(attribute)] = attributeValue;
    }
  });

  // console.log({ attributes });

  return merge(attributes, DEFAULT_ATTRIBUTES) as Attributes;
};
