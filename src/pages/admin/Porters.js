import React, { useState } from 'react'
import AddForm from '../../components/AddForm'
import ButtonNav from './ButtonNav'

const Porters = () => {
  const [content, setContent] = useState(1)

  const adminMainPageContent = () => {
    if (content === 1) return <AddForm />
    if (content === 2) return null
    if (content === 3) return null
  }
  return (
    <div className="admin-main-page">
      <ButtonNav
        button1="Create Porter"
        button2="Edit Porter Details"
        button3="Delete Porter"
        setContent={setContent}
      />
      <div className="admin-page-content">{adminMainPageContent()}</div>
    </div>
  )
}

export default Porters
