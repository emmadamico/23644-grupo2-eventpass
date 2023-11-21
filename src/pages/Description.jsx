import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import OtherEvents from "../components/OtherEvents";
import { useFetch } from "../hooks/useFetch";

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

  console.log(url);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        // const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${apiKey}`);
        const response = await fetch(url);
        const data = await response.json();

        setEventData(data);
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
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="position-relative">
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
                  <a href="" className="btn btn-light rounded-pill w-25">
                    Ver en Mapa
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
              </div>
            </div>
          </div>
        </div>

        <div>
          {eventData ? (
            <div className="container text-white py-5">
              <h1 className="mb-3">{eventData.name}</h1>
              <span className="mb-5">
                {eventData.promoter && eventData.promoter.description
                  ? eventData.promoter.description
                  : "Description null"}
              </span>
              <div className="row">
                <div className="col-lg-6">
                  <h2>Rango de Precios</h2>
                  <p>
                    ${eventData.priceRanges[0].min} - $
                    {eventData.priceRanges[0].max}{" "}
                    {eventData.priceRanges[0].currency}
                  </p>
                  <h2 className="mb-3">Descripción:</h2>
                  <p>{eventData.info}</p>
                  <p>Fecha: {eventData.dates.start.localDate}</p>
                  <p>Hora: {eventData.dates.start.localTime}</p>
                  <h2 className="mb-3">Escenario:</h2>
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
                  <h3>Visita nuestro apartado de </h3>
                  <Link to={"/faq"}>Preguntas Frecuentes</Link>
                </div>
                <div className="col-lg-6">
                  <h2 className="mb-3">Ubicación:</h2>
                  <iframe
                    width="600"
                    height="450"
                    frameborder="0"
                    style={{ border: "0" }}
                    src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDDe3ScyX4InbPvd1xtNjPM3SZraLXueRQ&center=${latitude},${longitude}&zoom=13`}
                  />
                  <h2 className="mb-3">Importante:</h2>

                  <small className=" p-0 m-0 lh-1">
                    ** Se permite la compra de un máximo de 4 entradas por
                    usuario y operación. En caso de detectar compras que no
                    cumplan con lo establecido, las mismas serán dadas de baja.
                  </small>
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
