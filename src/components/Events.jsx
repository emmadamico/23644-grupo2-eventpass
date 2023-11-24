import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Fav } from "./Fav";
import { Filter } from "./Filter";
import "../styles/Events.css";
export default function Events() {
  const elementos = 3;
  //Paginador
  const [page, setPage] = useState(1);

  //Manejadores de paginador
  const HandleIncrementPage = () => {
    setPage(page + 1);
  };

  const HandleDecrementPage = () => {
    setPage(page > 1 ? page - 1 : page);
  };

  const [selectedSegmentId, setSelectedSegmentId] = useState(null);

  const handleSegmentClick = (segmentId) => {
    setSelectedSegmentId(segmentId);
    console.log("Segment ID seleccionado:", segmentId);
  };

  const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=${elementos}`;
  //console.log(url);

  // eslint-disable-next-line no-unused-vars
  let { data, isPending, error, performFetch } = useFetch(url);
  //console.log(isPending, error);

  useEffect(() => {
    const fetchData = async () => {
      let newUrl = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=${elementos}`;

      if (selectedSegmentId === "todos") {
        setSelectedSegmentId(null);
      } else if (selectedSegmentId) {
        newUrl += `&segmentId=${selectedSegmentId}`;
      }

      await performFetch(newUrl);
    };

    fetchData();
  }, [selectedSegmentId, page]);

  //Ordena al azar los eventos
  const shuffledEvents = data?._embedded?.events
    ? [...data._embedded.events].sort(() => Math.random() * 10 - 5)
    : [];
  //console.log(data._embedded?.events[0]?.classifications[0]?.segment?.name);
  return (
    <>
      <Filter onSegmentClick={handleSegmentClick} />
      <Container>
        <div className="d-flex align-items-center justify-content-between mt-5 pt-5 mb-2 ">
          {isPending ? (
            "loading"
          ) : selectedSegmentId !== null ? (
            <h3 className="text-white versalita">
              {data._embedded?.events[0]?.classifications[0]?.segment?.name
                ? data._embedded?.events[0]?.classifications[0]?.segment?.name
                : "Category"}
            </h3>
          ) : (
            <h3 className="text-white versalita">All</h3>
          )}

          <div className="d-flex">
            <button
              onClick={HandleDecrementPage}
              className="btn btn-outline-dark rounded-start-pill  px-5 fs-6 py-0 fw-bold"
            >
              <i class="bi bi-chevron-compact-left"></i>
            </button>
            <button
              onClick={HandleIncrementPage}
              className="btn btn-outline-dark rounded-end-pill px-5 fs-6 py-0 fw-bold"
            >
              <i class="bi bi-chevron-compact-right"></i>
            </button>
          </div>
        </div>
      </Container>
      {isPending && (
        <Container>
          <section className="mt-5 pt-1 w-100 d-flex align-items-center justify-content-ccenter ">
            <article className="d-flex flex-column w-100 align-items-center">
              <h3 className="text-white text-center w-100 display-5">
                Loading...
              </h3>
              <h2 className="display-4">
                {" "}
                EVENT
                <strong className="fst-italic text__light-green">PASS</strong>
              </h2>
            </article>
          </section>
        </Container>
      )}
      {!isPending && data && (
        <Container className="p-0">
          <section className="row p-0 m-0 card__container">
            {shuffledEvents.map((event) => (
              <div
                className="col-12 col-md-6 col-lg-4  m-0 p-0 px-0 p-md-2 card__container"
                key={event.id}
              >
                <div className="position-relative d-flex align-items-center card__container">
                  <div className="position-absolute z-2 px-2 w-100 py-2 d-flex flex-column gap-2 card__text ">
                    <h5 className="m-0 p-0 versalita">{event.name}</h5>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="m-0 p-0">{event.dates?.start?.localDate}</p>
                      <p className="m-0 p-0">{event.dates?.start?.localTime}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <Link to={`/description/:${event.id}`} className="hover">
                        <button className="btn btn-dark rounded-pill">
                          See More
                        </button>
                      </Link>
                      <Fav />
                    </div>
                  </div>
                  <div className=" z-1 rounded ">
                    {event.images && event.images.length > 0 && (
                      <Image
                        src={
                          event.images.find(
                            (image) =>
                              image.width === 640 && image.height === 360
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
        </Container>
      )}
    </>
  );
}
