import { Header } from "../components/Header";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import React, { useState } from "react";
import "../styles/TicketCustom.css";
import "../styles/TicketItem.css";
import "../styles/TicketItem.css";

export function TicketCustom() {
  const [mensaje, setMensaje] = useState("Write your special message here");
  const [imgfondo, setImgfondo] = useState("../img/img5.jpg");

  const [color, setColor] = useState("");
  const [imgfondo, setImgfondo] = useState("../img/img5.jpg");

  const [color, setColor] = useState("");
  const [size, setSize] = useState(20);

  const { ticketData } = useParams();
  console.log(ticketData);

  const tickets = JSON.parse(localStorage.getItem("ticketDataArray"));
  console.log(tickets);

  const selectedTicket = tickets.find(
    (ticket) => ticket.id === ticketData.substring(1)
  );
  console.log(selectedTicket);

  function getRandomNumber() {
    const min = 22;
    const max = 138;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  // Mensajes fondo y estilos
  const { ticketData } = useParams();
  console.log(ticketData);

  const tickets = JSON.parse(localStorage.getItem("ticketDataArray"));
  console.log(tickets);

  const selectedTicket = tickets.find(
    (ticket) => ticket.id === ticketData.substring(1)
  );
  console.log(selectedTicket);

  function getRandomNumber() {
    const min = 22;
    const max = 138;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  // Mensajes fondo y estilos
  const textomensaje = (e) => {
    setMensaje(e.target.value);
  };

  const myStyle = {
    color: color,
    fontSize: size + "px",
  };

  const seleccionarImgClick = (src) => {
    const isSelected = imgfondo === src;

    if (isSelected) {
      setImgfondo("");
    } else {
      setImgfondo(src);
    }
  };

  const descarga = (e) => {
    html2canvas(document.querySelector("#exportar"), { useCORS: true }).then(
      function (canvas) {
        let img = canvas.toDataURL("regaloImg/png");
        let link = document.createElement("a");
        link.download = "regalo.png";
        link.href = img;
        link.click();
      }
    );
  };

  return (
    <>
      <Header />
      <MyNavbar />
      <div className="">
        <div className="encabezado text-center">
          <p>
            Do you want to surprise someone with a ticket to this event? Gift a
            personalized ticket and amaze your special person with a unique
            design and message.
          </p>
        </div>
        <div className="conteiner-personalizar">
          <h6 className="titulo-personalizar">Choose a design:</h6>
          <div className="imagenes d-flex justify-content-center flex-wrap gap-4">
            <img
              onClick={() => seleccionarImgClick("../img/img1.jpg")}
              style={{
                border: imgfondo.includes("../img/img1.jpg")
                  ? "3px solid #5fcb03"
                  : "none",
              }}
              src="../img/img1.jpg"
              className="img-fluid"
              alt=""
            />
            <img
              onClick={() => seleccionarImgClick("../img/img2.jpg")}
              style={{
                border: imgfondo.includes("../img/img2.jpg")
                  ? "3px solid #5fcb03"
                  : "none",
              }}
              src="../img/img2.jpg"
              className="img-fluid"
              alt=""
            />
            <img
              onClick={() => seleccionarImgClick("../img/img3.jpg")}
              style={{
                border: imgfondo.includes("../img/img3.jpg")
                  ? "3px solid #5fcb03"
                  : "none",
              }}
              src="../img/img3.jpg"
              className="img-fluid"
              alt=""
            />
            <img
              onClick={() => seleccionarImgClick("../img/img4.png")}
              style={{
                border: imgfondo.includes("../img/img4.png")
                  ? "3px solid #5fcb03"
                  : "none",
              }}
              src="../img/img4.png"
              className="img-fluid"
              alt=""
            />
            <img
              onClick={() => seleccionarImgClick("../img/img5.jpg")}
              style={{
                border: imgfondo.includes("../img/img5.jpg")
                  ? "3px solid #5fcb03"
                  : "none",
              }}
              src="../img/img5.jpg"
              className="img-fluid"
              alt=""
            />
            <img
              onClick={() => seleccionarImgClick("../img/img6.jpg")}
              style={{
                border: imgfondo.includes("../img/img6.jpg")
                  ? "3px solid #5fcb03"
                  : "none",
              }}
              src="../img/img6.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="conteiner-mensaje d-flex flex-wrap">
            <h6 className="titulo-personalizar">Write a message:</h6>
            <input
              onChange={textomensaje}
              className="form-control d-block"
              type="text"
              placeholder="Write your special message here"
              name="mensaje"
              id=""
            />
          </div>
          <div className="btn-group dropdown mx-2">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Color
            </button>
            <ul className="dropdown-menu">
              <li>
                <p className="dropdown-item m-auto">
                  <input
                    type="color"
                    value={setColor}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </p>
              </li>
            </ul>
          </div>

          <div className="btn-group dropdown mx-2">
            <button
              className="btn btn-dark dropdown-toggle btn-transparent"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Size
            </button>
            <ul className="dropdown-menu">
              <li>
                <p className="dropdown-item m-auto">
                  <input
                    type="range"
                    min={10}
                    max={120}
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))} // Convert the value to a number
                    step={1}
                  />
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Contenedor de entrada personalizable */}

        <figure className=" fondo text-center m-auto" id="exportar">
          <img className="img-fondo" src={imgfondo} alt="" srcset="" />
          <div className="ticket-content">
            <div className="row m-0 p-0 z-3 position-relative">
              <div className="col-lg-2"></div>
              <div className="col-12 col-lg-8">
                <article
                  className="row text-black m-0 p-0 my-5 px-3 ticket__item"
                  key={selectedTicket.id}
                >
                  <div className=" col-3 m-0  p-0 d-flex flex-column justify-content-around ticket__bg rounded-start">
                    <div className="row m-0 p-0 ">
                      <p className="versalita mx-auto  m-0  ticket__name-secondary">
                        {selectedTicket.name}
                      </p>
                      <div className="d-flex flex-column align-items-end">
                        <p className="m-0 p-0 ticket__dates-secondary text-end">
                          {selectedTicket._embedded.venues[0].city.name},{" "}
                          <span className="ticket__EP-url fw-bold">
                            {selectedTicket._embedded.venues[0].state.name}
                          </span>
                        </p>
                        <p className="m-0 p-0 ticket__dates-secondary">
                          {selectedTicket.dates.start.localDate}
                        </p>
                      </div>
                    </div>

                    <div className="row p-3 m-0 qr__container">
                      <QRCode
                        value="https://www.eventpass.com"
                        title={selectedTicket.name}
                        className="qr  m-0"
                      />
                      <p className="d-none d-lg-block m-0 p-0 ticket__dates-secondary text-center">
                        www.event<span className="ticket__EP-url">pass</span>
                        .com
                      </p>
                    </div>
                    <p className="d-block d-lg-none m-0 p-0 ticket__dates-secondary text-center">
                      www.event<span className="ticket__EP-url">pass</span>
                      .com
                    </p>
                  </div>
                  <div className="col-9 p-0 d-flex align-items-center position-relative">
                    <Image
                      src={
                        selectedTicket.images.find(
                          (image) => image.width === 640 && image.height === 360
                        )?.url || selectedTicket.images[0].url
                      }
                      className="z-1 w-100"
                      fluid
                    />

                    <div className="position-absolute z-3 d-flex flex-column w-100 justify-content-center ticket__data-wrapper">
                      <div className="glass-bg p-0 py-1 py-lg-3">
                        <div className="row m-0 p-0 pb-2 mx-3 border-1 border-bottom border-white">
                          <div className="col-10 m-0 p-0 d-flex align-items-center">
                            <h3 className="text-white ticket__name versalita m-0">
                              {selectedTicket.name}
                            </h3>
                          </div>
                          <div className="col-2 m-0 p-0 d-flex flex-column align-items-end justify-conten-center">
                            <p className="m-0 p-0 fw-bold text-white ticket__stadium">
                              <span className="ticket__EP-url fw-bold">$ </span>
                              {getRandomNumber()}
                            </p>
                          </div>
                        </div>
                        <div className="row m-0 p-0">
                          <div className="col-8 mt-2 d-flex flex-column text-white">
                            <p className="m-0 p-0 ticket__stadium fw-bold">
                              {selectedTicket._embedded.venues[0].name}
                            </p>
                            <p className="m-0 p-0 ticket__dates">
                              {selectedTicket._embedded.venues[0].city.name},{" "}
                              <span className="ticket__EP-url fw-bold">
                                {selectedTicket._embedded.venues[0].state.name}
                              </span>
                            </p>
                            <p className="m-0 p-0 ticket__dates">
                              {selectedTicket._embedded.venues[0].address.line1}
                            </p>
                          </div>
                          <div className="col-4 mt-2  d-flex flex-column align-items-end justify-content-center border__green">
                            <p className="m-0 p-0 text-white ticket__dates">
                              {selectedTicket.dates.start.localDate}
                            </p>
                            <p className="m-0 p-0 text-white ticket__dates">
                              {selectedTicket.dates.start.localTime}
                            </p>
                          </div>
                        </div>
                        <div className="d-block d-lg-none row m-0 p-0 mt-1">
                          <p className="m-0 p-0 ticket__dates text-white d-flex align-items-center justify-content-center ">
                            <small>
                              www.event
                              <span className="ticket__EP-url">pass</span>
                              .com
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-12">
                <p className="text-center mensaje__style" style={myStyle}>
                  {mensaje}
                </p>
              </div>
            </div>
          </div>
        </figure>
        {/* Compartir/descargar */}
        <div className="compartir d-flex justify-content-center flex-wrap gap-4 align-items-center">
          <h5 className="texto-verde">SHARE</h5>

          <ul className="list-unstyled d-flex flex-wrap gap-3 align-items-center">
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook fs-4 grey-link" />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram fs-4 grey-link" />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter fs-4 grey-link"></i>
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp fs-4 grey-link"></i>
              </a>
            </li>
          </ul>
          <h5 className="texto-verde descarga" onClick={descarga} type="button">
            DOWNLOAD
          </h5>
        </div>
      </div>

      <Footer />
    </>
  );
}
