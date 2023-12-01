import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { Fav } from "./Fav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { PagerButtons } from "./Pager";
import "../styles/OtherEvents.css";

export default function OtherEvents() {
  const [elements, setElements] = useState(4);
  const [page, setPage] = useState(1);

  let url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=${elements}`;

  // Maneja el llamado a la api y trae los datos
  let { data, isPending, error, performFetch } = useFetch(url);

  //Manejadores de paginador
  const handleIncrementPage = () => {
    setPage(page + 1);
    performFetch(url);
  };

  const handleDecrementPage = () => {
    setPage(page > 1 ? page - 1 : page);
    performFetch(url);
  };

  // Actualizar la URL cuando cambia el número de elementos o pagina
  useEffect(() => {
    url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=${elements}`;
    performFetch(url);
  }, [page, elements]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newElements;

      if (windowWidth <= 576) {
        newElements = 1;
      } else if (windowWidth >= 577 && windowWidth <= 768) {
        newElements = 2;
      } else {
        newElements = 4;
      }

      setElements(newElements);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {}, [url, elements]);
  return (
    <>
      <Container>
        <div className="d-flex align-items-center justify-content-between mt-5 pt-5 mb-2 ">
          {isPending ? (
            "loading"
          ) : (
            <h3 className="text-white versalita">More Events</h3>
          )}
          <PagerButtons
            handleDecrementPage={handleDecrementPage}
            handleIncrementPage={handleIncrementPage}
          />
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
          <section className="row p-0 m-0 card__container py-4">
            {data?._embedded?.events?.map((event) => (
              <div
                className="col-12 col-md-6 col-lg-3  m-0 p-0 px-0 p-md-2 card__container"
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
