import React from 'react';
import char from '../../../images/Char.png'

const HomeMain = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
           <h1 style={{color:'#3a4256'}}>Your New Smile<br/> Starts Here</h1>
           <p className="text-secondary">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
           <button className="btn btn-primary">GET APPOINTMENT</button>
           
            </div>
            <div className="col-md-6">
           <img src={char} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HomeMain;