import React from 'react';

import DImg from '../../../images/test-img.png';
import DoctorsInfo from './DoctorsInfo';
import {faPhone } from '@fortawesome/free-solid-svg-icons';
import '../Doctors/doctors.css';

const doctorsInfo =[{
    img: DImg, 
    name: 'Dr. Caudi', 
    phone: '+1811486120', 
    icon: faPhone
}, 
{
    img: DImg, 
    name: 'Dr. Caudi', 
    phone: '+1811486120',
    icon: faPhone
},
{
    img: DImg, 
    name: 'Dr. Caudi', 
    phone: '+1811486120',
    icon: faPhone
},
]

const Doctos = () => {
    return (
        <div className="container doctors-area">
            <div className="row">
                <h3>Our Doctors</h3>
            </div>
            <div className="row">
                {
                    doctorsInfo.map(docInfo => <DoctorsInfo docInfo={docInfo}></DoctorsInfo> )
                }
            </div>
        </div>
    );
};

export default Doctos;