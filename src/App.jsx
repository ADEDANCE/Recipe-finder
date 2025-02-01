import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import RicipePage from './RicipePage'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Navbar />
      <Router >
                <Routes>
                           <Route path='/' element={<RicipePage/>} />
                           {/* <Route path='/Navbar' element={ <Navbar />} /> */}
                </Routes>
      </Router>
        
    </>
  )
}

export default App
