import React from 'react';
import '../Testimonial/testimonial.css';

const TestimonilDetails = ({testimonial}) => {
    return (
        <div className="col-md-4 testimonial-details">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit est sit iusto. In doloribus cumque exercitationem non, recusandae ratione, laudantium voluptas magni nihil nostrum quibusdam incidunt rem harum voluptatibus ex.</p>
            <div className="small-des">
                <img src={testimonial.img} alt=""/>
                <h6>{testimonial.name}</h6>
                <p>{testimonial.location}</p>
            </div>
        </div>  
    );
};

export default TestimonilDetails;