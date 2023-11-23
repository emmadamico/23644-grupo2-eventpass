import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import "../App.css";
import "../styles/Login.css";
import { MyNavbar } from '../components/Navbar';
import { Footer } from '../components/Footer';


export function Login() {


  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setLoggedIn] = useState(false);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    
    if (formData.email && formData.password) {
      setLoggedIn(true);
    } else {
      alert('Por favor, ingresa tu correo electrónico y contraseña');
    }
  };


  return (
    <div>
      <MyNavbar />
      <div className="body-container">
      <div className="form-login form-container mx-auto flex-column justify-content-center align-items-center mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="cardgral card p-7" style={{ borderRadius: '1rem', textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
              <div className="card-body">
                <h3 className="mb-4">INGRESAR A MI CUENTA</h3>
                <Form>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      E-mail
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control type="email" placeholder="Ingresa tu correo electrónico" className="py-2" style={{ borderRadius: '50px' }}/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Contraseña
                    </Form.Label>
                    <Col sm="9">
                      
                      <Form.Control type="password" placeholder="Ingresa tu contraseña" className="py-2"style={{ borderRadius: '50px' }} />
                    </Col>
                  </Form.Group>                
                  <Row className="mb-3 align-items-center">
                 <Col>
                  <Button variant="light" type="submit" className="w-100 py-2" style={{ borderRadius: '50px' }}onClick={handleLogin}>
                   Ingresar
                   </Button>
                    </Col>    
                    
                 
                 <Col className="d-flex align-items-center">
                   <Form.Group controlId="formBasicCheckbox" className="mb-0">
                   <Form.Check type="checkbox" label="Recordarme" />
                  </Form.Group>
                </Col>
                </Row>                 
                </Form>
                <div className="row mt-3 d-flex justify-content-center">
  
                <div className="row mt-3">
                  
                    <a href="#">¿Olvidaste tu contraseña?</a>
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



