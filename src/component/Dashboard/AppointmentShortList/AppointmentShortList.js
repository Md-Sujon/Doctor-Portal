import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
        <table className="table table-border">
            <thead>
                <tr>
                <th className="text-primary" scope="col">Name</th>
                <th className="text-primary" scope="col">Phone</th>
                <th className="text-primary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;