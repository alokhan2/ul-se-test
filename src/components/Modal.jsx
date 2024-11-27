import React, { useState } from "react";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal}>Open</button>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h1>Hello Modal</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, expedita.</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;