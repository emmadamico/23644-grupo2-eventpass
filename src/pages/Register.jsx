import { useState } from "react"
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../styles/Register.css";

export function Register() {

  const securityQuestions = [
    "What is your favorite color?",
    "In which city were you born?",
    "What is your first pet's name?"
  ];

  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    selectedSecurityQuestion: "", // Campo para almacenar la pregunta seleccionada
    securityAnswers: ["", "", ""], 
  });

  // Estado local para manejar las validaciones y mensajes de error
  const [errors, setErrors] = useState({
    securityAnswers: {}
  });

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
    const errors = {
      securityAnswers: {}
    };

    // Validación para campos obligatorios
    if (!data.firstName.trim()) {
      errors.firstName = 'Required field';
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'Required field';
    }

    if (!data.email.trim()) {
      errors.email = 'Required field';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Enter a valid email';
    }

    if (!data.password.trim()) {
      errors.password = 'Required field';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!data.termsAccepted) {
      errors.termsAccepted = 'You must accept the terms and conditions';
    }

    // Validación para preguntas y respuestas de seguridad
    if (!data.selectedSecurityQuestion) {
      errors.selectedSecurityQuestion = "Please select a security question";
    }

    data.securityAnswers.forEach((answer, index) => {
      if (!answer.trim() && data.selectedSecurityQuestion === securityQuestions[index]) {
        errors.securityAnswers[index] = "Answer is required for the selected question";
      }
    });

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
        <h2 className="title-register versalita text-center mt-4 text-white">Register Your Profile</h2>
        <h4 className="subtitle-register text-center mt-2 text-white">
          Signup and get ready to live amazing moments
        </h4>
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-end p-3">
          <div className="form-items mt-3 d-flex gap-3">
            <label htmlFor="firstName" className="register-label text-white px-3 py-2">First Name</label>
            <div className="d-flex flex-column">
            <input
              className="register-input px-5 py-2 border-0 rounded-pill"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
            ></input>
            {errors.firstName && <small className="register-validation px-3 pt-2">{errors.firstName}</small>}
            </div>
          </div>

          <div className="form-items mt-3 d-flex gap-3">
            <label htmlFor="lastName" className="register-label text-white px-3 py-2">Last Name</label>
            <div className="d-flex flex-column">
            <input
              className="register-input px-5 py-2 border-0 rounded-pill"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            ></input>
            {errors.lastName && <small className="register-validation px-3 pt-2">{errors.lastName}</small>}
            </div>
          </div>
          
          <div className="form-items mt-3 d-flex gap-3">
            <label htmlFor="email" className="register-label text-white px-3 py-2">E-mail</label>
            <div className="d-flex flex-column">
            <input
              className="register-input px-5 py-2 border-0 rounded-pill"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
            ></input>
            {errors.email && <small className="register-validation px-3 pt-2">{errors.email}</small>}
            </div>
          </div>

          <div className="form-items mt-3 d-flex gap-3">
            <label htmlFor="password" className="register-label text-white px-3 py-2">Password</label>
            <div className="d-flex flex-column">
            <input
              className="register-input px-5 py-2 border-0 rounded-pill"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Enter Your Password"
              onChange={handleChange}
            ></input>
            {errors.password && <small className="register-validation px-3 pt-2">{errors.password}</small>}
            </div>
          </div>

          <div className="form-items mt-3 d-flex gap-3">
            <label htmlFor="confirmPassword" className="register-label text-white px-3 py-2">Repeat Password</label>
            <div className="d-flex flex-column">
            <input
              className="input-register px-5 py-2 border-0 rounded-pill"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Repeat Password"
              onChange={handleChange}
            ></input>
            {errors.confirmPassword && <small className="register-validation px-3 pt-2">{errors.confirmPassword}</small>}
            </div>
          </div>

          <div className="form-items mt-3 d-flex gap-3">
            <label htmlFor="selectedSecurityQuestion" className="register-label text-white px-3 py-2">
              Select Security Question
            </label>
            <div className="d-flex flex-column">
              <select
                className="register-input px-3 py-2 border-0 rounded-pill"
                id="selectedSecurityQuestion"
                name="selectedSecurityQuestion"
                value={formData.selectedSecurityQuestion}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Choose a security question
                </option>
                {securityQuestions.map((question, index) => (
                  <option key={index} value={index}>
                    {question}
                  </option>
                ))}
              </select>
              {errors.selectedSecurityQuestion && (
                <small className="register-validation px-3 pt-2">{errors.selectedSecurityQuestion}</small>
              )}
            </div>
          </div>

          <div className="form-items mt-3 d-flex gap-3">
            <label htmlFor="securityAnswer" className="register-label text-white px-3 py-2">
              Security Answer
            </label>
            <div className="d-flex flex-column">
              <input
                className="register-input px-5 py-2 border-0 rounded-pill"
                type="text"
                id="securityAnswer"
                name={`securityAnswers[${formData.selectedSecurityQuestion}]`} // Cambiar el índice según la pregunta seleccionada
                value={
                  formData.selectedSecurityQuestion >= 0
                    ? formData.securityAnswers[formData.selectedSecurityQuestion]
                    : ""
                }
                placeholder="Enter Security Answer"
                onChange={handleChange}
                disabled={!formData.selectedSecurityQuestion} // Deshabilitar si no se ha seleccionado una pregunta
              />
              {formData.selectedSecurityQuestion >= 0 && errors.securityAnswers[formData.selectedSecurityQuestion] && (
                <small className="register-validation px-3 pt-2">
                  {errors.securityAnswers[formData.selectedSecurityQuestion]}
                </small>
              )}
            </div>
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
            <button type="submit" className="signup-register col border-0 rounded-pill px-5 py-2">Sign up</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
