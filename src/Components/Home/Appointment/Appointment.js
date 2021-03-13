import React from 'react';
import TestImg from '../../../images/test-img.png';
import '../Appointment/appointment.css';

const Appointment = () => {
    return (
        <div className="appointment-area">
            <div className="container">
                <div className="row app-main">
                    <div className="col-md-6 app-img">
                        <img src={TestImg} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="appointment-text">
                            <h5>Appointment</h5>
                            <h3>Make an Appointment Today</h3>
                            <p>It is a long established fact that a reader will be distractedby the reddable content of a page when looking at its.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;