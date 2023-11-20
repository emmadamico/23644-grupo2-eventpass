import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "../App.css";
import "../styles/Login.css";
import { MyNavbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Login() {
    return (
      <div>
      <MyNavbar />
     
           <div className="container mx-auto">           
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6"> 
            <div className="card p-5" style={{ borderRadius: '1rem' }}> 
              <div className="card-body">              
                <h3 className="text-center mb-4">INGRESAR A MI CUENTA</h3>
                <Form>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label className="mb-0">E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu correo electrónico" className="py-2" /> {/* Añade padding vertical al campo del formulario */}
                  </Form.Group>
  
                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label className="mb-0">Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" className="py-2" /> 
                    </Form.Group>
  
                  <Form.Group controlId="formBasicCheckbox" className="mb-3">
                    <Form.Check type="checkbox" label="Recordarme" />
                  </Form.Group>
  
                  <Button variant="primary" type="submit" block className="py-2"> 
                    Iniciar sesión
                  </Button>
                </Form>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div className="col-md-6 text-right">
                    <a href="#">Registrarse</a>
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
