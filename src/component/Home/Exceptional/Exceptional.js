import React from 'react';
import images from '../../../images/4.png'

const Exceptional = () => {
    return (
        <section className="d-flex justify-content-center mt-5">
            <div className="col-md-3">
                 <img style={{height:'350px'}} src={images} alt=""/>
            </div>
            <div className="col-md-4 mt-5">
                <h1>Exceptional Dental <br/>Care, on Your Terms</h1>
                <p className="text-secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </section>
    );
};

export default Exceptional;