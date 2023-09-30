import { useState } from 'react'
import './App.css'
import { Presentation } from '@rondymesquita/slides'

import * as slides from './index.md'

function App() {

  return (
    <>
      <Presentation slides={slides}/>
    </>
  )
}

export default App
