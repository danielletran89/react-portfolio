import React from "react";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
      <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/About">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Portfolio">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
    );
  }

export default Navbar