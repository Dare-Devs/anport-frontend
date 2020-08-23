import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const AppBar = ({ routes, setPage }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand>
        <img className="logo" src="/anchor_logo.png" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {routes.map((route, i) => (
            <Nav.Link key={i} onClick={() => setPage(route.value)}>
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
        <Nav>
          <Nav.Link href="#" as="span">
            <em>Tekipeps logged in </em>
            <Button
              className="logout-button"
              onClick={() => {
                console.log("logged out");
              }}
            >
              <em>Logout</em>
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppBar;
