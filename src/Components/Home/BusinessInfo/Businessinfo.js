import React from 'react';

import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const businessInfo = [{
    title: 'Opening Hours', 
    description: 'We are onep 7 days', 
    icon: faClock, 
    background: 'primary'
}, 
{
    title: 'Visit our location', 
    description: 'Motijheel, Dhaka, Bangladesh', 
    icon: faMapMarker, 
    background: 'dark'
},
{
    title: 'Call us Now', 
    description: '880 1811 486120', 
    icon: faPhone, 
    background: 'primary'
}
]

const Businessinfo = () => {
    return (
       <section className="row">
           {
               businessInfo.map(info => <InfoCard info={info}></InfoCard> )
           }
       </section>
    );
};

export default Businessinfo;