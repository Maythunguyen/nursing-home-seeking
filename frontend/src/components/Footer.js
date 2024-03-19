import React from 'react';
import '../style.css'; // Ensure your CSS file's path is correct
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => (
  <div className="container">
        <div className="container-footer">
            <div className='footer-content'>
                <p>© 2024 Seeking Nursing Homes. All rights reserved.</p>
            </div>
            <div className='footer-social'>
    
                <a href="#" className="footer-link"><FaFacebook size={32}/></a>
                <a href="#" className="footer-link"><FaTwitter size={32}/></a> 
                <a href="#" className="footer-link"><FaInstagramSquare size={32} /></a>


            </div>
            
        </div>
    </div>
);

export default Footer;
