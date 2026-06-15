import React, { useEffect, useState } from 'react'

const App = () => {

  const[count, setCount]=useState(0)

  useEffect(()=>{
    document.title =`count is ${count}`
  },[count])

  function handleIncrement(){
    setCount(previous => previous+1)
  }
  function handleDecrement(){
    setCount(previous=>previous-1)
  }
  return (
    <div>
      <h1>UseEffect Count</h1>
      <h2>Count : {count}</h2>
      <button
      onClick={handleIncrement}
      >
        Increment
      </button>
      <button
      onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  )
}

export default App
