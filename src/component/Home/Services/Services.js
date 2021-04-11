import React from 'react';
import Fluoride from '../../../images/1.png'
import Cavity from '../../../images/2.png'
import Teath from '../../../images/3.png'
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const serviceData =[
    {
        name: 'Fluoride Treatment',
        img:Fluoride
    },
    {
        name: 'Cavity Filling',
        img:Cavity
    },
    {
        name: 'Teath Whitening',
        img:Teath
    }
]


const Services = () => {

    return (
        <section className="services-container">
             <div className="text-center mt-3"> 
             <h4 style={{color: '#1cc7c1'}}>Our Services</h4>
             <h1 className="mt-3">Services We Provide</h1>
             </div>

             <div className=" d-flex justify-content-center">
               <div className="w-75 row">
               {
                serviceData.map( services=><ServicesDetails services={services}></ServicesDetails>)  
               }
               </div>
        </div>


        </section>
    );
};

export default Services;