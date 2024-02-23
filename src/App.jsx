import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import BreadcrumbExample from './components/BreadCrum/BreadCrum'
import Cardcontainer from './components/CardContainer/Cardcontainer'
import Footer from './components/Footer/Footer'
import Deals from './components/RelatedDeals/Deals'
import Newsletter from './components/Newsletter/Newsletter'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <BreadcrumbExample />
      <Cardcontainer />
      <Deals />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
