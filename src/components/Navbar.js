import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <img src="anchor_logo.png" alt="logo" />
        <div className="spacer"></div>
        <ul>
          <li>
            <button>LOGOUT</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
