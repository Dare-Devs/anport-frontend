import React, { useState } from 'react'

const EditUser = ({ porters, deletePorter }) => {
  return (
    <div className="edit-user">
      {porters.map((porter) => (
        <Details porter={porter} deletePorter={deletePorter} />
      ))}
    </div>
  )
}

export default EditUser

const Details = ({ porter, deletePorter }) => {
  const [formView, setFormView] = useState(false)
  const style = formView ? { display: '' } : { display: 'none' }
  return (
    <div className="user-details" key={porter.id}>
      <div className="user-details-text">
        &nbsp;{porter.firstName}&nbsp;{porter.lastName}
        <div style={style}>
          <div>&nbsp;{porter.schoolId}</div>
          <div>&nbsp;{porter.email}</div>
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
          onClick={() => deletePorter(porter)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
