import React from 'react';
import '../Services/services.css';

import Floriede from '../../../images/floride.png';
import Cavity from '../../../images/cavity.png';
import Tooth from '../../../images/tooth.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const serviceInfo = [
    {
    name: 'Floriede Treatment', 
    img: Floriede
    }, 
    {
    name: 'Cavity Filling', 
    img: Cavity
    }, 
    {
    name: 'Teach Whitening', 
    img: Tooth
    }
]
const Services = () => {
    return (
       <div className="container">
            <section className="row service-area">
            <div className="serivces-header">
                <h5>Our Serivces</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="row">
                {
                    serviceInfo.map(services => <ServicesDetails services={services}></ServicesDetails>)
                }
            </div>

        </section>
       </div>
    );
};

export default Services;