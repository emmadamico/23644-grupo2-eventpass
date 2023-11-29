import "../App.css";
import "../styles/profile.css";
import { useState } from "react";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export function Profile() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handlePasswordCancel = () => {
    //lógica para manejar la cancelación del cambio de contraseña
  };

  const handlePasswordChange = () => {
    // lógica para manejar el cambio de contraseña
  };

  const handleCancel = () => {
    //lógica para manejar la cancelación de los cambios
  };

  const handleSave = () => {
    //lógica para guardar los cambios
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
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
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
