import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctors = () => {
    const {info,setInfo}=useState({});

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right:0, backgroundColor:'#F4FDFB' }}>
                <h5>Add a Doctors</h5>

                <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" name="email" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" class="form-control" name="name" placeholder="Name"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Upload Image</label>
    <input type="file" class="form-control" id="exampleInputPassword1" placeholder="Upload Image"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

            </div>

        </section>
    );
};

export default AddDoctors;