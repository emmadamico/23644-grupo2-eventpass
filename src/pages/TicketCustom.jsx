
import { Header } from "../components/Header";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


import html2canvas from "html2canvas";
import React, { useState } from "react";
import "../styles/TicketCustom.css";


export function TicketCustom() {
  const [mensaje, setMensaje] = useState("Escribe aquí tu mensaje especial (hasta 500 caracteres)");
 const [imgfondo, setImgfondo] = useState('../img/img5.jpg');

 const textomensaje = (e) => {
  setMensaje(e.target.value);
 }

 const seleccionarImgClick = (src) => {
  
  const isSelected = imgfondo === src;

  if (isSelected) {
    setImgfondo('');
  } else {
    setImgfondo(src);
  }
};

const descarga = (e) => {
  html2canvas(document.querySelector("#exportar")).then(function(canvas) {
    let img = canvas.toDataURL("regaloImg/png");
    let link = document.createElement("a");
    link.download = "regalo.png";
    link.href = img;
    link.click();

});
}
  return (
    <>
      <Header />
      <MyNavbar />
      <div>
      <div className="encabezado text-center">
        <p>¿Quieres sorprender a alguien con una entrada para este evento?
          Regala una entrada personalizada y sorprende a tu persona especial con un diseño y un mensaje únicos.
        </p>
      </div>
      <div className="conteiner-personalizar">
        <h6 className="titulo-personalizar">Elije un diseño:</h6>
        <div className="imagenes d-flex justify-content-center flex-wrap gap-2">
          <img onClick={() => seleccionarImgClick('../img/img1.jpg')} src="../img/img1.jpg" className="img-fluid" alt="" />
          <img onClick={() => seleccionarImgClick('../img/img2.jpg')} src="../img/img2.jpg" className="img-fluid" alt="" />
          <img onClick={() => seleccionarImgClick('../img/img3.jpg')} src="../img/img3.jpg" className="img-fluid" alt="" />
          <img onClick={() => seleccionarImgClick('../img/img4.png')} src="../img/img4.png" className="img-fluid" alt="" />
          <img onClick={() => seleccionarImgClick('../img/img5.jpg')} src="../img/img5.jpg" className="img-fluid" alt="" />
          <img onClick={() => seleccionarImgClick('../img/img6.jpg')} src="../img/img6.jpg" className="img-fluid" alt="" />

        </div>
        <div className="conteiner-mensaje d-flex flex-wrap">
        <h6 className="titulo-personalizar">Escribe un mensaje:</h6>
        <input onChange={textomensaje} className="form-control w-25 d-block" type="text" placeholder="Escribe aquí tu mensaje especial" name="mensaje" id="" />
        </div>
        

      </div>

      
      {/* Contenedor de entrada personalizable */}
      
      <figure className=" fondo text-center m-auto" id="exportar">
        <img className="img-fondo" src={imgfondo} alt="" srcset=""  />
        <div className="contenido-superpuesto">
          <img src="../img/Taylor-Swift-Eras-Tour-Ticket-VIP-1.jpg" alt="" srcset="" />

          <p className='text-center'>{mensaje}</p>
          
        </div>

      </figure>
      {/* Compartir/descargar */}
      <div className="compartir d-flex justify-content-center flex-wrap gap-4 align-items-center">
        <h5 className="texto-verde">COMPARTE</h5>


        <ul className="list-unstyled d-flex flex-wrap gap-3 align-items-center">
          <li><a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook fs-4" />
          </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram fs-4" />
            </a>
          </li>
          <li>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter fs-4"></i>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp fs-4"></i>
            </a>
          </li>


        </ul>
        <h5 className="texto-verde" onClick={descarga} type='button'>DESCARGA</h5>
      </div>

    </div>
  
      <Footer />
    </>
  );
}

