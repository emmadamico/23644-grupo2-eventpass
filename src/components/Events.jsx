import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Fav } from "./Fav";
import { Filter } from "./Filter";
import { PagerButtons } from "./Pager";
import Loader from "./Loader";

import "../styles/Events.css";

export default function Events() {
  const [elements, setElements] = useState(3);
  const [selectedSegmentId, setSelectedSegmentId] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("LoggedIn")
  );

  const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=${elements}`;

  //Manejadores de paginador
  const handleIncrementPage = () => {
    setPage(page + 1);
  };

  const handleDecrementPage = () => {
    setPage(page > 1 ? page - 1 : page);
  };

  const handleSegmentClick = (segmentId) => {
    setSelectedSegmentId(segmentId);
    console.log("Segment ID seleccionado:", segmentId);
  };

  // Maneja el llamado a la api y trae los datos
  // eslint-disable-next-line no-unused-vars
  let { data, isPending, error, performFetch } = useFetch(url);
  //console.log(isPending, error);

  //Utiliza el componente filter para traer el valor del segmentId, y aqui se compone dinamicamente la url par filtrar los elementos segun este valor
  useEffect(() => {
    const fetchData = async () => {
      let newUrl = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=${elements}`;

      if (selectedSegmentId === "todos") {
        setSelectedSegmentId(null);
      } else if (selectedSegmentId) {
        newUrl += `&segmentId=${selectedSegmentId}`;
      }

      await performFetch(newUrl);
    };

    fetchData();
  }, [selectedSegmentId, page, elements, performFetch]);

  //Ordena al azar los eventos
  const shuffledEvents = data?._embedded?.events
    ? [...data._embedded.events].sort(() => Math.random() * 10 - 5)
    : [];

  //Maneja la cantidad de elementos q devuelve el llamado a la api segun ancho de navegador
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newElements;

      if (windowWidth <= 768) {
        newElements = 1;
      } else if (windowWidth >= 777 && windowWidth <= 991) {
        newElements = 2;
      } else if (windowWidth >= 992) {
        newElements = 3;
      }

      setElements(newElements);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    performFetch(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, elements, isLoggedIn]);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("LoggedIn"));
      performFetch(url);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [performFetch, url]);
  return (
    <>
      <Filter onSegmentClick={handleSegmentClick} />
      <Container>
        <div className="d-flex align-items-center justify-content-between mt-5 pt-5 mb-2 ">
          {isPending ? (
            "loading"
          ) : selectedSegmentId !== null ? (
            <h3 className="text-white versalita ">
              {data._embedded?.events[0]?.classifications[0]?.segment?.name
                ? data._embedded?.events[0]?.classifications[0]?.segment?.name
                : "Category"}
            </h3>
          ) : (
            <h3 className="text-white versalita">All</h3>
          )}

          <PagerButtons
            handleDecrementPage={handleDecrementPage}
            handleIncrementPage={handleIncrementPage}
          />
        </div>
      </Container>
      {isPending && (
        <section className="mt-5 pt-1 w-100 d-flex align-items-center justify-content-center ">
          <article className="d-flex flex-column w-100 align-items-center">
            <Loader />
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
      )}
      {!isPending && data && (
        <Container className="p-0">
          {
            <section className="row p-0 m-0 card__container">
              {shuffledEvents.map((event) => (
                <div
                  className="col-12 col-md-6 col-lg-4  m-0 p-0 px-0 py-2 p-md-2 card__container"
                  key={event.id}
                >
                  <div className="position-relative d-flex align-items-center card__container">
                    <div className="position-absolute z-2 px-2 w-100 py-2 d-flex flex-column gap-2 card__text ">
                      <h5 className="m-0 p-0 versalita">{event.name}</h5>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="m-0 p-0">
                          {event.dates?.start?.localDate}
                        </p>
                        <p className="m-0 p-0">
                          {event.dates?.start?.localTime}
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <Link
                          to={`/description/:${event.id}`}
                          className="hover"
                        >
                          <button className="btn btn-dark rounded-pill btn__black-green">
                            See More
                          </button>
                        </Link>
                        {isLoggedIn && (
                          <Fav isLoggedIn={isLoggedIn} eventFav={event} />
                        )}
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
          }
        </Container>
      )}
    </>
  );
}
