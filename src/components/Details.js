import React, { useState } from 'react'

const Details = ({ user, deleteUser, submitEditForm }) => {
  const [formView, setFormView] = useState(false)
  const showOnEdit = formView ? { display: '' } : { display: 'none' }
  const hideOnEdit = !formView ? { display: '' } : { display: 'none' }
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [schoolId, setSchoolId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')

  const handleEditSubmit = (event) => {
    event.preventDefault()
    console.log('submitted')
    submitEditForm(user, {
      firstName,
      lastName,
      schoolId,
      email,
      password,
      gender,
    })
  }

  return (
    <div className="user-details">
      <div className="user-details-text">
        <div style={hideOnEdit}>
          {user.firstName}&nbsp;{user.lastName}{' '}
        </div>
        <form style={showOnEdit} onSubmit={handleEditSubmit}>
          <div>
            {user.firstName}&nbsp;
            <input
              type="text"
              placeholder="Firstname"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
          </div>{' '}
          <div>
            {user.lastName}&nbsp;
            <input
              type="text"
              placeholder="Lastname"
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
            />
          </div>
          <div>
            {user.schoolId}&nbsp;
            <input
              type="text"
              placeholder="School Id"
              value={schoolId}
              onChange={({ target }) => setSchoolId(target.value)}
            />
          </div>
          <div>
            {user.email}&nbsp;
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div>
            Password&nbsp;
            <input
              type="password"
              autoComplete="current-password "
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="form-input radio">
            <label htmlFor="male">
              <input
                type="radio"
                id="male"
                name="male-female"
                onChange={() => setGender('MALE')}
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                name="male-female"
                onChange={() => setGender('FEMALE')}
              />
              Female
            </label>
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
