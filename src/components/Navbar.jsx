import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";

export function MyNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("LoggedIn")
  );

  const handleLoggedOut = () => {
    localStorage.clear();
    setIsLoggedIn(null);
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("LoggedIn"));
  }, []);
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
              {isLoggedIn === "true" ? (
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
                      My Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={handleLoggedOut}
                      className="nav-link text-danger"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
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
                </>
              )}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
