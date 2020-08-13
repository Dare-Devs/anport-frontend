import React, { useState, useEffect } from 'react'
import AddForm from '../../components/AddForm'
import ButtonNav from './ButtonNav'
import EditUser from '../../components/EditUser'
import dsaService from './services/dsa'

const StudentAffairs = () => {
  const [content, setContent] = useState('add')
  const [dsas, setDsas] = useState([])

  useEffect(() => {
    const getdsas = async () => {
      try {
        const dsas = await dsaService.getAll()
        setDsas(dsas)
      } catch (error) {
        alert(`error: ${error.response.data.error}`)
      }
    }
    getdsas()
  }, [])

  const deleteDsa = async (dsa) => {
    try {
      if (
        window.confirm(
          `Delete ${dsa.firstName} ${dsa.lastName} from the system? `
        )
      ) {
        await dsaService.remove(dsa.id)
        setDsas(dsas.filter((d) => d.id !== dsa.id))
      }
    } catch (error) {
      alert(`error: ${error.response.data.error}`)
    }
  }
  const handleCreateSubmit = async (formdata) => {
    try {
      const dsa = await dsaService.create(formdata)
      setDsas([...dsas, dsa])
      alert('Added Successfully')
    } catch (error) {
      alert(`error: ${error.response.data.error}`)
    }
  }

  const submitEditForm = async (user, form) => {
    try {
      const newDsa = await dsaService.update(user.id, form)
      console.log(newDsa)
      setDsas([...dsas.filter((d) => d.id !== newDsa.id), newDsa])
      alert('Updated Successfully')
    } catch (error) {
      alert(`error: ${error.response.data.error}`)
    }
  }

  return (
    <div className="container content">
      <h2 className="heading">STUDENT AFFAIRS</h2>
      <ButtonNav
        button1="Add User"
        button2="Edit Details"
        content={content}
        setContent={setContent}
      />
      {content === 'add' ? (
        <AddForm handleCreateSubmit={handleCreateSubmit} />
      ) : (
        <EditUser
          users={dsas}
          deleteUser={deleteDsa}
          submitEditForm={submitEditForm}
        />
      )}
    </div>
  )
}

export default StudentAffairs
