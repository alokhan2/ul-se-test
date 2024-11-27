import React from 'react'

function SignUpInfo() {
  return (
    <div className="research-topic-container">
      <div className="form-group">
        <label htmlFor="marketResearch">Market of Interest</label>
        <input className="textfield" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="additional-context">Provide additional context for the market of interest</label>
        <textarea name="additional-context" row="5"></textarea>
      </div>
    </div>
  )
}

export default SignUpInfo