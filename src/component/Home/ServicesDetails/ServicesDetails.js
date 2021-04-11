import React from 'react';

const ServicesDetails = ({services}) => {
    return (
        <div className="col-md-4 text-center pt-5">
            <img style={{height:'50px'}} src={services.img} alt=""/>
            <h4 className="pt-3">{services.name}</h4>
            <p className="text-secondary">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
    );
};

export default ServicesDetails;