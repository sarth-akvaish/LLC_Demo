import React from 'react'
import './Card.scss'
import img from '/img.png'
import stars from '/stars.png'
const Card = () => {
    return (
        <div className='card'>
            <div className='index'>1</div>
            <div className='card-1'>
                <img src={img} alt="img" />
                <p>Builder 1</p>
            </div>
            <div className='card-2'>
                <p><span className='card2-head'>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                <p className='card2-main'>Main Highlights</p>
                <p className='card2-get'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                <button>Show More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.98043 5.64645C4.17569 5.45118 4.49228 5.45118 4.68754 5.64645L8.33398 9.29289L11.9804 5.64645C12.1757 5.45118 12.4923 5.45118 12.6875 5.64645C12.8828 5.84171 12.8828 6.15829 12.6875 6.35355L8.68754 10.3536C8.49228 10.5488 8.17569 10.5488 7.98043 10.3536L3.98043 6.35355C3.78517 6.15829 3.78517 5.84171 3.98043 5.64645Z" fill="#1B88F4" />
                    </svg>
                </button>
            </div>
            <div className='card-3'>
                <div className='ratings'>
                    <h1>9.8</h1>
                    <p>Exceptional</p>
                    <img src={stars} alt="stars" />
                </div>
                <button>View</button>
            </div>
        </div>
    )
}

export default Card
