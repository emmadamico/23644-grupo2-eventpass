import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../styles/Navbar.css";
export function MyNavbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("LoggedIn")
  );

  const handleLoggedOut = () => {
    localStorage.clear();
    //setIsLoggedIn(false);
    navigate("/");
    window.location.reload(true);
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
                  <li className="nav-item ticket__navbar">
                    <Link
                      to={"/mytickets"}
                      className="nav-link  d-flex align-items-center gap-2 Link ticket__navbar"
                    >
                      <p className="m-0 p-0">My Tickets</p>
                      <i class="bi bi-ticket-perforated text-white fs-4 p-0 m-0 nav-link Link"></i>
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <Link to={"/faq"} className="nav-link Link">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <Link to={"/profile"} className="nav-link Link">
                      My Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={handleLoggedOut}
                      className="nav-link text-danger d-flex align-items-center gap-1 logout"
                    >
                      <p className="m-0 p-0 fw-bold">Logout</p>
                      <i class="bi bi-box-arrow-left text-danger  fs-4 p-0 m-0  nav-link Link"></i>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item d-flex align-items-center">
                    <Link to={"/login"} className="nav-link Link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
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
