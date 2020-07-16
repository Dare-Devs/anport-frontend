import React, { useState, useEffect } from 'react'
import AddForm from '../../components/AddForm'
import ButtonNav from './ButtonNav'
import EditUser from '../../components/EditUser'
import dsaService from './services/dsa'

const StudentAffairs = () => {
  const [content, setContent] = useState(1)
  const [dsas, setDsas] = useState([])

  useEffect(() => {
    const getdsas = async () => {
      try {
        const dsas = await dsaService.getAll()
        setDsas(dsas)
      } catch (error) {
        console.log(error)
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
      console.log(error.response)
    }
  }
  const handleCreateSubmit = async (formdata) => {
    try {
      const dsa = await dsaService.create(formdata)
      setDsas([...dsas, dsa])
    } catch (error) {
      console.log(error.response)
    }
  }

  const submitEditForm = async (user, form) => {
    try {
      const newDsa = await dsaService.update(user.id, form)
      console.log(newDsa)
    } catch (error) {
      console.log(error.response)
    }
  }
  const adminMainPageContent = () => {
    if (content === 1)
      return <AddForm handleCreateSubmit={handleCreateSubmit} />
    if (content === 2)
      return (
        <EditUser
          users={dsas}
          deleteUser={deleteDsa}
          submitEditForm={submitEditForm}
        />
      )
  }
  return (
    <div className="admin-main-page">
      <ButtonNav
        button1="Add StudentAffairs"
        button2="Edit Student Affairs Details"
        setContent={setContent}
      />
      <div className="admin-page-content">{adminMainPageContent()}</div>
    </div>
  )
}

export default StudentAffairs
