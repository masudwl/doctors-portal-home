import React from 'react';

const ServicesDetails = ({services}) => {
    return (
        <div className="col-md-4 servicedetails">
            <img src={services.img} alt=""/>
            <h3>{services.name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus illo tempore aliquid eveniet debitis?</p>
        </div>
    );
};

export default ServicesDetails;