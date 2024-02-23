import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import BreadcrumbExample from './components/BreadCrum/BreadCrum'
import Cardcontainer from './components/CardContainer/Cardcontainer'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <BreadcrumbExample />
      <Cardcontainer />
      <Footer />
    </div>
  )
}

export default App
