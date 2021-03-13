import React from 'react';
import heroImg from '../../../images/hero-img.png'; 

import '../HeroService/hero.css';

const HeroService = () => {
    return (
        <div className="container hero-area">
            <div className="row ">
            <div className="col-md-6">
                <img src={heroImg} alt=""/>    
            </div>
            <div className="col-md-6">
                <div className="hero-text">
                <h2>Exceptional Dental Care, on Your Terms</h2>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate atque nostrum assumenda sint architecto deserunt quibusdam quidem perspiciatis, consectetur voluptatum neque culpa recusandae dolorem officia perferendis mollitia voluptates quasi soluta! Molestias hic dolor nulla minima quidem non doloribus adipisci culpa! Iure ipsum maxime sint atque! Eius impedit odio quod?</p>
                <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>    
        </div>
        </div>
    );
};

export default HeroService;