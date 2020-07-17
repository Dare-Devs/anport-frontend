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
    submitEditForm(user, {
      firstName,
      lastName,
      schoolId,
      email,
      password,
      gender,
    })
    setFormView(false)
  }

  const buttonToHide = formView ? { display: 'none' } : { display: '' }
  const buttonToShow = !formView ? { display: 'none' } : { display: '' }
  return (
    <div className="user-details">
      <div className="user-details-text">
        <div style={hideOnEdit}>
          {user.firstName}&nbsp;{user.lastName}{' '}
        </div>
        <form style={showOnEdit} onSubmit={handleEditSubmit}>
          <table>
            <tbody>
              <tr>
                <td>{user.firstName}</td>
                <td>
                  <input
                    type="text"
                    placeholder="Firstname"
                    value={firstName}
                    onChange={({ target }) => setFirstName(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>{user.lastName}</td>
                <td>
                  <input
                    type="text"
                    placeholder="Lastname"
                    value={lastName}
                    onChange={({ target }) => setLastName(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
              </tr>
              <tr>
                <td>{user.schoolId}</td>
                <td>
                  <input
                    type="text"
                    placeholder="School Id"
                    value={schoolId}
                    onChange={({ target }) => setSchoolId(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>{user.email}</td>
                <td>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    autoComplete="current-password "
                    placeholder="Password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="form-input radio">
            <label htmlFor="male">
              <input
                type="radio"
                name="male-female"
                onChange={() => setGender('MALE')}
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                name="male-female"
                onChange={() => setGender('FEMALE')}
              />
              Female
            </label>
          </div>
          <button type="submit" className="edit-submit-button">
            Submit
          </button>
        </form>
      </div>
      <div className="spacer"></div>
      <div className="button-group">
        <button
          className="general-button edit-button"
          style={buttonToHide}
          onClick={() => setFormView(true)}
        >
          Edit
        </button>
        <button
          className="general-button cancel-button"
          style={buttonToShow}
          onClick={() => setFormView(false)}
        >
          Cancel
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
