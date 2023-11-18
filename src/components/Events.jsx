import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


export default function Events()  {

  let url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=1&size=10`;
  // console.log(url);

  let { data, isPending, error } = useFetch(url);
  console.log(data, isPending, error);
  return (
    <>
      <section className="row">
        {data?._embedded?.events?.map((event) => (
          <div className="col-4 m-auto position-relative" key={event.id}>
            <div className=" position-relative z-3">
              <h3>{event.name}</h3>
              <p>{event.dates?.start?.localDate}</p>
              <p>{event.dates?.start?.localTime}</p>
              <Link to={`/description/${event.id}`} className="btn btn-info">{event.name}</Link>
            </div>
            <img src={event.images[0].url} className="w-100 img-fluid" alt={event.name} />
          </div>
        ))}
      </section>
    </>
  );
}
