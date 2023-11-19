import "../App.css";
import "../styles/Register.css";
import {MyNavbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export function Register() {
  return (<div>

    <MyNavbar />

    <div className="form-container d-flex flex-column justify-content-center align-items-center mt-5">
        <h2 className="text-center mt-4">CREA TU CUENTA</h2>
        <h4 className="text-center mt-2">Completa tus datos y prepárate para vivir momentos inolvidables</h4>
        <form className="d-flex flex-column justify-content-center align-items-end p-3">
        <div className="form-items mt-3">
                <label>Nombre</label>
                <input className="mx-3 border-0 rounded-pill" type="text" name="nombre"></input>
            </div>
            <div className="form-items mt-3">
                <label>Apellido</label>
                <input className="mx-3 border-0 rounded-pill" type="text" name="apellido"></input>
            </div>
            <div className="form-items mt-3">
                <label>E-mail</label>
                <input className="mx-3 border-0 rounded-pill" type="email" name="correo"></input>
            </div>
            <div className="form-items mt-3">
                <label>Contraseña</label>
                <input className="mx-3 border-0 rounded-pill" type="password" name="contraseña"></input>
            </div>
            <div className="form-items mt-3">
                <label>Repite Contraseña</label>
                <input className="mx-3 border-0 rounded-pill" type="password" name="contraseña2"></input>
            </div>
            <div className="form-items d-flex flex-row mt-2">
                <button className="col m-3 border-0 rounded-pill px-3">Registrar</button>
                <div className="pt-3">
                    <input className="" type="checkbox" name="terminos"></input>
                    <label className="mx-2">Acepto términos y condiciones</label>
                </div>
            </div>
        </form>
    </div>

    < Footer />

  </div>);
}
