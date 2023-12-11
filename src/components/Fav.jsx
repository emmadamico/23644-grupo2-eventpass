import React, { useState, useEffect } from "react";
import "../styles/Fav.css";

export function Fav({ eventFav }) {
  const [fav, setFav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("LoggedIn")
  );

  useEffect(() => {
    if (!eventFav) {
      return;
    }

    const favEvents = JSON.parse(localStorage.getItem("favEvents")) || [];
    const isFav = favEvents.some((favEvent) => favEvent.id === eventFav.id);
    setFav(isFav);
  }, [eventFav]);

  const HandleFav = () => {
    if (!eventFav) {
      return;
    }

    const updatedFav = !fav;
    setFav(updatedFav);
    const favEvents = JSON.parse(localStorage.getItem("favEvents")) || [];

    if (!updatedFav) {
      const updatedFavEvents = favEvents.filter(
        (favEvent) => favEvent.id !== eventFav.id
      );
      localStorage.setItem("favEvents", JSON.stringify(updatedFavEvents));
    } else {
      favEvents.push(eventFav);
      localStorage.setItem("favEvents", JSON.stringify(favEvents));
    }
  };

  if (!isLoggedIn) {
    return null;
  }
  return (
    <div className="scale">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={fav ? "#FF0000" : "currentColor"}
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
        onClick={HandleFav}
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </div>
  );
}
