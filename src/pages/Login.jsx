
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { MyNavbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

import "../App.css";
import "../styles/Login.css";

export function Login() {

  const [LooggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    if (email && password) {
      setLoggedIn(true);
    } else {
      alert("Please, enter your email and password");
    }
  };


  return (
    <div>
      <MyNavbar />
      <div>
        <div className="form-login form-container mx-auto flex-column justify-content-center align-items-center mt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8">

              <div
                className="cardgral card p-7 mt-5 mb-5"
                style={{
                  borderRadius: "1rem",
                  textAlign: "center",
                  maxWidth: "600px",
                  margin: "auto",
                }}
              >
                <div className="card-body">
                  <h3 className="mb-4">LOGIN IN TO MY ACCOUNT</h3>
                  <Form>

                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="3">
                        E-mail
                      </Form.Label>
                      <Col sm="9">
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          className="py-2"

                          style={{ borderRadius: "50px" }}

                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="3">
                        Password
                      </Form.Label>
                      <Col sm="9">
                        <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          className="py-2"

                          style={{ borderRadius: "50px" }}

                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </Col>
                    </Form.Group>

                    <Row className="mb-3 align-items-center">
                      <Col>
                        <Button
                          variant="light"
                          type="submit"
                          className="w-100 py-2"

                          style={{ borderRadius: "50px" }}

                        >
                          Login
                        </Button>
                      </Col>

                      <Col className="d-flex align-items-center">

                        <Form.Group
                          controlId="formBasicCheckbox"
                          className="mb-0"
                        >
       <Form.Check
                            type="checkbox"
                            label="Recordarme"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>

                  <div className="row mt-3 d-flex justify-content-center">
                    <div className="row mt-3">
                      <a className="forget" href="/">
                        Did you forget your password?
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
