import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import QRCode from "react-qr-code";

import "../styles/TicketItem.css";

export function TicketItem() {
  const [ticketDataArray, setTicketDataArray] = useState([]);

  function getRandomNumber() {
    const min = 22;
    const max = 138;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  useEffect(() => {
    const storedTicketDataArray = JSON.parse(
      localStorage.getItem("ticketDataArray")
    );
    console.log(storedTicketDataArray);
    setTicketDataArray(storedTicketDataArray);
  }, []);

  const ticketItems =
    ticketDataArray && ticketDataArray.length > 0 ? (
      ticketDataArray.map((ticketData) => (
        <article
          className="row text-black m-0 p-0 my-5 px-3 ticket__item"
          key={ticketData.id}
        >
          <div className=" col-3 m-0  p-0 d-flex flex-column justify-content-around ticket__bg rounded-start">
            <div className="row m-0 p-0 ">
              <p className="versalita mx-auto  m-0  ticket__name-secondary">
                {ticketData.name}
              </p>
              <div className="d-flex flex-column align-items-end">
                <p className="m-0 p-0 ticket__dates-secondary text-end">
                  {ticketData._embedded.venues[0].city.name},{" "}
                  <span className="ticket__EP-url fw-bold">
                    {ticketData._embedded.venues[0].state.name}
                  </span>
                </p>
                <p className="m-0 p-0 ticket__dates-secondary">
                  {ticketData.dates.start.localDate}
                </p>
              </div>
            </div>

            <div className="row p-3 m-0 qr__container">
              <QRCode
                value="https://www.eventpass.com"
                title={ticketData.name}
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
                ticketData.images.find(
                  (image) => image.width === 640 && image.height === 360
                )?.url || ticketData.images[0].url
              }
              className="z-1 w-100"
              fluid
            />
            <div className="position-absolute z-3 d-flex flex-column w-100 justify-content-center ticket__data-wrapper">
              <div className="glass-bg p-0 py-1 py-lg-3">
                <div className="row m-0 p-0 pb-2 mx-3 border-1 border-bottom border-white">
                  <div className="col-10 m-0 p-0 d-flex align-items-center">
                    <h3 className="text-white ticket__name versalita m-0">
                      {ticketData.name}
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
                      {ticketData._embedded.venues[0].name}
                    </p>
                    <p className="m-0 p-0 ticket__dates">
                      {ticketData._embedded.venues[0].city.name},{" "}
                      <span className="ticket__EP-url fw-bold">
                        {ticketData._embedded.venues[0].state.name}
                      </span>
                    </p>
                    <p className="m-0 p-0 ticket__dates">
                      {ticketData._embedded.venues[0].address.line1}
                    </p>
                  </div>
                  <div className="col-4 mt-2  d-flex flex-column align-items-end justify-content-center border__green">
                    <p className="m-0 p-0 text-white ticket__dates">
                      {ticketData.dates.start.localDate}
                    </p>
                    <p className="m-0 p-0 text-white ticket__dates">
                      {ticketData.dates.start.localTime}
                    </p>
                  </div>
                </div>
                <div className="d-block d-lg-none row m-0 p-0 mt-1">
                  <p className="m-0 p-0 ticket__dates text-white d-flex align-items-center justify-content-center ">
                    <small>
                      www.event<span className="ticket__EP-url">pass</span>
                      .com
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))
    ) : (
      <article className="text-white">
        No hay datos de tickets disponibles(En construccion)
      </article>
    );

  return ticketItems;
}
