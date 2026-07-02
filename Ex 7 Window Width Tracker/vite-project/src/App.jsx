import React, { useEffect, useState } from 'react'

function App() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    function handleResize(){
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return()=>{
      window.removeEventListener("resize", handleResize)
    }
  },[])

  

  return (
    <div>
      <h1>Window Resize</h1>
      <h2>Window width: {width}px</h2>
    </div>
  )
}

export default App
