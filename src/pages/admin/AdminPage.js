import React from 'react'
import AddForm from '../../components/AddForm'

const AdminPage = () => {
  return (
    <div className="admin-page">
      <div className="admin-nav-bar">
        <nav>
          <img src="anchor_logo.png" alt="logo" />
          <div className="spacer"></div>
          <ul>
            <li>
              <button href="/">Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar">
        <div className="sidebar-content">
          <ul>Manage Student Affairs</ul>
          <ul>Manage Porters</ul>
        </div>
      </div>
      <div className="admin-main-page">
        <div className="admin-page-nav">
          <button className="general-button">Create Porter</button>
          <button className="general-button">Edit Porter Details</button>
          <button className="general-button">Delete Porter</button>
        </div>
        <div className="admin-page-content">
          <AddForm />
        </div>
      </div>
    </div>
  )
}

export default AdminPage
