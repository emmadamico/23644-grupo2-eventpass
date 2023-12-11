import React from "react";

import Container from "react-bootstrap/Container";
import { TicketItem } from "./TicketItem";

import "../styles/MyTtickets.css";
import { FavEvents } from "./FavEvents";

export function MyTickets() {
  return (
    <>
      <Container>
        <section className="row m-0 p-0 mt-5 pt-5 px-3">
          <div className=" col-12 col-lg-7 m-0  mt-5 px-4   ticket__container">
            <TicketItem />
          </div>
          <div className="col-1"></div>
          <div className=" col-12 col-lg-4 mt-5 px-4 ticket__container">
            <FavEvents />
          </div>
        </section>
      </Container>
    </>
  );
}
