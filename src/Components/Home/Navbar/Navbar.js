import React from 'react';
import '../Navbar/navbar.css';
const Navbar = () => {
    return (
       <div className="container">
           <div className="row">
           <nav>
            <ul className="">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Dental Service</a></li>
                <li><a href="#" className="text-white">Reviews</a></li>
                <li><a href="#" className="text-white">Blog</a></li>
                <li><a href="#"className="text-white">Contact Us</a></li>
            </ul>
        </nav>
           </div>
       </div>
    );
};

export default Navbar;