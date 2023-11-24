import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../styles/Register.css";
export function Register() {
  return (
    <>
      <MyNavbar />

      <div className="form-container d-flex flex-column justify-content-center align-items-center mt-5">
        <h2 className="text-center mt-4 text-white">Register Your Profile</h2>
        <h4 className="text-center mt-2 text-white">
          Signup and get ready to live amazing moments
        </h4>
        <form className="d-flex flex-column justify-content-center align-items-end p-3">
          <div className="form-items mt-3 d-flex gap-3">
            <label className="text-white">First Name</label>
            <input
              className="px-2 border-0 rounded-pill bg-dark text-white "
              type="text"
              name="nombre"
              placeholder="First Name"
            ></input>
          </div>
          <div className="form-items mt-3 d-flex gap-3">
            <label className="text-white">Last Name</label>
            <input
              className="px-2 border-0 rounded-pill bg-dark text-white"
              type="text"
              name="apellido"
              placeholder="Last Name"
            ></input>
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
