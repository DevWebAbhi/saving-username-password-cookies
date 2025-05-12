import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(username,password)
    const res = await axios.post('http://localhost:3000/api/login', {
      username,
      password
    }, {
      withCredentials: true
    })
    if (res.status === 200) {
      console.log('Login successful')
    } else {
      console.log('Login failed')
    }

  }

    const checkCookie = async (e) => {

    const res = await axios.get('http://localhost:3000/api/check', {
      withCredentials: true
    })
    if (res.status === 200) {
      console.log('Cookies are set successful')
    } else {
      console.log('Cookies set failed')
    }
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
