import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Header = () => {
  const { userAuth } = useContext(UserContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-COMMERCE</Navbar.Brand>
          <Nav className="mr-auto navbar-wrapper">
            {userAuth ? (
              <>
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Products</Link>
              </>
            ) : (
              <>
                <Link to="login">Login</Link>
                <Link to="register">Register</Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
