import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BussinessInfoCard.css'

const BussinessInfoCard = ({bussInfo}) => {
    return (
        <div className="col-md-4 text-white card-container">
            <div className={`d-flex justify-content-center info-container bussInfo-${bussInfo.backGround}`}>
            <div className="ml-3 p-3">
            <FontAwesomeIcon icon={bussInfo.icon}/>
            </div>
            <div>
                <h6>{bussInfo.title}</h6>
                <small>{bussInfo.description}</small>

            </div>
            </div>
        </div>
    );
};

export default BussinessInfoCard;