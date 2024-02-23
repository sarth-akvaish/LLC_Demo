import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import BreadcrumbExample from './components/BreadCrum/BreadCrum'
import Cardcontainer from './components/CardContainer/Cardcontainer'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <BreadcrumbExample />
      <Cardcontainer />
    </div>
  )
}

export default App
