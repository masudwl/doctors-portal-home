import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './infocard.css';

const InfoCard = ({info}) => {
    return (

            <div className="col-md-4">
               <div className={`d-flex info-${info.background} info-card`}>
               <div>
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div className="info-text">
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
                </div>
            </div>
    );
};

export default InfoCard;