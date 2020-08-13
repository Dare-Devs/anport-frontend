import React from 'react'
import { Table, Button } from 'react-bootstrap'

const EditUser = ({ users, deleteUser, submitEditForm }) => {
  return (
    <div className="edit-user">
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>School Id</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{users.indexOf(user) + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.schoolId}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>
                <Button className="edit-button">Edit</Button>
              </td>
              <td>
                <Button className="delete-button">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default EditUser
