import React from 'react';
import Headermain from '../Header-main/Headermain';
import Navbar from '../Navbar/Navbar';
import '../Header/header.css';
import Businessinfo from '../BusinessInfo/Businessinfo';

const Header = () => {
    return (
        
        <div className="header-area">
            <div className="container">
                <Navbar></Navbar>
                <Headermain></Headermain>
                <Businessinfo></Businessinfo>
            </div>
        </div>
    );
};

export default Header;