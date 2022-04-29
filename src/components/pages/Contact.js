import React, { useState } from "react";
import Modal from "../../components/Modal";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="container mt-1 mb-5">
      <button
        className="btn btn-primary openModalbtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
     {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
};

export default Contact;
