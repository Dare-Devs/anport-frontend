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
      <div className="form-input radio">
        <label for="male">
          <input type="radio" id="male" name="male-female" />
          Male
        </label>
        <label for="female">
          <input type="radio" id="female" value="female" name="male-female" />
          Female
        </label>
      </div>

      <button className="general-button">Submit</button>
    </div>
  )
}

export default AddForm
