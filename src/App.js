import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home.js"
import Signup from "./components/Signup.js"
import Login from "./components/Login.js"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </Router>    
  )
}