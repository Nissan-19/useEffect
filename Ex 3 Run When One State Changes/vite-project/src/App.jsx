import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount]= useState(0)
  const [name, setName]= useState("")

  useEffect(()=>{
    console.log("Count Changed")
    document.title = `count is ${count}`
  },[count])

  function manageCountChange() {
    setCount(previousCount => previousCount+1)
  }
  function manageNameChange(event){
    setName(event.target.value)
  }
  return (
    <div>
      <h1>UseEffect when one state changes</h1>
      <h2>Count is {count}</h2>
      <button
      onClick={manageCountChange}>Count Increase</button>

      <input type="text"
      placeholder='Enter the name'
      value={name}
      onChange={manageNameChange} />
    </div>
  )
}

export default App
