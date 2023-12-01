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
   const [passwordError, setPasswordError] = useState("");
   const [repeatPasswordError, setRepeatPasswordError] = useState("");
   
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

  const handleSave = () => {
    localStorage.setItem('firstName', name);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email); // se Guarda la nueva información del usuario en localStorage
  
    Swal.fire({
      title: 'Saved!',
      text: 'Your changes have been saved successfully.',
      icon: 'success',
      confirmButtonText: 'Accept'
    });
  
    return; // se informa al usuario que sus cambios se han guardado correctamente
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
      window.location.href = '/pages/Home'; 
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
      window.location.href = '/pages/Home';
    } else {
      // Si los campos de contraseña no están vacíos, se restablecen las contraseñas al estado inicial
      setCurrentPassword("");
      setNewPassword("");
      setRepeatPassword("");
    }
    };
    const handlePasswordChange = () => {
      // lógica para manejar el cambio de contraseña
      // se Recupera la contraseña actual del usuario de localStorage
      const storedPassword = localStorage.getItem('password');
      //se la compara con la contraseña que el usuaeio ponga en el input
      if (currentPassword !== storedPassword) {
        setPasswordError('The current password is incorrect.');
        return;
      }
      
      if (newPassword !== repeatPassword) {
        setRepeatPasswordError('The passwords do not match.');
        return;
      }
      
      // se actualiza la contraseña almacenada con la nueva contraseña
      localStorage.setItem('password', newPassword);
      setPasswordError('');
      setRepeatPasswordError('');
  
      //se restablecen las contraseñas al estado inicial
        setCurrentPassword("");
        setNewPassword("");
        setRepeatPassword("");
  
        Swal.fire({
          title: 'Success!',
          text: 'Your password has been successfully changed.',
          icon: 'success',
          confirmButtonText: 'Accept'
        });
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
              <section className="form-container d-flex flex-column justify-content-center align-items-center m-5">
                <form className="d-flex flex-column align-items-end p-3 user-form">
                  <div className="form-item mt-3">
                    <label>
                      Name:
                      <input
                        className="mx-3 border-0 input-form"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="form-item mt-3">
                    <label>
                    Last Name:
                      <input
                        className="mx-3 border-0 input-form"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="form-item mt-3">
                    <label>
                      E-mail:
                      <input
                        className="mx-3 border-0 input-form"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
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
                <form className="d-flex flex-column justify-content-center align-items-end p-3 user-form mt-5 mb-5">
                  <div className="form-item">
                    <label>
                      Current Password:
                      <input
                        className="mx-3 border-0 input-form"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </label>
                    {passwordError && <p className="error-message">{passwordError}</p>}
                  </div>
                  <div className="form-item mt-3">
                    <label>
                      New Password:
                      <input
                        className="mx-3 border-0 input-form"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="form-item mt-3">
                    <label>
                      Confirm Password:
                      <input
                        className="mx-3 border-0 input-form"
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
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