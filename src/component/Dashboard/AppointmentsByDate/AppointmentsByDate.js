import React from 'react';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h1>Appointment: {appointments.length}</h1>
            {
               appointments.map(appoint =>  <li key={appoint._id}>{appoint.name}</li>) 
            }
        </div>
    );
};

export default AppointmentsByDate;