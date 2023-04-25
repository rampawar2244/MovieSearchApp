import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(1)
     const handelClick = () =>{
        setCounter(counter + 1)
     }
  return (
    <div className='container'>
       <h1>Click On Button to increment</h1>
       <h1>{counter}</h1>
       <button className='btn btn-success' onClick={handelClick}>Click</button>
    </div>
  )
}

export default Counter