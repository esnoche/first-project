import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Welcome to the Home page</h1>
        <div>
            <Link to="/signup"><button>Signup</button></Link>
            <Link to="/login"><button>Login</button></Link>
        </div>
    </div>
  )
}
