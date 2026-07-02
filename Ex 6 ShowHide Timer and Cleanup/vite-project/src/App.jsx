import React, { useEffect, useState } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
      console.log("Timer component unmounted")
    }
  }, [])

  return (
    <div>
      <h2>Timer: {seconds}</h2>
    </div>
  )
}

const App = () => {
  const [showTimer, setShowTimer] = useState(true)

  function handleVisibility() {
    setShowTimer((previousShowTimer) => !previousShowTimer)
  }

  return (
    <div>
      <h1>Show and Hide Timer</h1>

      {showTimer && <Timer />}

      <button onClick={handleVisibility}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  )
}

export default App