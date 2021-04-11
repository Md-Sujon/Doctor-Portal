import React from 'react';
import image from '../../../images/9.png'
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';
import {faPhone} from '@fortawesome/free-solid-svg-icons'

const DoctrsData=[
    {
        number:'0156524165',
        name:'Dr. Caudi',
        image:image,
        icon:faPhone
        
    },
    {
        number:'0156524165',
        name:'Dr. Caudi',
        image:image,
        icon:faPhone
        
    },
    {
        number:'0156524165',
        name:'Dr. Caudi',
        image:image,
        icon:faPhone
        
    }
]

const Doctors = () => {
    return (
        <section>
             <div className="text-center mt-3 my-5 py-5"> 
             <h4 style={{color: '#1cc7c1'}}>Ours Doctors</h4>
             </div>
             <div className="row d-flex justify-content-center">
               {
               DoctrsData.map(doctor=><DoctorsDetails doctor={doctor}></DoctorsDetails> )  
               }
               </div>
        </section>
    );
};

export default Doctors;