import React from 'react';
import image1 from '../../../images/6.png'
import image2 from '../../../images/7.png'
import image3 from '../../../images/8.png'
import BlogCard from '../BlogCard/BlogCard';

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

const Blog = () => {
    return (
        <section>
             <div className="text-center mt-3 my-5 py-5"> 
             <h4 style={{color: '#1cc7c1'}}>Our Blog</h4>
             <h1 className="mt-3">From Our Blog News</h1>
             </div>

           
               <div className="row d-flex justify-content-center">
               {
                TestimonialData.map(data=><BlogCard data={data}></BlogCard> )  
               }
               </div>
        </section>
    );
};

export default Blog;