import React, { useState } from 'react'

const AddForm = ({ handleCreateSubmit }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [schoolId, setSchoolId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')

  const submit = (event) => {
    event.preventDefault()
    handleCreateSubmit({
      firstName,
      lastName,
      schoolId,
      email,
      password,
      gender,
    })
    setFirstName('')
    setLastName('')
    setSchoolId('')
    setEmail('')
    setGender('')
    setPassword('')
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-input">
        <label>Firstname &nbsp;</label>
        <input
          type="text"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value.trim())}
          required
        />
      </div>
      <div className="form-input">
        <label>Lastname &nbsp;</label>
        <input
          type="text"
          value={lastName}
          onChange={({ target }) => setLastName(target.value.trim())}
          required
        />
      </div>
      <div className="form-input">
        <label>School Id &nbsp;</label>
        <input
          type="text"
          value={schoolId}
          onChange={({ target }) => setSchoolId(target.value.trim())}
          autoComplete="text"
          required
        />
      </div>
      <div className="form-input">
        <label>Email &nbsp;</label>
        <input
          type="email"
          value={email}
          autoComplete="email"
          onChange={({ target }) => setEmail(target.value.trim())}
          required
        />
      </div>
      <div className="form-input">
        <label>Password &nbsp;</label>
        <input
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={({ target }) => setPassword(target.value.trim())}
          required
        />
      </div>
      <div className="form-input radio">
        <label htmlFor="male">
          <input
            type="radio"
            id="male"
            name="male-female"
            onChange={() => setGender('MALE')}
            required
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            id="female"
            value="female"
            name="male-female"
            onChange={() => setGender('FEMALE')}
          />
          Female
        </label>
      </div>

      <button className="general-button" type="submit">
        Submit
      </button>
    </form>
  )
}

export default AddForm
