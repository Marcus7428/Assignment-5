import { useState } from 'react'
import './App.css'
import Feature from './components/Feature'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Feature />
    </>
  )
}
// TMDB API: b75d9e94f8544841c4b63704d0fb9013
export default App