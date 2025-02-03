import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import RecipePage from './RecipePage'
import RecipeDetails from './RecipeDetails'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Navbar />
      <Router >
                <Routes>
                        
                           <Route path='/' element={<RecipePage/>} />
                           <Route path="/RecipeDetails" element={<RecipeDetails />} />
                           {/* <Route path='/Navbar' element={ <Navbar />} /> */}
                </Routes>
      </Router>
        
    </>
  )
}

export default App
