import React, { useState, useEffect } from 'react'
import porterService from './services/porter'
import AddForm from '../../components/AddForm'
import ButtonNav from './ButtonNav'
import EditUser from '../../components/EditUser'

const Porters = () => {
  const [content, setContent] = useState(1)
  const [porters, setPorters] = useState([])

  useEffect(() => {
    const getporters = async () => {
      try {
        const porters = await porterService.getAll()
        setPorters(porters)
      } catch (error) {
        alert(`error: ${error.response.data.error}`)
      }
    }
    getporters()
  }, [])

  const deletePorter = async (porter) => {
    try {
      if (
        window.confirm(
          `Delete ${porter.firstName} ${porter.lastName} from the system? `
        )
      ) {
        await porterService.remove(porter.id)
        setPorters(porters.filter((p) => p.id !== porter.id))
      }
    } catch (error) {
      alert(`error: ${error.response.data.error}`)
    }
  }
  const handleCreateSubmit = async (formdata) => {
    try {
      const porter = await porterService.create(formdata)
      setPorters([...porters, porter])
      alert('Added Successfully')
    } catch (error) {
      alert(`error: ${error.response.data.error}`)
    }
  }
  const submitEditForm = async (user, form) => {
    try {
      const newPorter = await porterService.update(user.id, form)
      setPorters([...porters.filter((d) => d.id !== newPorter.id), newPorter])
      alert('Updated Successfully')
    } catch (error) {
      alert(`error: ${error.response.data.error}`)
    }
  }
  const adminMainPageContent = () => {
    if (content === 1)
      return <AddForm handleCreateSubmit={handleCreateSubmit} />
    if (content === 2)
      return (
        <EditUser
          users={porters}
          deleteUser={deletePorter}
          submitEditForm={submitEditForm}
        />
      )
  }
  return (
    <div className="admin-main-page">
      <ButtonNav
        button1="Add Porter"
        button2="Porter Details"
        setContent={setContent}
      />
      <div className="admin-page-content">{adminMainPageContent()}</div>
    </div>
  )
}

export default Porters
