import React from 'react'

const ButtonNav = ({ button1, button2, button3, setContent }) => {
  return (
    <div className="admin-page-nav">
      <button className="general-button" onClick={() => setContent(1)}>
        {button1}
      </button>
      <button className="general-button" onClick={() => setContent(2)}>
        {button2}
      </button>
      <button className="general-button" onClick={() => setContent(3)}>
        {button3}
      </button>
    </div>
  )
}

export default ButtonNav
