import React from 'react'
import useCounter from './useCounter';

const Counter1 = () => {
    const[counter,increment,decrement,reset] = useCounter(0);
  return (
    <div>
        <h1>Custom hooks</h1>
        <h2>Counter1-{counter}</h2>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <button onClick={reset}>RESET</button>
    </div>
  )
}

export default Counter1