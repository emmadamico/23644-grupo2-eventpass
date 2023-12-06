import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { MyNavbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import '../App.css';
import '../styles/Login.css';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        title: 'ERROR',
        text: 'Please, enter your credentials.',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    }

    if (email && password) {
      try {
        const response = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const data = await response.json();

        if (data.error || data.errors) {
          Swal.fire({
            title: 'ERROR',
            text: 'Please, verify your credentials',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }

        if (data.securityQuestion) {
          setSecurityQuestion(data.securityQuestion);
          setShowModal(true);
        }

        if (data.msg) {
          localStorage.setItem('email', email);
          localStorage.setItem('LoggedIn', true);
          navigate('/');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }
  };

  const handleSecuritySubmit = () => {
    // Aquí puedes enviar la respuesta de seguridad al servidor si es necesario.
    // Luego, cierra el modal y realiza cualquier acción adicional necesaria.
    setShowModal(false);
    window.scrollTo(0, 0);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Agregar el correo electrónico ingresado por el usuario
        }),
      });
      const data = await response.json();

      if (data.error) {
        Swal.fire({
          title: 'ERROR',
          text: 'Email not found. Please, try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      } else if (data.securityQuestion) {
        // Mostrar el modal con la pregunta de seguridad
        setSecurityQuestion(data.securityQuestion);
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      <MyNavbar />

      <div className="body-container">

        <div className="form-login form-container mx-auto flex-column justify-content-center align-items-center mt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8">
              <div
                className="cardgral card p-7 mt-5 mb-5"
                style={{
                  borderRadius: '1rem',
                  textAlign: 'center',
                  maxWidth: '600px',
                  margin: 'auto',
                }}
              >
                <div className="card-body glass-bg" style={{ borderRadius: '50px' }}>

                  <h3 className="mb-4">LOGIN IN TO MY ACCOUNT</h3>
                  <Form>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="12" md="12" lg="12">
                        E-mail
                      </Form.Label>
                      <Col sm="12" md="12" lg="12">
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          className="py-2"
                          style={{ borderRadius: '50px' }}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="12" md="12" lg="12">
                        Password
                      </Form.Label>
                      <Col sm="12" md="12" lg="12">
                        <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          className="py-2"
                          style={{ borderRadius: '50px' }}
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
                          className="w-25 py-2"
                          style={{ borderRadius: '50px' }}
                          onClick={handleLogin}
                        >
                          Login
                        </Button>
                      </Col>
                    </Row>
                  </Form>

                  <div className="row mt-3 d-flex justify-content-center">
                    <div className="row mt-3">
                      <a
                        className="forget"
                        href="#"
                        onClick={() => setShowModal(true)}
                      >
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Did you forget your password?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Formulario para ingresar el correo electrónico */}
          <Form onSubmit={handleForgotPassword}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="12" md="12" lg="12">
                Enter your email
              </Form.Label>
              <Col sm="12" md="12" lg="12">
                <Form.Control
                  type="email"
                  
                  className="py-2"
                  style={{ borderRadius: '50px' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>
            <Button variant="primary" style={{backgroundColor:'var(--link-color)',border:'none', borderRadius: '50px' }} type="submit">
              Submit
            </Button>
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
             <Button variant="secondary" style={{ borderRadius: '50px' }} onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" className="boton-modal"style={{backgroundColor:'var(--link-color)',border:'none', borderRadius: '50px' }} onClick={handleSecuritySubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}





