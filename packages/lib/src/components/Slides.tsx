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

function SlideNavigation() {}

export default function Slides({ slides: slidesInput, theme }: SlidesProps) {
  // const [activeIndex, setActiveIndex] = useState(0);
  const slideIndex = useRef(0);
  const [slides, setSlides] = useState<Array<SlideModel>>([]);

  const slidesHtml: Array<string> = slidesInput.html.split('<hr>');

  // const loadThemeLayouts = async () => {
  const RouteComponents = slidesHtml.map((html: string, index: number) => {
    const attributes = getAttributes(html);

    const LayoutComponent = lazy(
      () => import(`../themes/${theme}/layouts/${attributes.slideLayout}.tsx`)
    );

    const SlideComponent = () => (
      <Slide key={index} layout={LayoutComponent} active={true} html={html} />
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

  // const navigate = useNavigate();

  new KeyboardController({
    onNext: () => {
      const index = slideIndex.current;
      const newIndex = index < slides.length - 1 ? index + 1 : index;
      slideIndex.current = newIndex;
      console.log({ newIndex });
      // navigate(`/${newIndex}`);
    },
    onPrev: () => {
      const index = slideIndex.current;
      const newIndex = index > 0 ? index - 1 : index;
      slideIndex.current = newIndex;
      console.log({ newIndex });
      // navigate(`/${newIndex}`);
    },
  });

  return (
    <>
      <Flex className='slides' width={'100%'} height={'100%'}>
        <Suspense fallback={<div>loading...</div>}>
          <HashRouter>
            <Routes>{RouteComponents}</Routes>
          </HashRouter>
        </Suspense>
        {/* <Navigate to={'/1'} /> */}
        {/* {isSlidesLoaded && ( */}
        {/* <Suspense fallback={<>Loading...</>}> */}
        {/* <Routes>{SlidesComponents}</Routes> */}
        {/* </Suspense> */}
        {/* )} */}
      </Flex>
    </>
  );
}
