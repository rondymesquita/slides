import React from 'react';
import { kebabToCamelCase } from '../util/kebab-to-camel-case';
import { useThemeContext } from '../contexts/ThemeContext';
import { Attributes } from '../domain/model/Attributes';
import { merge } from '../util/merge-object';
import { lazy, Suspense } from 'react';

function createMarkup(htmlString: string) {
  return { __html: htmlString };
}

const DEFAULT_ATTRIBUTES: Attributes = {
  slideLayout: 'Section',
};

const getAttributes = (htmlString: string) => {
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

interface SlideProps {
  htmlString: string;
  theme: string;
}

export default function Slide({ htmlString, theme }: SlideProps) {
  const { slideLayout } = getAttributes(htmlString);

  /**
   * React lazy load layout
   */
  const Content = lazy(() => {
    return import(`../themes/${theme}/${slideLayout}.tsx`);
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content>
        <div
          data-auto-animate
          dangerouslySetInnerHTML={createMarkup(htmlString)}
        ></div>
      </Content>
    </Suspense>
  );
}
