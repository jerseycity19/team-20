import React from "react"

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">GlobeChat</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Profile" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar