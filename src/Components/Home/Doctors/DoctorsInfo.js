import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../Doctors/doctors.css';

const DoctorsInfo = ({docInfo}) => {
    return (
        <div className="col-md-4 doctors-box">
            <img src={docInfo.img} alt=""/>
            <div className="doctor-text">
            <h6>{docInfo.name}</h6>
            <p><span><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span>{docInfo.phone}</p>
            
            </div>
        </div>
    );
};

export default DoctorsInfo;