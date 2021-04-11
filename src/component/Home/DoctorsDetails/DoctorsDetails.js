import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DoctorsDetails = (props) => {
    const {number,image,name,icon}=props.doctor;
    return (
        <div className="col-md-3 text-center">
            <img style={{width:'250px'}} src={image} alt=""/>
            <h3>{name}</h3>
            <p ><FontAwesomeIcon style={{color: '#1cc7c1'}} icon={icon}/>{number}</p>
        </div>
    );
};

export default DoctorsDetails;