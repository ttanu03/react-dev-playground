import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>INCREMENT AND DECREMENT</h1>
    <h1>{count}</h1>
    <button onClick={()=>setCount(prev => prev + 1)}>Increment</button>
    <button onClick={() => setCount(prev => prev - 1)}>Increment</button>
      <button onClick={()=>setCount(0)}>Reset</button>

    </>
  )
}

export default App
