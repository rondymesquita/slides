import { useState } from 'react'
import './App.css'
import { Presentation, Slides } from '@rondymesquita/slides'

import * as slides from './index.md'

function App() {

  return (
    <>
      <Presentation>
        <Slides slides={slides}/>
      </Presentation>
    </>
  )
}

export default App
