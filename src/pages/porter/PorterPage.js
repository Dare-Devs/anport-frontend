import React from 'react'
import Navbar from '../../components/Navbar'
import NewPost from './NewPost'

const PorterPage = () => {
  return (
    <div className="porter-page">
      <Navbar />
      <div className="porter-main-page">
        <NewPost />
      </div>
    </div>
  )
}

export default PorterPage
