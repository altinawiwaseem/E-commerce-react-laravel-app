import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-COMMERCE</Navbar.Brand>
          <Nav className="mr-auto navbar-wrapper">
            <Link to="/add">Add Product</Link>
            <Link to="/update">Update Products</Link>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
