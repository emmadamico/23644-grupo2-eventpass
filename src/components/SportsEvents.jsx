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
  const elementos = 1;
  const [page, setPage] = useState(1);
  const [selectedSegmentId, setSelectedSegmentId] = useState(null);

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
  const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=${page}&size=${elementos}&segmentId=KZFzniwnSyZfZ7v7nJ`;

  let { data, isPending, error, performFetch } = useFetch(url);
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
  useEffect(() => {
    performFetch(url);
  }, [url]);
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
        <PopularSports />
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
          {!isPending && data && (
            <>
              {shuffledEvents.map((event) => (
                <div className="m-0 p-0 px-0  card__container" key={event.id}>
                  <div className=" px-0 position-relative d-flex align-items-center card__container">
                    <div className="position-absolute z-2 px-2 w-100 py-2 d-flex flex-column gap-2 card__text ">
                      <h6 className="m-0 p-0 versalita">{event.name}</h6>
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
                          <button className="btn btn-dark rounded-pill">
                            See More
                          </button>
                        </Link>
                        <Fav />
                      </div>
                    </div>
                    <div className="px-0">
                      {event.images && event.images.length > 0 && (
                        <Image
                          src={
                            event.images.find(
                              (image) =>
                                image.width === 1024 && image.height === 576
                            )?.url || event.images[0].url
                          }
                          className="rounded-image"
                          fluid
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </section>
      </section>
    </Container>
  );
}
