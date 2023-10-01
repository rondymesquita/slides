import React from 'react';
import { kebabToCamelCase } from '../util/kebab-to-camel-case';
import { useThemeContext } from '../contexts/ThemeContext';
import { Attributes } from '../domain/model/Attributes';
import { merge } from '../util/merge-object';
import { lazy, Suspense } from 'react';
import { Box } from '..';

function createMarkup(htmlString: string) {
  return { __html: htmlString };
}

interface SlideProps {
  html: string;
  theme: string;
  active: boolean;
  Layout: JSX.Element;
}

export default function Slide({ html, theme, active, Layout }: SlideProps) {
  // const { slideLayout } = getAttributes(htmlString);

  /**
   * React lazy load layout
   */
  // const Content = lazy(() => {
  //   return import(`../themes/${theme}/${slideLayout}.tsx`);
  // });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box hidden={!active} sx={{}}>
        <Layout>
          <div
            data-auto-animate
            dangerouslySetInnerHTML={createMarkup(html)}
          ></div>
        </Layout>
      </Box>
    </Suspense>
  );
}
