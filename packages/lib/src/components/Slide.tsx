import React from 'react'

function createMarkup(htmlString: string) {
  return { __html: htmlString, }
}
export default function Slide({ htmlString, }: { htmlString: string }) {
  return (
    <section
      data-auto-animate
      dangerouslySetInnerHTML={createMarkup(htmlString)}
    ></section>
  )
}
