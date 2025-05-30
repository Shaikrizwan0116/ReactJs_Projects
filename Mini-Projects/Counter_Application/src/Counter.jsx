import React from 'react'
import { useState } from 'react'
import './Counter.css';

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <div className='container'>
        <h1>Counter Application</h1>
        <div className='display'>
            <span>{count}</span>
        </div>
        <div className='button-group'>
            <button className='button-increment' onClick={()=>setCount(count+1)}>+</button>
            <button className='button-decrement' onClick={()=>setCount(count-1)} disabled={count === 0}>-</button>
            <button className='button-reset' onClick={()=>setCount(0)} disabled={count === 0}>Reset</button>
        </div>
    </div>
  )
}

export default Counter