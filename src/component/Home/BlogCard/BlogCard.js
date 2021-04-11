import React from 'react';

const BlogCard = (props) => {
    const {name,image,country,description}=props.data;
    return (
        <div className="col-md-3 card m-2">

            <div className=" d-flex pt-3 align-items-center">
            <img className="mx-3" src={image} alt="" width="60"/>
            <div>
                <h6 className="text-primary">{name}</h6>
                <p className="m-0">{country}</p>
            </div>
        </div>


        <div className="card-body">
            <p className="card-text text-center">{description}</p>
        </div>
        
   </div>
    );
};

export default BlogCard;