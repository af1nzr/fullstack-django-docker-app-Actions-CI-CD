import React, { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState("Loading...")

  useEffect(() => {
    fetch('/api/hello/')
      .then(res => res.json())
      .then(data => setMsg(data.message))
  }, [])

  return (
    <div>
      <h1>{msg}</h1>
    </div>
  )
}

export default App
