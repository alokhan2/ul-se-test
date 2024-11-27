import React, { useState } from 'react'
import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo';

function Form() {

  const [page, setPage] = useState(0);

  const FormTitles = ["Sign Up", "Personal Info", "Other"]

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo />
    } else if (page === 1) {
      return <PersonalInfo />
    } else {
      return <OtherInfo />
    }
  }

  return (
    <div className='form'>
      <div className="form-container">
        <div className="form-header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="form-body">{PageDisplay()}</div>
        <div className="form-footer">
          <button disabled={page == 0} onClick={() => {setPage((currentPage) => currentPage - 1)}}>Prev</button>
          <button disabled={page == FormTitles.length - 1} onClick={() => {setPage((currentPage) => currentPage + 1)}}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Form

// import React, { useState } from 'react';
// import SignUpInfo from './SignUpInfo';
// import PersonalInfo from './PersonalInfo';
// import OtherInfo from './OtherInfo';

// function Form({ onSubmit }) {
//   const [page, setPage] = useState(0);
//   const [signUpInfo, setSignUpInfo] = useState('');
//   const [personalInfo, setPersonalInfo] = useState('');
//   const [otherInfo, setOtherInfo] = useState('');

//   const FormTitles = ["Sign Up", "Personal Info", "Other"];

//   const PageDisplay = () => {
//     if (page === 0) {
//       return <SignUpInfo value={signUpInfo} onChange={setSignUpInfo} />;
//     } else if (page === 1) {
//       return <PersonalInfo value={personalInfo} onChange={setPersonalInfo} />;
//     } else {
//       return <OtherInfo value={otherInfo} onChange={setOtherInfo} />;
//     }
//   };

//   const handleNext = () => {
//     if (page === FormTitles.length - 1) {
//       // On last page, submit the form data
//       onSubmit({ signUpInfo, personalInfo, otherInfo });
//     } else {
//       setPage((currentPage) => currentPage + 1);
//     }
//   };

//   return (
//     <div className='form'>
//       <div className="form-container">
//         <div className="form-header">
//           <h1>{FormTitles[page]}</h1>
//         </div>
//         <div className="form-body">{PageDisplay()}</div>
//         <div className="form-footer">
//           <button disabled={page === 0} onClick={() => setPage((currentPage) => currentPage - 1)}>Prev</button>
//           <button disabled={page === FormTitles.length - 1} onClick={handleNext}>Next</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Form;
