import React from 'react';

import { Flex } from '..';

function createMarkup(htmlString: string) {
  return { __html: htmlString, };
}

interface SlideProps {
  html: string;
  active: boolean;
  layout: React.ElementType;
}

export default function Slide({
  active,
  html,
  layout: Layout,
}: SlideProps) {
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
