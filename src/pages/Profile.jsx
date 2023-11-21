import "../App.css";
import { useState } from 'react';
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Profile() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handlePasswordCancel = () => {
    // Aquí puedes agregar la lógica para manejar la cancelación del cambio de contraseña
  };

  const handlePasswordChange = () => {
    // Aquí puedes agregar la lógica para manejar el cambio de contraseña
  };

  const handleCancel = () => {
    // Aquí puedes agregar la lógica para manejar la cancelación de los cambios
  };

  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar los cambios
  };

  return (
    <main>
      <MyNavbar/>
      <banner className='banner'>
        <img
            src="/banner.png"
            alt=""
          />
          <h1 className="title">Mi cuenta</h1>
          <p>Modifica tus datos de cuenta y contacto</p>
      </banner>


      
      <div className="card-user mx-auto">
        <Tabs
          defaultActiveKey="user-info"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
        <Tab eventKey="user-info" title="Información personal">
        <section className='form-container d-flex flex-column justify-content-center align-items-center'>
          <form className="d-flex flex-column align-items-end p-3 user-form">
                <div className='form-item mt-3'>
                <label>
                    Nombre:
                    <input className='mx-3 border-0 input-form' type="text"value={name} onChange={e => setName(e.target.value)} />
                  </label>
                </div>
                <div className='form-item mt-3'>
                  <label>
                    Apellido:
                    <input className='mx-3 border-0 input-form' type="text" value={surname} onChange={e => setSurname(e.target.value)} />
                  </label>
                </div>
                <div className='form-item mt-3'>
                  <label>
                    E-mail:
                    <input className='mx-3 border-0 input-form' type="email" value={email} onChange={e => setEmail(e.target.value)} />
                  </label>
                </div>
                <div className='btn form-item mt-3'>
                  <button className='cancel-btn' type="button" onClick={handleCancel}>Cancelar</button>
                  <button className='save-btn' type="button" onClick={handleSave}>Guardar cambios</button>
                </div>
              </form>
        </section>     
        </Tab>

        <Tab eventKey="password" title="Contraseña">
        <section className='form-container d-flex flex-column justify-content-center align-items-center'>
        <form className="d-flex flex-column justify-content-center align-items-end p-3 user-form">
            <div className='form-item mt-3'>
              <label>
                  Contraseña actual:
                  <input className='mx-3 border-0 input-form' type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
              </label>
            </div>
            <div className='form-item mt-3'>
              <label>
                Nueva contraseña:
                <input className='mx-3 border-0 input-form' type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
              </label>
            </div>
            <div className='form-item mt-3'>
              <label>
                  Repita contraseña:
                  <input className='mx-3 border-0 input-form' type="password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
              </label>
            </div>
            <div className='btn form-item mt-3'>
              <button className='cancel-btn' type="button" onClick={handlePasswordCancel}>Cancelar</button>
              <button className='save-btn' type="button" onClick={handlePasswordChange}>Cambiar contraseña</button>
            </div>  
          </form>
        </section>
        
        </Tab>
      </Tabs>
      </div>
      
      <Footer/>
    </main>
  );
  }

