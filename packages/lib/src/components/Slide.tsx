import React from 'react';
import { kebabToCamelCase } from '../util/kebab-to-camel-case';
import { useThemeContext } from '../contexts/ThemeContext';
import { Attributes } from '../domain/model/Attributes';
import { merge } from '../util/merge-object';
import { lazy, Suspense } from 'react';
import { Box, Flex } from '..';

function createMarkup(htmlString: string) {
  return { __html: htmlString };
}

interface SlideProps {
  html: string;
  active: boolean;
  layout: React.ElementType;
}

export default function Slide({ html, active, layout: Layout }: SlideProps) {
  return (
    <Flex hidden={!active} height={'100%'} width={'100%'} className='slide'>
      <Layout>
        <div
          data-auto-animate
          dangerouslySetInnerHTML={createMarkup(html)}
        ></div>
      </Layout>
    </Flex>
  );
}
