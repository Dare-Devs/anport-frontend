import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonNav = ({ button1, button2, setContent, content }) => {
  const showAdd = content === 'add' ? { display: 'none' } : { display: '' }
  const showEdit = content === 'edit' ? { display: 'none' } : { display: '' }
  return (
    <div className="add-edit-nav">
      <Button
        style={showAdd}
        className="nav-button"
        onClick={() => setContent('add')}
      >
        {button1} &#8594;
      </Button>
      <Button
        style={showEdit}
        className="nav-button"
        onClick={() => setContent('edit')}
      >
        {button2} &#8594;
      </Button>
    </div>
  )
}

export default ButtonNav
