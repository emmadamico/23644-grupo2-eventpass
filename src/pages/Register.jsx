import { useState } from "react"
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Register() {

  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  // Estado local para manejar las validaciones y mensajes de error
  const [errors, setErrors] = useState({});

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Si el campo es un checkbox, maneja el valor 'checked'
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar validaciones antes de enviar los datos
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // Si no hay errores, puedes enviar los datos al servidor aquí
    if (Object.keys(validationErrors).length === 0) {
      // Enviar datos al servidor o realizar otras acciones
      console.log('Datos válidos, enviando formulario:', formData);
    }
  };

  // Función para realizar las validaciones del formulario
  const validateForm = (data) => {
    const errors = {};

    // Validación para campos obligatorios
    if (!data.firstName.trim()) {
      errors.firstName = 'El nombre es obligatorio';
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'El apellido es obligatorio';
    }

    if (!data.email.trim()) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Ingrese un correo electrónico válido';
    }

    if (!data.password.trim()) {
      errors.password = 'La contraseña es obligatoria';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (!data.termsAccepted) {
      errors.termsAccepted = 'Debe aceptar los términos y condiciones';
    }

    return errors;
  };

  // Función para validar un correo electrónico con una expresión regular simple
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return (
    <>
      <MyNavbar />

      <div className="form-container d-flex flex-column justify-content-center align-items-center mt-5">
        <h2 className="text-center mt-4 text-white">Register Your Profile</h2>
        <h4 className="text-center mt-2 text-white">
          Signup and get ready to live amazing moments
        </h4>
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-end p-3">
          <div className="form-items mt-3 d-flex gap-3">
            <label htmlFor="firstName" className="text-white">First Name</label>
            <input
              className="px-2 border-0 rounded-pill bg-dark text-white "
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
            ></input>
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>

          <div className="form-items mt-3 d-flex gap-3">
            <label htmlFor="lastName" className="text-white">Last Name</label>
            <input
              className="px-2 border-0 rounded-pill bg-dark text-white"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            ></input>
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
          
          <div className="form-items mt-3 d-flex gap-3">
            <label className="text-white">E-mail</label>
            <input
              className="px-2 border-0 rounded-pill bg-dark text-white"
              type="email"
              name="correo"
              placeholder="Enter Your Email"
            ></input>
          </div>
          <div className="form-items mt-3 d-flex gap-3">
            <label className="text-white">Password</label>
            <input
              className="px-2 border-0 rounded-pill bg-dark text-white"
              type="password"
              name="contraseña"
              placeholder="Enter Your Password"
            ></input>
          </div>
          <div className="form-items mt-3 d-flex gap-3">
            <label className="text-white">Repeat Password</label>
            <input
              className="px-2 border-0 rounded-pill bg-dark text-white"
              type="password"
              name="contraseña2"
              placeholder="Repeat Password"
            ></input>
          </div>
          <div className="form-items d-flex justify-content-end align-items-center flex-row mt-2 gap-3 mt-3">
            <div className="d-flex align-items-center gap-1">
              <label className="text-white">
                <small>Agree terms and conditions</small>
              </label>
              <input
                className="bg-dark"
                type="checkbox"
                name="terminos"
              ></input>
            </div>
            <button className="col border-0 rounded-pill px-3">Signup</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
