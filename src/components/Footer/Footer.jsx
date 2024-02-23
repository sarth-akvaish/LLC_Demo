import React from 'react'
import './footer.scss'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='category'>
                <h3>CATEGORIES</h3>
                <p>Web Builder</p>
                <p>Hosting</p>
                <p>Data Center</p>
                <p>Robotic-Automation</p>
            </div>
            <div className='contact'>
                <h3>CONTACT</h3>
                <p>Web Builder</p>
                <p>Hosting</p>
                <p>Data Center</p>
                <p>Robotic-Automation</p>
            </div>
            <div className='country'>
                United States
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96967 8.61091C6.26256 8.32973 6.73744 8.32973 7.03033 8.61091L12.5 13.8617L17.9697 8.61091C18.2626 8.32973 18.7374 8.32973 19.0303 8.61091C19.3232 8.89208 19.3232 9.34796 19.0303 9.62911L13.0303 15.3891C12.7374 15.6703 12.2626 15.6703 11.9697 15.3891L5.96967 9.62911C5.67678 9.34796 5.67678 8.89208 5.96967 8.61091Z" fill="#626E79" />
                </svg>
            </div>
        </div>
    )
}

export default Footer
