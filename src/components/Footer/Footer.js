import React from 'react';
import './Footer.css'
import logo from '../../Assets/logo 1 (1).png'

const Footer = () => {
    return (
   <div className='footer'>
         <div className='footer-container'>
            <div>
        <img className='footerimg'  src={logo} alt="" />
            </div>
            <div className='footer-content'>
                <div className='content-right'>
                    <p>Support</p><br></br>
                    <p>About US</p><br></br>
                    <p>Privacy Policy</p>
                </div>
                <div>
                <p>Terms & Condition</p><br></br>
                    <p>Return & Refund Policy</p><br></br>
                    <p>Shipping & Delivery Policy</p> 
                </div>

            </div>
        </div>
            <p className='text-center text-white'>Sea Basket I All Rights Reserved I 2021 Copyright</p>
   </div>
    );
};

export default Footer;