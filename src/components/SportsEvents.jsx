import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Image from "react-bootstrap/Image";
import { Fav } from "./Fav";
import Container from "react-bootstrap/Container";
import { PagerButtons } from "./Pager";
import { PopularSports } from "./PopularSports";
import "../styles/SportsEvents.css";

export function SportsEvents() {
  const [index, setIndex] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [genreName, setGenreName] = useState("Basketball");

  const elementos = 200;

  const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&size=${elementos}&segmentId=KZFzniwnSyZfZ7v7nE`;

  let { data: events, isPending } = useFetch(url, [genreName]);
  //console.log(isPending, error);
  //console.log("Events:", events);

  const handleGenreName = (key) => {
    setGenreName(key);
    console.log(key);
  };

  //Cambio la logica por defecto del componente buttos para recorrer los elementos
  const handleIncrementPage = () => {
    setIndex((prevIndex) =>
      prevIndex < filteredEvents.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleDecrementPage = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  useEffect(() => {
    const filteredEvents = events?._embedded?.events.filter((event) => {
      return event._embedded?.attractions[0]?.classifications.some(
        (classification) => {
          return (
            classification.genre && classification.genre?.name === genreName
          );
        }
      );
    });
    setFilteredEvents(filteredEvents);
    //console.log("Filtered Events: ", filteredEvents);
  }, [index, genreName, events]);

  return (
    <Container className="px-0  mt-5 pt-5">
      <div className="d-flex align-items-center justify-content-between p-0 mb-3">
        <h3 className="text-white versalita">Most Popular Sports</h3>
        <PagerButtons
          handleDecrementPage={handleDecrementPage}
          handleIncrementPage={handleIncrementPage}
        />
      </div>

      <section className=" row p-0 m-0 d-flex">
        <PopularSports handleGenreName={handleGenreName} />
        <section className="px-0 col-12 col-md-8 col-lg-8 d-flex flex-column">
          {isPending && (
            <section
              style={{ minHeight: "23.9rem" }}
              className="col-12 col-md-6 col-lg-8 mt-5 pt-1  px-0 w-100 d-flex align-items-center justify-content-center "
            >
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
          )}
          {!isPending && events && (
            <>
              {filteredEvents && filteredEvents.length > 0 ? (
                <div
                  className="m-0 p-0 px-0  card__container"
                  key={filteredEvents[index].id}
                >
                  <div className=" px-0 position-relative d-flex align-items-center card__container">
                    <div className="position-absolute z-2 px-2 w-100 py-2 d-flex flex-column gap-2 card__text ">
                      <h6 className="m-0 p-0 versalita">
                        {filteredEvents[index].name}
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="m-0 p-0">
                          {filteredEvents[index].dates?.start?.localDate}
                        </p>
                        <p className="m-0 p-0">
                          {filteredEvents[index].dates?.start?.localTime}
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <Link
                          to={`/description/:${filteredEvents[index].id}`}
                          className="hover"
                        >
                          <button className="btn btn-dark rounded-pill">
                            See More
                          </button>
                        </Link>
                        <Fav eventFav={filteredEvents[index]} />
                      </div>
                    </div>
                    <div className="px-0">
                      {filteredEvents[index].images &&
                        filteredEvents[index].images.length > 0 && (
                          <Image
                            src={
                              filteredEvents[index].images.find(
                                (image) =>
                                  image.width === 1024 && image.height === 576
                              )?.url || filteredEvents[index].images[0].url
                            }
                            className="rounded-image"
                            fluid
                          />
                        )}
                    </div>
                  </div>
                </div>
              ) : (
                <section className="d-flex flex-column align-items-center center mt-5">
                  <article>
                    <h3 className="versalita text-white">
                      Sorry, no upcoming events soon.
                    </h3>
                  </article>
                  <article className="d-flex flex-column w-100 align-items-center">
                    <h2 className="display-4">
                      EVENT
                      <strong className="fst-italic text__light-green">
                        PASS
                      </strong>
                    </h2>
                  </article>
                </section>
              )}
            </>
          )}
        </section>
      </section>
    </Container>
  );
}
