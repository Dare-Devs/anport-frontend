import React from 'react'

const AddForm = () => {
  return (
    <div className="form">
      <div className="form-input">
        <label>Firstname</label>
        <input type="text" />
      </div>
      <div className="form-input">
        <label>Lastname</label>
        <input type="text" />
      </div>
      <div className="form-input">
        <label>School Id</label>
        <input type="text" />
      </div>
      <div className="form-input">
        <label>Password</label>
        <input type="text" />
      </div>
      <div className="form-input">
        <label>Gender</label>
        <input type="radio" />
        <input type="radio" />
      </div>

      <button className="general-button">Submit</button>
    </div>
  )
}

export default AddForm
