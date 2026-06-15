import React, { useEffect, useState } from "react"

const App = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <h1>Basic Timer</h1>
      <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default App