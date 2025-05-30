import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  // const [count, setCount] = useState(0)
  // console.log(count);
  return (
    <>
    {/* <h3>Counter Application</h3>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)} disabled={0}>Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button> */}
    <Counter/>
    </>
  )
}

export default App
