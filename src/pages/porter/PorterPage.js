import React from 'react'
import AppBar from '../../components/AppBar'
import NewPost from './NewPost'

const PorterPage = () => {
  return (
    <div className="porter-page">
      <AppBar />
      <div className="porter-main-page">
        <NewPost />
      </div>
    </div>
  )
}

export default PorterPage
