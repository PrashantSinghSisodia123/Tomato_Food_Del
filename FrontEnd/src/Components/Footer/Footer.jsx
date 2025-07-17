import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img className='footer-logo' src={assets.logo} alt="" />
                <p className='footer-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="social-media-icons">
                   

                    <a href="https://www.linkedin.com/in/prashant-singh-sisodia-089369362/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </a>

                    <a href="https://x.com/Prashan02957779" target="_blank" rel="noopener noreferrer">
                        <img src={assets.twitter_icon} alt="Twitter" />
                    </a>

                </div>
            </div>
            <div className="footer-content-center">
                <h1>COMPANY</h1>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h1>GET IN TOUCH</h1>
                <ul>
                    <li>+91-7023471967</li>
                    <li>prashantsinghsisodia0000@gmail.com</li>
                </ul>
            </div>
            </div>
            <hr  className='hr-element'/>
            <p>Copyright 2025 ©Tomato.com - All Right Reserved</p>
        
    </div>
  )
}

export default Footer