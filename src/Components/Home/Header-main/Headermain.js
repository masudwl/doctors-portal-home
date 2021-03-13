import React from 'react';
import chair from '../../../images/Mask Group 1.png';
import '../../../Components/main.css';

const Headermain = () => {
    return (
        <main className="row d-flex align-items-center header-main">
            <div className="col-md-4">
                <h1>Your New Smile starts Here</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt deleniti saepe accusamus quae ut earum at veritatis praesentium laboriosam beatae?</p>
                <a href="#" className="btn btn-primary">Get Appointment</a>
            </div>
            <div className="col-md-6 offset-md-2">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default Headermain;