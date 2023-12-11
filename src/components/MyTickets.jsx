import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { TicketItem } from "./TicketItem";

export function MyTickets() {
  return (
    <>
      <Container>
        <section className="row m-0 p-0 mt-5 pt-5 px-3">
          <div className="col-12 col-md-6 m-0  mt-5 glass-bg ">
            <TicketItem />
          </div>
        </section>
      </Container>
    </>
  );
}
