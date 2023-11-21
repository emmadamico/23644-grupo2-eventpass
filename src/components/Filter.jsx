import { useState } from "react";

import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export function Filter({ onSegmentClick }) {
  let url = `https://app.ticketmaster.com/discovery/v2/classifications.jsonn?apikey=${process.env.REACT_APP_CONSUMER_KEY}`;

  const { data, isPending, error } = useFetch(url);

  //console.log(selectedSegmentId);
  return (
    <>
      <section className="d-flex align-items-center justify-content-around filter-container mt-2 py-1 flex-wrap px-2">
        <NavLink
          className="versalita Link px-2 px-md-0"
          activeClassName="active"
          onClick={() => onSegmentClick("todos")} // Puedes asignar cualquier id que desees, en este caso, estoy utilizando "todos"
        >
          Todos
        </NavLink>
        {data?._embedded?.classifications?.map((classification) => {
          const segment = classification?.segment;
          if (segment) {
            return (
              <NavLink
                className="versalita Link"
                key={segment.id}
                activeClassName="active"
                onClick={() => onSegmentClick(segment.id)}
              >
                {segment.name === "Undefined" ? "Otros" : segment.name}
              </NavLink>
            );
          }
          return null;
        })}
      </section>
    </>
  );
}
