import React from 'react'
import Details from './Details'
import { Table } from 'react-bootstrap'

const EditUser = ({ users, deleteUser, submitEditForm }) => {
  return (
    <div className="edit-user">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>SchoolId</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{users.indexOf(user) + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.schoolId}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <Details
          user={user}
          deleteUser={deleteUser}
          key={user.id}
          submitEditForm={submitEditForm}
        /> */}
    </div>
  )
}

export default EditUser
