import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";
import { LoggedButton } from "./LoggedButton";
export function MyNavbar() {
  const [logged, setLogged] = useState(false);

  const handleLoggedClick = () => {
    setLogged(!logged);
  };

  return (
    <Navbar bg="black" variant="dark" expand="sm" fixed="top">
      <Container>
        <Link
          className="navbar-brand fs-3 notranslate"
          to={"/"}
          id="logo__title"
        >
          EVENT
          <strong className="fst-italic text__light-green notranslate">
            PASS
          </strong>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="navbarID">
          <Nav className="w-100 d-flex justify-content-end">
            <ul className="nav" id="navBar__Collapse">
              {!logged && (
                <>
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link Link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link Link">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center justify-content-center">
                    <LoggedButton
                      isLogged={logged}
                      handleLoggedClick={handleLoggedClick}
                    />
                  </li>
                </>
              )}

              {logged && (
                <>
                  <li className="nav-item">
                    <Link to={"/mytickets"} className="nav-link Link">
                      My Tickets
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/faq"} className="nav-link Link">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link Link">
                      Mi Profile
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center justify-content-center">
                    <LoggedButton
                      isLogged={logged}
                      handleLoggedClick={handleLoggedClick}
                    />
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
