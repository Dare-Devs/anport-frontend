import React, { useState } from 'react'
import Porters from './Porters'
import StudentAffairs from './StudentAffairs'

const AdminPage = () => {
  const [currentPage, setCurrentPage] = useState(2)

  const adminMainPage = () => {
    if (currentPage === 1) return <StudentAffairs />
    if (currentPage === 2) return <Porters />
  }
  return (
    <div className="admin-page">
      <div className="nav-bar">
        <nav>
          <img src="anchor_logo.png" alt="logo" />
          <div className="spacer"></div>
          <ul>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar">
        <div className="sidebar-content">
          <ul onClick={() => setCurrentPage(1)}>Manage Student Affairs</ul>
          <ul onClick={() => setCurrentPage(2)}>Manage Porters</ul>
        </div>
      </div>
      {adminMainPage()}
    </div>
  )
}

export default AdminPage
