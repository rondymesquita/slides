import React from 'react'

// import { attributes, html } from '../index.md'

export default function Presentation() {
  // const slidesHtml = html.split('<hr>')
  // console.log({ attributes, });
  console.log(import.meta.env);


  return (
    <div className="reveal">
      <h1>Slides</h1>
      <div className="slides">
        {/* {slidesHtml.map((htmlString: string, index: number) => {
          return <Slide key={index} htmlString={htmlString} />
        })} */}
      h1</div>
    </div>
  )
}
