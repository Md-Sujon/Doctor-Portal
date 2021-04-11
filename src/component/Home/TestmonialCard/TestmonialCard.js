import React from 'react';
import './TestmonialCard.css'

const TestmonialCard = (props) => {
    const {name,image,country,description}=props.testimonial;
    return (
        <div className="col-md-3 card shadow-sm m-2">
        <div className="card-body">
            <p className="card-text text-center">{description}</p>
        </div>
        <div className="card-footer d-flex  align-items-center">
            <img className="mx-3" src={image} alt="" width="60"/>
            <div>
                <h6 className="text-primary">{name}</h6>
                <p className="m-0">{country}</p>
            </div>
        </div>
   </div>
         
       
       
    
           
       
    );
};

export default TestmonialCard;