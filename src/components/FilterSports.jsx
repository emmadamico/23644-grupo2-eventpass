import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export function FilterSports({ onSegmentClick }) {
  let url = `https://app.ticketmaster.com/discovery/v2/classifications/KZFzniwnSyZfZ7v7nE.json?apikey=${process.env.REACT_APP_CONSUMER_KEY}`;

  const { data, isPending, error } = useFetch(url);

  //console.log(selectedSegmentId);
  return (
    <>
      <section className="d-flex align-items-center justify-content-around flex-wrap  mt-5   py-2  px-2 filter-container box__shadow-inset">
        <NavLink
          className="versalita Link px-2 px-md-0"
          activeClassName=""
          onClick={() => onSegmentClick("todos")}
        >
          All
        </NavLink>
        {data?._embedded?.classifications?.map((classification) => {
          const genres = classification?.segment._embedded[0]?.genres;
          console.log(genres);
          if (genres && genres.length > 0) {
            return genres.map((genre) => (
              <NavLink
                className="versalita Link"
                key={genre.id}
                activeClassName=""
                onClick={() => onSegmentClick(genre.id)}
              >
                {genre.name === "Undefined" ? "Another" : genre.name}
              </NavLink>
            ));
          }

          return null;
        })}
      </section>
    </>
  );
}
