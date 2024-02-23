import React from 'react'
import Card from '../Card/Card'
import './Cardcont.scss'

const Cardcontainer = () => {

  const datas = [
    {
      "id": 1,
      "heading": "WixPro 72-Inch Responsive Website Builder",
      "content": "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      "desc": "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      "rating": 9.8,
      "remarks": "Exceptional",
      "isBestValue": true
    },
    {
      "id": 2,
      "heading": "SiteCraft 68-Inch Ultimate Web Design Studio",
      "content": "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      "desc": "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      "rating": 9.5,
      "remarks": "Excellent",
      "isBestValue": true
    }, {
      "id": 3,
      "heading": "WixPro 72-Inch Responsive Website Builder",
      "content": "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      "desc": "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      "rating": 9.3,
      "remarks": "Exceptional",
      "isBestValue": true
    }
  ]
  return (
    <div className='card-container'>
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}
      {datas.map((data) => (
        <Card key={data.id} id={data.id} heading={data.heading} content={data.heading} desc={data.desc} rating={data.rating} remarks={data.remarks} isBestValue={data.isBestValue } />
      ))}
    </div>
  )
}

export default Cardcontainer
