import React, { useEffect, useState } from 'react'

const App = () => {

  const[count, setCount]= useState(0)

  useEffect(()=>{
    console.log("component loaded")
  },[])

  function handleIncrement (){
    setCount(previousCount => previousCount+1)
  }
  return (
    <div>
      <h1>Welcome</h1>
      <h2>count is : {count}</h2>
      <button
      onClick={handleIncrement}>Increase</button>
    </div>

  )
}

export default App
