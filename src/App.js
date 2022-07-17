import React from 'react'
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Service from './Service'
import Navbar from './Navbar';
import "./style.css";


export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;