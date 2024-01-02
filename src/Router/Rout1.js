import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Home from "../components/pages/Home"
import About from "../components/pages/About"
import Cars from "../components/pages/Cars"
import Contact from "../components/pages/Contact"
import Services from "../components/pages/Services"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function Rout1() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} /> {/* Wrap Home component in a Route */}
          <Route path='/about' element={<About />} />
          <Route path='/Cars' element={<Cars/>} />
          
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </>
  )
}

export default Rout1
