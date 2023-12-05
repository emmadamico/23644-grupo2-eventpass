import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "../styles/Filter.css";
export function Filter({ onSegmentClick }) {
  let url = `https://app.ticketmaster.com/discovery/v2/classifications.jsonn?apikey=${process.env.REACT_APP_CONSUMER_KEY}`;

  const { data } = useFetch(url);

  //console.log(selectedSegmentId);
  return (
    <>
      <section className="d-flex align-items-center justify-content-around flex-wrap  mt-5   py-2  px-2 filter-container box__shadow-inset">
        <NavLink
          className="versalita Link px-4 px-md-0"
          onClick={() => onSegmentClick("todos")}
        >
          All
        </NavLink>
        {data?._embedded?.classifications?.map((classification) => {
          const segment = classification?.segment;
          if (segment) {
            return (
              <NavLink
                className="versalita Link d-flex flex-wrap px-2 px-md-0"
                key={segment.id}
                onClick={() => onSegmentClick(segment.id)}
              >
                {segment.name === "Undefined" ? "Another" : segment.name}
              </NavLink>
            );
          }
          return null;
        })}
      </section>
    </>
  );
}
