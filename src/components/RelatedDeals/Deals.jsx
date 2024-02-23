import React from 'react'
import './deals.scss'
import img from '/img.png';

const Deals = () => {


    return (
        <div className='deals'>
            <h1>Related deals you might like for</h1>
            <div className="short-cards-container">
                <div className='short-card'>
                    <div className='img-container'>
                        <img src={img} alt="" />
                    </div>
                    <div className='tags'>
                        <p>20% Off</p>
                        <p>Limited time</p>
                    </div>
                    <p className='heading'>Webbuilder 1</p>
                    <p className='desc'>Computer  Modern clasic with wix support</p>
                    <div className='price'>
                        <p className='first'>$39.99</p>
                        <p className='second'>$49.96</p>
                        <p className='third'>(20% Off)</p>
                    </div>
                    <button>View Deal</button>
                </div>
                <div className='short-card'>
                    <div className='img-container'>
                        <img src={img} alt="" />
                    </div>
                    <div className='tags'>
                        <p>20% Off</p>
                        <p>Limited time</p>
                    </div>
                    <p className='heading'>Webbuilder 1</p>
                    <p className='desc'>Computer  Modern clasic with wix support</p>
                    <div className='price'>
                        <p className='first'>$39.99</p>
                        <p className='second'>$49.96</p>
                        <p className='third'>(20% Off)</p>
                    </div>
                    <button>View Deal</button>
                </div>
                <div className='short-card'>
                    <div className='img-container'>
                        <img src={img} alt="" />
                    </div>
                    <div className='tags'>
                        <p>20% Off</p>
                        <p>Limited time</p>
                    </div>
                    <p className='heading'>Webbuilder 1</p>
                    <p className='desc'>Computer  Modern clasic with wix support</p>
                    <div className='price'>
                        <p className='first'>$39.99</p>
                        <p className='second'>$49.96</p>
                        <p className='third'>(20% Off)</p>
                    </div>
                    <button>View Deal</button>
                </div>
            </div>
        </div>
    )
}

export default Deals
