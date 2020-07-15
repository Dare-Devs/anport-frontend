import React from 'react'
import Details from './Details'

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
