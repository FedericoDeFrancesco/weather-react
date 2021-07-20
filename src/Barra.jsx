import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const barra = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Weather</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <div className="searchBox">
          <div>
            <input type="text" className="search-bar" placeholder="Search..." />
          </div>
          <div>
            <i class="fas fa-search"></i>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default barra;
