import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Fav } from "./Fav";
import { PagerButtons } from "./Pager";
import "../styles/MusicEvents.css";

export function MusicEvents() {
  const [elements, setElements] = useState(4);
  const [page, setPage] = useState(1);

  const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=${elements}&segmentId=KZFzniwnSyZfZ7v7nJ`;

  //Manejadores de paginador
  const handleIncrementPage = () => {
    setPage(page + 1);
  };

  const handleDecrementPage = () => {
    setPage(page > 1 ? page - 1 : page);
  };

  // Maneja el llamado a la api y trae los datos
  let { data, isPending, performFetch } = useFetch(url);

  //Vuelve a llamar a la pai cuando cambia la url

  //Maneja la cantidad de elementos q devuelve el llamado a la api segun ancho de navegador
  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const windowWidth = window.innerWidth;
        let newElements;

        if (windowWidth <= 768) {
          newElements = 1;
        } else if (windowWidth >= 777 && windowWidth <= 991) {
          newElements = 2;
        } else if (windowWidth >= 992) {
          newElements = 4;
        }

        setElements(newElements);
      }, 500); // Ajusta el tiempo de espera según tus necesidades
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      performFetch(url);
      setShouldFetch(false);
    }
  }, [url, elements, shouldFetch, performFetch]);

  // ...

  useEffect(() => {
    setShouldFetch(true);
  }, [page, elements]);

  console.log(url);
  console.log(elements);
  console.log(window.innerWidth);
  return (
    <>
      <Container>
        <div className="d-flex align-items-center justify-content-between mt-5 pt-5 mb-2">
          <article>
            <h3 className="text-white versalita">Concerts</h3>
            <div className="linea-color mb-3"></div>
          </article>
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
          <section className="row p-0 m-0 card__container">
            {data?._embedded?.events?.map((event) => (
              <div
                className="col-12 col-md-6 col-lg-3  m-0 p-0 px-0 py-2 py-md-0 px-md-2 card__container"
                key={event.id}
              >
                <div className="position-relative d-flex align-items-center card__container">
                  <div className="position-absolute z-2 px-2 w-100 py-2 d-flex flex-column gap-2 card__text ">
                    <h6 className="m-0 p-0 versalita">{event.name}</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="m-0 p-0">{event.dates?.start?.localDate}</p>
                      <p className="m-0 p-0">{event.dates?.start?.localTime}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <Link to={`/description/:${event.id}`} className="hover">
                        <button className="btn btn-dark rounded-pill btn__black-green">
                          See More
                        </button>
                      </Link>
                      <Fav eventFav={event} />
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
