import React, { useEffect, useState } from 'react'
import { use } from 'react'

const App = () => {

  const[seconds, setSeconds] = useState(0)
  const[isRunning, setIsRunning]= useState(false)

  useEffect(()=>{

    if(!isRunning){
      return
    }

    const intervalId = setInterval(() => {
      setSeconds((previousSeconds)=>previousSeconds + 1)
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  },[isRunning])

  function handleStart(){
    setIsRunning(true)
  }
  function handleStop(){
    setIsRunning(false)
  }
  function handleReset(){
    setSeconds(0)
  }

  return (
    <div>
      <h1>Timer with Start Stop Reset</h1>
      <h2>Timer : {seconds}</h2>
      <button 
      onClick={handleStart}>Start</button>
      <button
      onClick={handleStop}>Stop</button>
      <button
      onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
