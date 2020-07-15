import React, { useState } from 'react'

const EditUser = ({ users, deleteUser }) => {
  return (
    <div className="edit-user">
      {users.map((user) => (
        <Details user={user} deleteUser={deleteUser} key={user.id} />
      ))}
    </div>
  )
}

export default EditUser

const Details = ({ user, deleteUser }) => {
  const [formView, setFormView] = useState(false)
  const style = formView ? { display: '' } : { display: 'none' }
  return (
    <div className="user-details">
      <div className="user-details-text">
        &nbsp;{user.firstName}&nbsp;{user.lastName}
        <div style={style}>
          <div>&nbsp;{user.schoolId}</div>
          <div>&nbsp;{user.email}</div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="button-group">
        <button
          className="general-button"
          id="edit-button"
          onClick={() => setFormView(!formView)}
        >
          Edit
        </button>
        <button
          className="general-button"
          id="delete-button"
          onClick={() => deleteUser(user)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
