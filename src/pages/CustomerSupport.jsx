import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../styles/Description.css"
import { useState } from "react";
import Swal from 'sweetalert2';

export function CustomerSupport() {

    const [btnSubmitDisabled, setBtnSubmitDisabled] = useState(true);

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        consulta: /^[a-zA-ZÀ-ÿ\s]{4,500}$/ // Letras y espacios, pueden llevar acentos.
    }
    
    const campos = { 
        nombre: false,
        correo: false,
        consulta: false
    }
    
    const validarCampo = (expresion, input, campo) => {
        
        if(expresion.test(input.value)){
            document.querySelector(`#${campo}`).classList.add("is-valid");
            document.querySelector(`#${campo}`).classList.remove("is-invalid");
            document.querySelector(`#grupo__${campo} .msjError`).classList.add("d-none");
            campos[campo] = true ;
        } else {
            document.querySelector(`#${campo}`).classList.add("is-invalid");
            document.querySelector(`#${campo}`).classList.remove("is-valid");
            document.querySelector(`#grupo__${campo} .msjError`).classList.remove("d-none");
            campos[campo] = false ;
        }
        // validarBtn();
    }
    
    const validarFormulario = (e) =>{
        switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo');
            break;
            case "consulta":
                validarCampo(expresiones.consulta, e.target, 'consulta');
            break;
            default:
            break;
        }
    }

    // FUNCION PARA RESETEAR LOS CAMPOS 
    const resetCampos = () => {
        campos.nombre = false;
        campos.apellido = false;
        campos.correo = false;
        campos.cantidad = false;
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        if (campos.nombre && campos.correo && campos.consulta) { 
            Swal.fire({
                html: `The form has been submitted successfully! We will contact you soon.`,
                icon: 'success',
                confirmButtonText: 'Ok'
            });

            // Resetea el formulario
            document.getElementById('formulario').reset();

            //quito los msjs de validacion
            document.querySelectorAll('.is-valid').forEach((icono) => {
                icono.classList.remove('is-valid');
                icono.value="";
            });

            // Reseteo los campos
            resetCampos ();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You must complete the form correctly before submitting it",
            });
        }




    };

    // const validarBtn = () =>{
    //     console.log( `nombre : ${campos.nombre} | correo: ${campos.correo} | consulta: ${campos.consulta}` );
    //     console.log( campos );
    //     if (campos.nombre && campos.correo && campos.consulta) { 
    //         setBtnSubmitDisabled(false)
            
    //     } else {
    //         setBtnSubmitDisabled(true)
    //     }
    // }


    return (
        <>
            <MyNavbar/>
            <section className="mt-5 py-5 text-white">
                <div className="container">
                    <div className="glass-bg rounded rounded-5 overflow-hidden">
                        <div className="row gap-3 gap-lg-0">
                            <div className="col-lg-6">
                                <img
                                    src="./img/customer_support.jpg"
                                    alt=""
                                    className="img-fluid w-100"
                                />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="text-white versalita">CustomerSupport</h1>
                                <div className="linea-color mb-3"></div>
                                <div className="">
                                <p>
                                We value your experience with us and want to ensure you have the best possible support. If you have any questions, concerns, or simply need assistance, our dedicated Customer Support team is here for you!
                                </p>
                                <form className="d-flex flex-column align-items-center" id="formulario">
                                    <div className="w-100 mb-3" id="grupo__nombre">
                                        <label forhtml="nombre" className="form-label">Name</label>
                                        <input type="text" className="form-control rounded rounded-3" placeholder="User Name" id="nombre" name="nombre" onChange={validarFormulario}/>
                                        <p className="my-1 p-2 msjError d-none text-bg-danger rouded rounded-1">
                                            The Name cannot be empty and must be from 4 to 16 characters, numbers or symbols are not allowed.
                                        </p>
                                    </div>
                                    <div className="w-100 mb-3" id="grupo__correo">
                                        <label forhtml="correo" className="form-label">Email</label>
                                        <input type="email" className="form-control rounded rounded-3" placeholder="user@mail.com" id="correo" name="correo" onChange={validarFormulario}/>
                                        <p className="my-1 p-1 msjError d-none text-bg-danger rouded rounded-1">
                                            The Mail cannot be empty, it can only contain letters, numbers, periods, hyphens and underscores.
                                        </p>
                                    </div>
                                    <div className="w-100 mb-5" id="grupo__consulta">
                                        <label forhtml="consulta" className="form-label">Question:</label>
                                        <textarea className="form-control rounded rounded-3" placeholder="Message" id="consulta" name="consulta" onChange={validarFormulario} rows="3"></textarea>
                                        <p className="my-1 p-1 msjError d-none text-bg-danger rouded rounded-1">
                                            You must complete the query before you can submit it.
                                        </p>
                                    </div>
                                    <div>
                                        <button 
                                            type="submit" 
                                            className="btn btn__black-green rounded rounded-5 mb-5 px-3"
                                            onClick={handleSubmit}
                                            // disabled={btnSubmitDisabled}
                                        >
                                            Send <i className="bi bi-send"></i>
                                        </button>
                                    </div>
                                    
                                </form>
                                
                            </div>











                                {/* <form action="">
                                    <input type="text" name="" id="" />
                                    <input type="text" name="" id="" />
                                    <input type="text" name="" id="" />
                                    <button type="submit" className="btn btn__black-green rounded rounded-5 mb-5">Send <i className="bi bi-send"></i></button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
