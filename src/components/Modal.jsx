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

// import React, { useState } from 'react';

// const Modal = ({ isOpen, onClose, onComplete }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [generatedLink, setGeneratedLink] = useState('');

//   if (!isOpen) return null;

//   const handleNext = () => setStep(step + 1);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStep(3); // Move to loading step

//     // Simulate resource gathering and link generation
//     setTimeout(() => {
//       const newLink = `/resource/${Math.random().toString(36).substring(7)}`; 
//       setGeneratedLink(newLink);
//       setLoading(false);
//       onComplete(newLink); // Inform parent about completion
//       onClose(); // Close modal
//     }, 2000); 
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         {step === 1 && (
//           <form>
//             <input type="text" name="field1" onChange={handleChange} placeholder="Field 1" />
//             <input type="text" name="field2" onChange={handleChange} placeholder="Field 2" />
//             <button type="button" onClick={handleNext}>Next</button>
//           </form>
//         )}

//         {step === 2 && (
//           <form onSubmit={handleSubmit}>
//             {/* 5 text fields */}
//             {[...Array(5)].map((_, i) => (
//               <input key={i} type="text" name={`input${i + 1}`} onChange={handleChange} placeholder={`Input ${i + 1}`} />
//             ))}
//             <button type="submit">Submit</button>
//           </form>
//         )}

//         {step === 3 && (
//           <div>
//             {loading ? <p>Gathering resources...</p> : <p>Completed!</p>}
//           </div>
//         )}

//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;