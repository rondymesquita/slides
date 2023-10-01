import React from 'react';
import { PresentationProps } from './Presentation';
import { Slide } from '..';
import { useThemeContext } from '../contexts/ThemeContext';
import { usePresentationContext } from '../contexts/PresentationContext';

export interface SlidesProps {
  slides: any;
  theme: string;
}

export default function Slides({ slides, theme }: SlidesProps) {
  // const { slides } = usePresentationContext();
  const slidesHtml = slides.html.split('<hr>');
  console.log(slidesHtml);

  // const { setTheme } = useThemeContext();

  // const loadTheme = async () => {
  //   const themeFiles = import(`../themes/${theme}/index.ts`);
  //   setTheme(themeFiles);
  // };

  // loadTheme();

  return (
    <>
      <div className='slides'>
        {slidesHtml.map((htmlString: string, index: number) => {
          return <Slide key={index} htmlString={htmlString} theme={theme} />;
        })}
      </div>
    </>
  );
}
