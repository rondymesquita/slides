import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Presentation } from '@rondymesquita/slides'

// import {}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Presentation/>
    </>
  )
}

export default App
