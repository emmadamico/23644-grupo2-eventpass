import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
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
      ticketDataArray.map((ticketData) => {
        const latitude =
          ticketData && ticketData._embedded?.venues[0]?.location
            ? ticketData._embedded?.venues[0]?.location.latitude
            : "151.2152";
        const longitude =
          ticketData && ticketData._embedded?.venues[0]?.location
            ? ticketData._embedded?.venues[0]?.location.longitude
            : "-33.8569";
        return (
          <section className="row">
            <div className="col-12 col-md-9">
              <article
                className="row text-black m-0 p-0 my-5 px-3 ticket__item"
                key={ticketData.id}
              >
                <div className=" col-3 m-0  p-0  d-flex flex-column justify-content-around ticket__bg rounded-start">
                  <div className="row m-0 p-0 ">
                    <p
                      className="versalita mx-auto  m-0  ticket__name-secondary"
                      style={{
                        display: "-webkit-box",
                        "-webkit-line-clamp": 2,
                        "-webkit-box-orient": "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
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
            <div className="col-12 col-md-3 p-0 m-0 d-flex flex-column justify-content-center">
              <p className="p-0 m-0 versalita text-white fw-bold mb-1 ticket__name-customize">
                {ticketData.name}
              </p>
              <div className="d-flex flex-column my-3 gap-2 ">
                <Link
                  to={`https://www.google.com/maps/@${latitude},${longitude},13z?hl=es-419&entry=ttu`}
                  target="blank_"
                  className="d-flex align-items-center gap-1"
                >
                  <i className="bi bi-geo-alt  fw-bold fs-5 icon__green"></i>
                  <p className="text-white versalita m-0 p-0">Location</p>
                </Link>
                {ticketData._embedded?.venues[0]?.parkingDetail ? (
                  <div className="d-flex align-items-center gap-1">
                    <i class="  bi bi-p-circle fw-bold fs-5 text-white"></i>
                    <p className="text-white versalita m-0 p-0">Parking</p>
                  </div>
                ) : (
                  <div className="d-flex align-items-center gap-1">
                    <i class="bi bi-sign-no-parking fw-bold fs-5 text-danger"></i>
                    <p className="text-white versalita m-0 p-0">Parking</p>
                  </div>
                )}
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Link to={`/customticket/:${ticketData.id}`} className="">
                  <button className="btn btn-dark rounded-start-pill btn__black-green ticket__dates">
                    Customize
                  </button>
                </Link>
                <Link>
                  <button className="btn btn-light rounded-end-pill  ticket__dates">
                    Download
                  </button>
                </Link>
              </div>
            </div>
          </section>
        );
      })
    ) : (
      <article className="text-white">Don´t have any Ticket yet</article>
    );

  return ticketItems;
}
