import "../App.css";
import "../styles/profile.css";
import { useState, useEffect} from "react";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Swal from 'sweetalert2';

export function Profile() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

   // Agregamos estados para los mensajes de error
   const [currentPasswordError, setCurrentPasswordError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [repeatPasswordError, setRepeatPasswordError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [nameError, setNameError] = useState("");
   const [lastNameError, setLastNameError] = useState("");
   
   useEffect(() => {
    // Recuperar los detalles del usuario de localStorage
    const storedName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedEmail = localStorage.getItem('email');

    // Actualizar el estado del componente con los detalles del usuario
    setName(storedName);
    setLastName(storedLastName);
    setEmail(storedEmail);
  }, []);

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSave = async() => {
    setEmailError(""); 
    setLastNameError(""); 
    setNameError("");

    if (!name && !lastName && email){
      setNameError('Required field');
      setLastNameError('Required field');
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email.');
      }
      return;
    } else if (!name && lastName && !email){
      setNameError('Required field');
      setEmailError('Required field');
      return;
    } else if (name && !lastName && !email){
      setLastNameError('Required field');
      setEmailError('Required field');
      return;
    } else if (!name && !lastName && !email){
      setNameError('Required field');
      setLastNameError('Required field');
      setEmailError('Required field');
      return;
    }

    if (!name){
      setNameError('Required field');
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email.');
      }
      return;
    }

    if (!lastName){
      setLastNameError('Required field');
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email.');
      }
      return;
    }

    if (!email){
      setEmailError('Required field');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/auth/updateUserInfo', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: name,
          lastName: lastName,
          email: localStorage.getItem('email'),
          newEmail: email,
          password: "",
          newPassw: "",
          repeatPassw: "",
          securityAnswers: ""
        }),
      });
      const data = await response.json();

      if (data.msg) {
        localStorage.setItem('firstName', name);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);

        Swal.fire({
          title: 'Saved!',
          text: 'Your changes have been saved successfully.',
          icon: 'success',
          confirmButtonText: 'Accept'
        }).then(setEmailError(""), setLastNameError(""), setNameError(""));
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  
  const handleCancel = () => {
    //lógica para manejar la cancelación de los cambios
    // se recuperan los detalles del usuario de localStorage
    const storedName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedEmail = localStorage.getItem('email');
    // Verificamos si el usuario ha realizado cambios
    if (name === storedName && lastName === storedLastName && email === storedEmail) {
      // Si el usuario no realizó cambios, se lo lleva a la página de inicio
      window.location.href = '/'; 
    } else {
      // Si realizó cambios, se restablece el estado del componente a los detalles originales del usuario
      setName(storedName);
      setLastName(storedLastName);
      setEmail(storedEmail);
  }
  };
  const handlePasswordCancel = () => {
    if (currentPassword === "" && newPassword === "" && repeatPassword === "") {
      // Si los campos de contraseña están vacíos, se redirige al usuario a la página de inicio
      window.location.href = '/';
    } else {
      // Si los campos de contraseña no están vacíos, se restablecen las contraseñas al estado inicial
      setCurrentPassword("");
      setNewPassword("");
      setRepeatPassword("");
    }
    };
    const handlePasswordChange = async() => {
      
      setCurrentPasswordError("");
      setPasswordError("");
      setRepeatPasswordError("");

      if (!currentPassword && !newPassword && !repeatPassword){
        setCurrentPasswordError('Required field');
        setPasswordError('Required field');
        setRepeatPasswordError('Required field');
        return;
      } else if (!currentPassword && newPassword && !repeatPassword){
        setCurrentPasswordError('Required field');
        setRepeatPasswordError('Required field');
        if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(newPassword)) {
          setPasswordError('Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one special character, and one number');
        }
        return;
      } else if (currentPassword && !newPassword && !repeatPassword){
        setPasswordError('Required field');
        setRepeatPasswordError('Required field');
        return;
      } else if (!currentPassword && !newPassword && repeatPassword){
        setPasswordError('Required field');
        setCurrentPasswordError('Required field');
        return;
      } else if (!currentPassword && newPassword && repeatPassword){
        setCurrentPasswordError('Required field');
        if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(newPassword)) {
          setPasswordError('Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one special character, and one number');
        }
        if (newPassword !== repeatPassword){
          setRepeatPasswordError('Password do not match');
        }
        return;
      } else if (currentPassword && !newPassword && repeatPassword){
        setPasswordError('Required field');
        return;
      } else if (currentPassword && newPassword && !repeatPassword){
        setRepeatPasswordError('Required field');
        if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(newPassword)) {
          setPasswordError('Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one special character, and one number');
        }
        return;
      }

      if (newPassword !== repeatPassword){
        setRepeatPasswordError('Password do not match');
        return;
      }

      if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(newPassword) && newPassword) {
        setPasswordError('Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one special character, and one number');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/auth/updateUserInfo', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: "",
            lastName: "",
            email: localStorage.getItem('email'),
            newEmail: "",
            password: currentPassword,
            newPassw: newPassword,
            repeatPassw: repeatPassword,
            securityAnswers: ""
          }),
        });
        const data = await response.json();
  
        if (data.errorPassw) {
          Swal.fire({
            title: 'Error',
            text: 'Please, verify your password.',
            icon: 'error',
            confirmButtonText: 'Close'
          });
        }

        if (data.msg) {
          Swal.fire({
            title: 'Saved!',
            text: 'Your password has been updated.',
            icon: 'success',
            confirmButtonText: 'Accept'
          }).then(setCurrentPassword(""), setNewPassword(""), setRepeatPassword(""));
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
  return (
    <>
      <MyNavbar />
      <main>
        <banner className="banner-profile">
          <img src="/banner.png" alt="" />
          <h1 className="title versalita">My Profile</h1>
          <p className="p-profile">Modify your account and contact details</p>
        </banner>

        <div className="card-user mx-auto glass-bg ">
          <Tabs
            defaultActiveKey="user-info"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="user-info" title="Personal Information">
              <section className="d-flex flex-column justify-content-center align-items-center">
                <form className="d-flex flex-column justify-content-center align-items-end p-3 user-form mt-3 mb-5">
                  <div className="form-item">
                    <label>
                      Name:
                      <input
                        className="mx-3 border-0 input-form"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                      />
                    </label>
                    {nameError && <p className="error-message">{nameError}</p>}
                  </div>
                  <div className="form-item mt-3">
                    <label >
                      Last Name:
                      <input
                        className="mx-3 border-0 input-form"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                      />
                    </label>
                    {lastNameError && <p className="error-message">{lastNameError}</p>}
                  </div>
                  <div className="form-item mt-3">
                    <label>
                      E-mail:
                      <input
                        className="mx-3 border-0 input-form"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email"
                      />
                    </label>
                    {emailError && <p className="error-message">{emailError}</p>}
                  </div>
                  <div className="btn mt-3">
                    <button
                      className="cancel-btn"
                      type="button"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      className="save-btn"
                      type="button"
                      onClick={handleSave}
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </section>
            </Tab>

            <Tab eventKey="password" title="Password">
              <section className="d-flex flex-column justify-content-center align-items-center">
                <form className="d-flex flex-column justify-content-center align-items-end p-3 user-form mt-3 mb-5">
                  <div className="form-item">
                    <label>
                      Current Password:
                      <input
                        className="mx-3 border-0 input-form"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Enter your current password"
                      />
                    </label>
                    {currentPasswordError && <p className="error-message">{currentPasswordError}</p>}
                  </div>
                  <div className="form-item mt-3">
                    <label>
                      New Password:
                      <input
                        className="mx-3 border-0 input-form"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter your new password"
                      />
                    </label>
                    {passwordError && <p className="error-message">{passwordError}</p>}
                  </div>
                  <div className="form-item mt-3">
                    <label>
                      Confirm Password:
                      <input
                        className="mx-3 border-0 input-form"
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        placeholder="Confirm your new password"
                      />
                    </label>
                    {repeatPasswordError && <p className="error-message">{repeatPasswordError}</p>}
                  </div>
                  <div className="btn mt-3">
                    <button
                      className="cancel-btn"
                      type="button"
                      onClick={handlePasswordCancel}
                    >
                      Cancel
                    </button>
                    <button
                      className="save-btn"
                      type="button"
                      onClick={handlePasswordChange}
                    >
                      Change Password
                    </button>
                  </div>
                </form>
              </section>
            </Tab>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
}