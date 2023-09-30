import React from 'react'
import { PresentationProps } from './Presentation'
import { Slide } from '..'

export interface SlidesProps {
  slides: {
    html: string,
    attributes: object
  }
}

export default function Slides({slides}: SlidesProps) {
	const slidesHtml = slides.html.split('<hr>')


	return (
		<>
		<h1>Slides</h1>
      <div className="slides">
        {slidesHtml.map((htmlString: string, index: number) => {
          return <Slide key={index} htmlString={htmlString} />
        })}


					</div>
		</>
	)
}
