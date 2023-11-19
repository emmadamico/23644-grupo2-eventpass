import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Fav } from "./Fav";
import { Filter } from "./Filter";

export default function Events() {
  //Paginador
  const [page, setPage] = useState(1);

  //Manejadores de paginador
  const HandleIncrementPage = () => {
    setPage(page + 1);
  };

  const HandleDecrementPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  const [selectedSegmentId, setSelectedSegmentId] = useState(null);

  const handleSegmentClick = (segmentId) => {
    setSelectedSegmentId(segmentId);
    console.log("Segment ID seleccionado:", segmentId);
  };

  const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=9`;
  //console.log(url);

  let { data, isPending, error, performFetch } = useFetch(url);
  //console.log(isPending, error);

  useEffect(() => {
    if (selectedSegmentId === "todos") {
      setSelectedSegmentId(null);
      const newUrl = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=9`;

      performFetch(newUrl);
    } else if (selectedSegmentId) {
      const newUrl = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=9&segmentId=${selectedSegmentId}`;

      performFetch(newUrl);
      //console.log(selectedSegmentId, newUrl);
    }
  }, [selectedSegmentId, page]);
  return (
    <>
      <Filter onSegmentClick={handleSegmentClick} />
      <Container className="p-0">
        <section className="row p-0 m-0">
          {data?._embedded?.events?.map((event) => (
            <div
              className="col-12 col-md-6 col-lg-4  m-0 p-0 px-0 p-md-2"
              key={event.id}
            >
              <div className="position-relative d-flex align-items-center card__container">
                <div className="position-absolute z-2 px-2 w-100 py-2 d-flex flex-column gap-2 card__text ">
                  <h4 className="m-0 p-0 versalita">{event.name}</h4>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="m-0 p-0">{event.dates?.start?.localDate}</p>
                    <p className="m-0 p-0">{event.dates?.start?.localTime}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <Link to={`/description/:${event.id}`} className="hover">
                      Ir al Evento
                    </Link>

                    <Fav />
                  </div>
                </div>

                <div className="position-absolute z-1">
                  {event.images && event.images.length > 0 && (
                    <Image
                      src={
                        event.images.find(
                          (image) => image.width === 640 && image.height === 360
                        )?.url || event.images[0].url
                      }
                      className=""
                      fluid
                      rounded
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="d-flex align-items-center justify-content-around mb-5">
          <button
            onClick={HandleDecrementPage}
            className="btn btn-outline-dark rounded-pill px-5 fs-4 py-0 fw-bold"
          >
            -
          </button>
          <button
            onClick={HandleIncrementPage}
            className="btn btn-outline-dark rounded-pill px-5 fs-4 py-0 fw-bold"
          >
            +
          </button>
        </div>
      </Container>
    </>
  );
}
