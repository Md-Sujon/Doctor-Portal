import React from 'react';
import images from '../../../images/5.png'
import './Appointment.css'

const Appointment = () => {
    return (
        <div className="background">
            <section className="d-flex justify-content-center mt-5 appointment-container">
        <div className="col-md-5">
             <img  src={images} alt=""/>
        </div>
        <div className="col-md-4 mt-5">
            <h4 className="text-primary">APPOINTMENT</h4>
            <h3 className="text-white mt-2">Make an appointment <br/>Today</h3>
            <p className="text-white mt-3">It is a long established fact that a reader will be distracted It is a long established</p>
            <button className="btn btn-primary mt-3">Learn More</button>
        </div>
    </section>
        </div>
    );
};

export default Appointment;