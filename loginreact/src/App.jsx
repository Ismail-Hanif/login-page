import React from 'react'
import { useState } from 'react'
 const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
    setIsLoggedIn(true)
  }
  return (
    <div>
      {isLoggedIn? <h1>Welcome User!</h1> : <h1>Please Login!</h1>}
      <button onClick={login}>Login</button>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  )
}
export default App