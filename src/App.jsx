import { useState } from 'react'
import BeatSheetPage from './views/BeatSheet';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BeatSheetPage />
    </>
  )
}

export default App
