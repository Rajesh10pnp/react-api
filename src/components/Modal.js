import React from "react";
import '../../src/App.css'

const Modal = ({closeModal}) => {
  return (
    <div className="bg-primary text-white" >
      <div className="container mt-5">
        <button onClick={()=>closeModal(false)} className=" btn-danger">x</button>
        <div className="title">
          <p>Are you sure want to continue?</p>
        </div>
        <div className="body">
          <p>Next page is awesome</p>
        </div>
        <div className="footer">
          <button onClick={()=>closeModal(false)} className="btn btn-danger m-3">Cancel</button>
          <button to="/contact" className="btn btn-success">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
