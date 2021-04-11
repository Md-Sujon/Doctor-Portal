import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="background">
            
            <di className="d-flex justify-content-center  contact-container">
            

            <div className="col-md-6 mt-5 m-5 contact">
            <div className="text-center ">
                <p className="text-center text-primary fs-3 bw-bold ms-5">CONTACT US</p>
                <h2 className="text-white ms-5">Always Connected With us</h2>
                </div>
            <br/>
            <input type="email" class="form-control ms-5" id="exampleFormControlInput1" placeholder="Email Address"></input>
            <br/>
            <input type="email" class="form-control ms-5" id="exampleFormControlInput1" placeholder="Subject"></input>
            <br/>
             <textarea class="form-control ms-5" id="exampleFormControlTextarea1"  placeholder="Your Message" rows="3"></textarea>
           <br/>
            <button className="btn btn-primary ms-5">Submit</button>
        </div>
    </di>



    
        </div>
    );
};

export default ContactUs;