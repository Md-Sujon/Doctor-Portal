import React from 'react';
import AppointmentFrom from '../AppointmentFrom/AppointmentFrom';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal(){
      setIsOpen(false);
    }



    return (
        <div className="col-md-4 mt-5 ">
            <div className="card p-3 ">
                <div className="card-body text-center ">
                        <h5 className="card-title text-primary">{booking.subject}</h5>
                        <h6>{booking.visitingHour}</h6>
                        <p>{booking.totalSpace} SPACE AVAILABLE</p>\
                        <button onClick={openModal} className="btn btn-primary text-uppercase">Book Appointment</button>
                        <AppointmentFrom modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date}></AppointmentFrom>
                </div>

            </div>
        </div>
    );
};

export default BookingCard;