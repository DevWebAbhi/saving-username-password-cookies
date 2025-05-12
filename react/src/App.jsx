import { useState } from 'react'

import './App.css'
import Cookies from "js-cookie";
function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(username,password)
    Cookies.set('username', username, { expires: 1 });
    Cookies.set('password', password, { expires: 1 });

  }

    const checkCookie = async (e) => {

   
  }

  return (
    <>
    <button
    onClick={checkCookie}
    >checker</button>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="name"
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
