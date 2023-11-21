import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function MyNavbar() {
  const [logged, isLogged] = useState(false);

  const handleLoggedClick = () => {
    isLogged(true);
  };

  const handleUnloggedClick = () => {
    isLogged(false);
  };

  return (
    <Navbar bg="black" variant="dark" expand="sm" fixed="top">
      <Container>
        <Link className="navbar-brand fs-3" to={"/"} id="logo__title">
          EVENT<strong className="fst-italic text__light-green">PASS</strong>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="navbarID">
          <Nav className="w-100 d-flex justify-content-end">
            <ul className="nav" id="navBar__Collapse">
              {!logged && (
                <>
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link Link">
                      Ingresar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link Link">
                      Registrarme
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Button variant="" onClick={handleLoggedClick}>
                      Logged
                    </Button>
                  </li>
                </>
              )}

              {logged && (
                <>
                  <li className="nav-item">
                    <Link to={"/mytickets"} className="nav-link Link">
                      Mis Entradas
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/faq"} className="nav-link Link">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link Link">
                      Mi Cuenta
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Button variant="" onClick={handleUnloggedClick}>
                      Unlogged
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
