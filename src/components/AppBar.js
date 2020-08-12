import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'

const AppBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand>
        <img className="logo" src="anchor_logo.png" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/student-affairs" href="#">
            Manage Student Affairs
          </Nav.Link>
          <Nav.Link as={Link} to="/porters" href="#">
            Manage Porters
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#" as="span">
            <em>Tekipeps logged in </em>
            <Button
              onClick={() => {
                console.log('logged out')
              }}
            >
              <em>Logout</em>
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppBar
