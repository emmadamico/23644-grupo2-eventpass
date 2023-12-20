import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Fav } from "./Fav";
import "../styles/Events.css";
import "../styles/FavEvents.css";

export function FavEvents() {
  const [favDataArray, setFavDataArray] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/mytickets");
    window.location.reload(true);
  };

  useEffect(() => {
    const storedFavEventsArray = JSON.parse(localStorage.getItem("favEvents"));
    console.log(storedFavEventsArray);
    setFavDataArray(storedFavEventsArray);
  }, []);
  console.log(favDataArray);

  const favItems =
    favDataArray && favDataArray.length > 0 ? (
      favDataArray.map((favData) => (
        <div
          className="col-12  m-0 p-0 px-0 py-2  my-5 card__container"
          key={favData.id}
        >
          <div className="position-relative d-flex align-items-center card__container">
            <div className="position-absolute z-2 px-2 w-100 py-2 d-flex flex-column gap-2 card__text ">
              <h5 className="m-0 p-0 versalita">{favData.name}</h5>
              <div className="d-flex align-items-center justify-content-between">
                <p className="m-0 p-0">{favData.dates?.start?.localDate}</p>
                <p className="m-0 p-0">{favData.dates?.start?.localTime}</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <Link to={`/description/:${favData.id}`} className="hover">
                  <button className="btn btn-dark rounded-pill btn__black-green">
                    See More
                  </button>
                </Link>
                <Link onClick={handleClick}>
                  {" "}
                  <Fav eventFav={favData} />
                </Link>
              </div>
            </div>
            <div className=" z-1 rounded ">
              {favData.images && favData.images.length > 0 && (
                <Image
                  src={
                    favData.images.find(
                      (image) => image.width === 640 && image.height === 360
                    )?.url || favData.images[0].url
                  }
                  className=""
                  fluid
                  rounded
                />
              )}
            </div>
          </div>
        </div>
      ))
    ) : (
      <article className="text-white mt-5">
        <h3 className="versalita text-white fs-4 text-center">
          Don´t have any events in favorites..
        </h3>
        <div className="d-flex align-items-center justify-content-end">
          <Link to={"/"} className="Link">
            <button className="btn btn-dark rounded-pill">
              Find More Events
            </button>
          </Link>
        </div>
      </article>
    );

  return favItems;
}
