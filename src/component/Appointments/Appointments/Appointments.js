import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import AppointmentHeader from '../AppointmentsHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';



const Appointments = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    const handleDateChange = date =>{
       setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointments;