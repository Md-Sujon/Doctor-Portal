import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')


const AppointmentFrom = ({modalIsOpen, closeModal, AppointmentNow,date}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
        <div className="">
          
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

         <h4 className="text-center text-primary">{AppointmentNow}</h4>
         <p className="text-center text-primary"><small>{date.toDateString()}</small></p>
         <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" className="form-control" />
                        

                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" placeholder="Phone Number" className="form-control" />
                        
                    </div>
                    <div className="form-group">
                        <input type="text"  name="email" placeholder="Email" className="form-control" />
                        
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender"  >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                           

                        </div>
                        <div className="col-4">
                            <input  className="form-control" name="age" placeholder="Your Age" type="number" />
                           
                        </div>
                        <div className="col-4">
                            <input  className="form-control" name="weight" placeholder="Weight" type="number" />
                            
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn justify-conte btn-primary">Send</button>
                    </div>
                </form>
          
        </Modal>
        </div>
    );
};

export default AppointmentFrom;