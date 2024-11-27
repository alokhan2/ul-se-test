import React from "react";

function PersonalInfo() {
  return (
    <div className="research-questions-container">
      <div className="form-group">
        <label htmlFor="question-1">Question 1</label>
        <input className="textfield" type="text" name="question-1" value="What new safety standards should be created around Battery Technology?" />
      </div>
      <div className="form-group">
        <label htmlFor="question-2">Question 2</label>
        <input className="textfield" type="text" name="question-2" value="What are the emerging technologies around Battery Technology?" />
      </div>
      <div className="form-group">
        <label htmlFor="question-3">Question 3</label>
        <input className="textfield" type="text" name="question-3" value="What are the ongoing and emerging safety risks around Battery Technology?" />
      </div>
      <div className="form-group">
        <label htmlFor="question-4">Question 4</label>
        <input className="textfield" type="text" name="question-4" value="Who are the specific stakeholders around Battery Technology?" />
      </div>
      <div className="form-group">
        <label htmlFor="question-5">Question 5</label>
        <input className="textfield" type="text" name="question-5" value="From a standards development perspective, what further research should be conducted around Battery Technology?" />
      </div>
    </div>
  );
}

export default PersonalInfo;
