import React,{useState} from 'react';

const Counter = ()=>{
    const initialVal = {
        count:0
    }
 const [counter,setCounter] = useState(initialVal.count);  
 const increment = ()=>{
     setCounter(counter+1);
 }
 const decrement = ()=>{
    setCounter(counter-1); 
}
const reset = ()=>{
     setCounter(initialVal.count);
}
    return(
        <div>
         <h1>Count-{counter}</h1>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <button onClick={reset}>reset</button>
        </div>
    );
}
export default Counter;