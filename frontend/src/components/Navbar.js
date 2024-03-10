import React from "react";
import { Link } from 'react-router-dom';
import "../style.css";


function Navbar() {

    return (
        <div className="navbar">
            <div className="logo">
                <div><Link to="/" className="seeking">Seeking</Link></div>
                <div><Link to="/" className="nursing-home">Nursing Home</Link></div>
            </div>
            <div className="nav-menu">
                <ul>
                    <li className="nav-item"><Link to="/about-us" className="nav-link">About us</Link></li>
                    <li className="nav-item"><Link to="/community" className="nav-link">Community</Link></li>
                    <li className="nav-item"><Link to="/highlight" className="nav-link">Highlight</Link></li>
                </ul> 
            </div>             
        </div>

    )

};

export default Navbar;