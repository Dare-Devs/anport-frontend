import React from 'react'
import Details from './Details'

const EditUser = ({ users, deleteUser, submitEditForm }) => {
  return (
    <div className="edit-user">
      {users.map((user) => (
        <Details
          user={user}
          deleteUser={deleteUser}
          key={user.id}
          submitEditForm={submitEditForm}
        />
      ))}
    </div>
  )
}

export default EditUser
