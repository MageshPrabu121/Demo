import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Qanda from './pages/Qanda'
import Signup from './pages/Signup'
import Notfound from './pages/Notfound'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/qanda' element={<Qanda/>}/>
        <Route path='/signup' element={<Signup/>}/>
      <Route  element={<Notfound/>}/>
      </Routes>
    </Router>
  )
}

export default App
