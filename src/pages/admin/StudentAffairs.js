import React, { useState } from 'react'
import AddForm from '../../components/AddForm'
import ButtonNav from './ButtonNav'

const StudentAffairs = () => {
  const [content, setContent] = useState(1)

  const adminMainPageContent = () => {
    if (content === 1) return <AddForm />
    if (content === 2) return null
    if (content === 3) return null
  }
  return (
    <div className="admin-main-page">
      <ButtonNav
        button1="Add StudentAffairs"
        button2="Edit Student Affairs Details"
        button3="Delete Student Affairs"
        setContent={setContent}
      />
      <div className="admin-page-content">{adminMainPageContent()}</div>
    </div>
  )
}

export default StudentAffairs
