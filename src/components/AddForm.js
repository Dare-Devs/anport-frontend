import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

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
    <div>
      <Form className="add-form" onSubmit={submit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter Firstname"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value.trim())}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter Lastname"
            value={lastName}
            onChange={({ target }) => setLastName(target.value.trim())}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter SchoolId"
            value={schoolId}
            onChange={({ target }) => setSchoolId(target.value.trim())}
            autoComplete="text"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={email}
            autoComplete="email"
            onChange={({ target }) => setEmail(target.value.trim())}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            autoComplete="current-password"
            onChange={({ target }) => setPassword(target.value.trim())}
            required
          />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="radio"
            label="Male"
            name="male-female"
            onChange={() => setGender('MALE')}
            required
          />
          <Form.Check
            type="radio"
            label="Female"
            name="male-female"
            onChange={() => setGender('FEMALE')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Text className="text-muted">
            Do not share the details of this user to anyone else!
          </Form.Text>
        </Form.Group>
        <div className="submit-button-container">
          <Button className="submit-button" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddForm
