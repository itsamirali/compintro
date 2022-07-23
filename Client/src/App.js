import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import Service from './Components/Service/Service'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
    </>
  )
}

export default App