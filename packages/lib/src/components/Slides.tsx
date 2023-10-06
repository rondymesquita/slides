import React, { lazy, useEffect, useState, Suspense, useRef } from 'react';
import { PresentationProps } from './Presentation';
import { Box, Flex, Slide, Slide, Slide } from '..';
import { KeyboardController } from '../controllers/keyboard-controller';
import { getAttributes } from '../util/get-slide-atributes';
import { Attributes } from '../domain/model/Attributes';
// import * as classic from '../themes/classic/layouts';
import {
  RouterProvider,
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';

export interface SlidesProps {
  slides: any;
  theme: string;
}

interface SlideModel {
  // layout: React.JSX.Element;
  layout: any;
  html: string;
  attributes: Attributes;
}

function SlideNavigation({ size }: any) {
  const slideIndex = useRef(0);

  const navigate = useNavigate();

  new KeyboardController({
    onNext: () => {
      const index = slideIndex.current;
      const newIndex = index < size - 1 ? index + 1 : index;
      slideIndex.current = newIndex;
      navigate(`/${newIndex}`);
    },
    onPrev: () => {
      const index = slideIndex.current;
      const newIndex = index > 0 ? index - 1 : index;
      slideIndex.current = newIndex;
      navigate(`/${newIndex}`);
    },
  });

  return <></>;
}

export default function Slides({ slides, theme }: SlidesProps) {
  const [slideRoutes, setSlideRoutes] = useState<React.JSX.Element[]>([]);
  const [isLoaded, setLoaded] = useState(false);

  const htmls: Array<string> = slides.html.split('<hr>');

  const load = async () => {
    const promises = htmls.map(async (html: string, index: number) => {
      const attributes = getAttributes(html);

      const LayoutComponent = await import(
        `../themes/${theme}/layouts/${attributes.slideLayout}.tsx`
      );

      const SlideComponent = () => (
        <Slide
          key={index}
          layout={LayoutComponent.default}
          active={true}
          html={html}
        />
      );
      const RouteComponent = (
        <Route
          key={index}
          path={`/${index}`}
          element={<SlideComponent />}
        ></Route>
      );

      return RouteComponent;
    });

    const RouteComponents = await Promise.all(promises);
    setSlideRoutes(RouteComponents);
    setLoaded(true);
  };

  useEffect(() => {
    load();

    return () => {};
  }, []);

  return (
    <>
      <Flex className='slides' width={'100%'} height={'100%'}>
        {isLoaded && (
          <Suspense fallback={<div>loading...</div>}>
            <HashRouter>
              <SlideNavigation size={htmls.length} />
              <Routes>{slideRoutes}</Routes>
            </HashRouter>
          </Suspense>
        )}
      </Flex>
    </>
  );
}
