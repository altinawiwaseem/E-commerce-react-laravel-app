import React, { useContext } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Header = () => {
  const { userAuth, handleLogout } = useContext(UserContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-COMMERCE</Navbar.Brand>
          <Nav className="me-auto navbar-wrapper">
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
          {userAuth && (
            <Nav>
              <NavDropdown title="User Name">
                <NavDropdown.Item onClick={handleLogout}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
