import React, { useState } from 'react'

const Details = ({ user, deleteUser }) => {
  const [formView, setFormView] = useState(false)
  const showOnEdit = formView ? { display: '' } : { display: 'none' }
  const hideOnEdit = !formView ? { display: '' } : { display: 'none' }

  return (
    <div className="user-details">
      <div className="user-details-text">
        <div style={hideOnEdit}>
          {user.firstName}&nbsp;{user.lastName}{' '}
        </div>
        <form style={showOnEdit}>
          <div>
            {user.firstName}&nbsp;
            <input type="text" placeholder="Firstname" />
          </div>{' '}
          <div>
            {user.lastName}&nbsp;
            <input type="text" placeholder="Lastname" />
          </div>
          <div>
            {user.schoolId}&nbsp;
            <input type="text" placeholder="School Id" />
          </div>
          <div>
            {user.email}&nbsp;
            <input type="email" placeholder="Email" />
          </div>
          <div>
            Password&nbsp;
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="spacer"></div>
      <div className="button-group">
        <button
          className="general-button edit-button"
          onClick={() => setFormView(!formView)}
        >
          Edit
        </button>
        <button
          className="general-button delete-button"
          onClick={() => deleteUser(user)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Details
