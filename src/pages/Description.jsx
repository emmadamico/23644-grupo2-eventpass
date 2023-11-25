import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import OtherEvents from "../components/OtherEvents";
import "../styles/Description.css"

import Purchase from "../components/Purchase";

const Description = () => {
  const [eventData, setEventData] = useState(null);
  const { eventId } = useParams(); // Obtén el eventId de la ruta

  //Constantes par ael Iframe de google maps
  const latitude =
    eventData && eventData._embedded?.venues[0]?.location
      ? eventData._embedded?.venues[0]?.location.latitude
      : "151.2152";
  const longitude =
    eventData && eventData._embedded?.venues[0]?.location
      ? eventData._embedded?.venues[0]?.location.longitude
      : "-33.8569";

  //correccion de url
  const url = `https://app.ticketmaster.com/discovery/v2/events/${eventId.replace(
    ":",
    ""
  )}.json?apikey=${process.env.REACT_APP_CONSUMER_KEY}`;

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        // const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${apiKey}`);
        const response = await fetch(url);
        const data = await response.json();

        setEventData(data);
        console.log(eventData.priceRanges[0].min);
      } catch (error) {
        console.error("Error al obtener detalles del evento:", error);
      }
    };

    fetchEventDetails();
  }, [url]);
  const formatEventDate = (dateString) => {
    const eventDate = new Date(dateString);
    return eventDate.toLocaleDateString("en-EN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <MyNavbar />

      <div
        className="description-container"
      >
        <div className="position-relative" style={{height: "80vh", overflow: "hidden", objectFit: "cover"}}>
          {eventData ? (
            <img
              src={
                eventData.images.find(
                  (image) => image.width === 2048 && image.height === 1152
                )?.url || eventData.images[0].url
              }
              className="img-fluid"
              alt={eventData.name}
            />
          ) : (
            <p>Cargando imagen...</p>
          )}

          <div className="position-absolute w-100 top-50 start-50 translate-middle">
            <div className="container">
              <div className="row ">
                <div className="col-lg-6 d-flex flex-column gap-4 px-3 py-3">
                  <h1 className="text-white fw-bold w-100 fs-1 versalita">
                    {eventData ? eventData.name : `titulo`}
                  </h1>


                  <a href={`https://www.google.com/maps/@${latitude},${longitude},13z?hl=es-419&entry=ttu`} target="blank_" className="btn btn-light rounded-pill w-25">
                    <i class="bi bi-geo-alt me-2"></i>Ver en Mapa

                  </a>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="text-white glass-bg rounded-4 px-3 py-3">
                    <h3>
                      {eventData
                        ? formatEventDate(eventData.dates.start.localDate)
                        : ""}
                    </h3>
                    <div className="my-2">
                      <h4 className="p-0 m-0">
                        {eventData && eventData._embedded?.venues[0]?.name
                          ? eventData._embedded.venues[0].name
                          : "Place "}
                      </h4>
                      <p className="p-0 m-0">
                        {eventData &&
                        eventData._embedded?.venues[0]?.address.line1
                          ? eventData._embedded.venues[0].address.line1
                          : "Adress "}
                      </p>
                      <p className="p-0 m-0 fw-bold">
                        {eventData && eventData._embedded?.venues[0]?.city.name
                          ? eventData._embedded.venues[0].city.name +
                            ", " +
                            eventData._embedded.venues[0].state.name
                          : "city"}
                      </p>
                    </div>

                    <a
                      href=""
                      className="btn btn-dark w-100 rounded rounded-5 py-2"
                    >
                      Get Ticket
                    </a>
                  </div>
                </div>
                <Purchase eventData={eventData} />
              </div>
            </div>
          </div>
        </div>

        <div>
          {eventData ? (
            <div className="container text-white py-5">
              <h1 className="mb-3">{eventData.name}</h1>
              <p className="">
                {eventData.promoter && eventData.promoter.description
                  ? eventData.promoter.description
                  : ""}
              </p>
              <hr />
              <div className="row">
                <div className="col-lg-6">



                  <h2 className="mb-3"><i class="bi bi-file-earmark-text me-2"></i>Description:</h2>

                  {eventData.info 
                  ? <p>{eventData.info}</p>
                  : (<p>Immerse yourself in the world of entertainment with our upcoming event. Whether it's a thrilling show, an exciting sports event, a mesmerizing concert, inspiring art, or captivating theater performance, there's something for everyone. Join us for an unforgettable experience that promises excitement, passion, and enjoyment.</p>)}
                  
                  <p><i class="bi bi-clock me-2"></i>Date: {eventData.dates.start.localDate}</p>
                  <p><i class="bi bi-calendar-check me-2"></i>Hora: {eventData.dates.start.localTime}</p>

                  {eventData.priceRanges 
                  ? (<div className="mb-3"><h2><i class="bi bi-cash-coin me-2"></i>Price:</h2><span>${eventData.priceRanges[0].min}</span> - <span>${eventData.priceRanges[0].max}</span> <span className="bg-success px-1">{eventData.priceRanges[0].currency}</span></div>) 
                  : (<p><span className="px-2 mb-5 bg-success"><i class="bi bi-cash me-2"></i>Free</span></p>)}

                  <h2 className="mb-3">Escenario:</h2>


                  <button type="button" className="btn btn-dark w-75 rounded rounded-5 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ver Ubicaciones
                  </button>

                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-body">
                        {eventData.seatmap.staticUrl ? (
                                      <img
                                        src={
                                          eventData.seatmap && eventData.seatmap.staticUrl
                                            ? eventData.seatmap.staticUrl
                                            : "Seatmap"
                                        }
                                        className="img-fluid"
                                        alt=""
                                      />
                                    ) : (
                                      <p>Cargando ...</p>
                                    )}
                        </div>
                          <button type="button" className="btn btn-dark rounded rounded-5 position-absolute top-0 start-100 translate-middle" data-bs-dismiss="modal">X</button>

                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-lg-6">
                  <h2 className="mb-3"><i class="bi bi-geo-alt-fill me-2"></i>Ubicación:</h2>
                  <iframe
                    title={eventData.name}
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDDe3ScyX4InbPvd1xtNjPM3SZraLXueRQ&center=${latitude},${longitude}&zoom=13`}
                  />
                  <h2 className="mb-3"><i class="bi bi-exclamation-circle me-2"></i>Importante:</h2>

                  <small className=" p-0 mb-0 lh-1">
                    ** Se permite la compra de un máximo de 4 entradas por
                    usuario y operación. En caso de detectar compras que no
                    cumplan con lo establecido, las mismas serán dadas de baja.
                  </small>
                  <h3 className="mt-3">Visita nuestro apartado de </h3>
                  <Link to={"/faq"}>Preguntas Frecuentes <i class="bi bi-box-arrow-up-right ms-2"></i></Link>
                </div>
              </div>
            </div>
          ) : (
            <p>Cargando detalles del evento...</p>
          )}
        </div>
        <OtherEvents />
      </div>

      <Footer />
    </>
  );
};

export default Description;
