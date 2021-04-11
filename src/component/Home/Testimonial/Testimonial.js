import React from 'react';
import image1 from '../../../images/6.png'
import image2 from '../../../images/7.png'
import image3 from '../../../images/8.png'
import TestmonialCard from '../TestmonialCard/TestmonialCard';

import './Testimonial.css'


const TestimonialData=[
    {
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name:'Winson Harry',
        image:image1,
        country:'USA'
    },
    {
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name:'Winson Harry',
        image:image2,
        country:'USA'
    },
    {
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name:'Winson Harry',
        image:image3,
        country:'USA'
    }
]


const Testimonial = () => {
    return (
        <section >
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase text">Testimonial</h5>
                   <h1 className="text mb-4">What Our Patients <br/> Says </h1>
               </div>
               <div className="row d-flex justify-content-center">
                    {
                       TestimonialData.map(testimonial => <TestmonialCard testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonial;