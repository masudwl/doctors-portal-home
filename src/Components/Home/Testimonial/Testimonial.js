import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import '../Testimonial/testimonial.css';

import Imran from '../../../images/imran.png'; 
import Mukul from '../../../images/mukul.png'; 
import Popy from '../../../images/popy.png'; 
import TestimonilDetails from './TestimonilDetails';


const testimonial = [{
    description: '', 
    img: Imran, 
    name: 'Imran Mahmud', 
    location: 'Khulna'
}, 
{
    description: '', 
    img: Mukul, 
    name: 'Mukul Akter', 
    location: 'Chattogram'
}, 
{
    description: '', 
    img: Popy, 
    name: 'Sumiya Popy', 
    location: 'Dhaka'
}
]

const Testimonial = () => {
    return (
        <div className="testimonial_area">
            <div className="container">
                <div className="row">
                    <div className="testimonial-header">
                        <h5>Testimonial</h5>
                        <h3>What's Our Patients Say</h3>
                        <span><FontAwesomeIcon className="info-icon" icon={faQuoteLeft}></FontAwesomeIcon></span>
                    </div>
                </div>
                <div className="row">
                    {
                        testimonial.map(testimonial => <TestimonilDetails testimonial={testimonial}></TestimonilDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;