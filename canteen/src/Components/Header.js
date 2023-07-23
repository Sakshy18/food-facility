import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/dyp-logo.jpeg";

function Header() {
    return (
        <header>
        <div className='navsection'>
            <img src={Logo} alt="Logo" id='logo' />
            <Link to="/" id="companyName" className='navlinks'>Canteen</Link>
            <p>Foods and Hospitality Pvt. Ltd</p>
        </div>
        <div id='navlinksection' className='navsection'>
            <Link to="/viewreport" className='navlinks'>View Report</Link>
            <Link to="/team" className='navlinks'>Team</Link>
        </div>
    </header>
    );
}

export default Header;