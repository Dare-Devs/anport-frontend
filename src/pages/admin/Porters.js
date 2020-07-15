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
        console.log(error)
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
      console.log(error.response)
    }
  }
  const handleCreateSubmit = async (formdata) => {
    try {
      const porter = await porterService.create(formdata)
      setPorters([...porters, porter])
    } catch (error) {
      console.log(error.response)
    }
  }
  const adminMainPageContent = () => {
    if (content === 1)
      return <AddForm handleCreateSubmit={handleCreateSubmit} />
    if (content === 2)
      return <EditUser users={porters} deleteUser={deletePorter} />
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
