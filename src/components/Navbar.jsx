import { Link } from "react-router-dom";
import React, { useState } from "react";

export function Navbar() {
  const [logged, isLogged] = useState(false);

  const handleLoggedClick = (e) => {
    isLogged(true);
  };
  const handleUnloggedClick = (e) => {
    isLogged(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-black">
        <div className="container py-2">
          <Link className="navbar-brand fs-3" to={"/"}>
            EVENT<strong className="fst-italic text__light-green">PASS</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarID"
            aria-controls="navbarID"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar-dark justify-content-end"
            id="navbarID"
          >
            <ul
              className="nav navb-underline"
              style={{ display: logged ? "none" : "flex" }}
            >
              <li className="nav-item ">
                <Link to={"/login"} className="nav-link Link">
                  Ingresar
                </Link>
              </li>
              <li className=" nav-item">
                <Link to={"/register"} className="nav-link Link">
                  Registrarme
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn" onClick={handleLoggedClick}>
                  Logged
                </button>
              </li>
            </ul>
            <ul
              className="nav navb-underline"
              style={{ display: logged ? "flex" : "none" }}
            >
              <li className="nav-item ">
                <Link to={"/misentradas"} className="nav-link Link">
                  Mis Entradas
                </Link>
              </li>
              <li className=" nav-item">
                <Link to={"/faq"} className="nav-link Link">
                  FAQ
                </Link>
              </li>
              <li className=" nav-item">
                <Link to={"/micuenta"} className="nav-link Link">
                  Mi Cuenta
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn" onClick={handleUnloggedClick}>
                  Unlogged
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
