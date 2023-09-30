import React from 'react'

import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItFrontMatter from 'markdown-it-front-matter';
import { UserConfig } from 'vite'
import { parseFrontMatter } from '../markdown/parse-frontmatter';
import { Slide } from '..';


interface PresentationProps {
  slides: {
    html: string,
    attributes: object
  }
}
export default function Presentation({slides}: PresentationProps) {
  const slidesHtml = slides.html.split('<hr>')

  return (
    <div className="presentation">
      <h1>Slides</h1>
      <div className="slides">
        {slidesHtml.map((htmlString: string, index: number) => {
          return <Slide key={index} htmlString={htmlString} />
        })}
      h1</div>
    </div>
  )
}
