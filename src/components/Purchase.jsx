import React, { useState } from 'react';
const Purchase = ({ eventData }) => {
  const formatEventDate = (dateString) => {
    const eventDate = new Date(dateString);
    return eventDate.toLocaleDateString("en-EN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="col-lg-6 mb-3">
      <div className="text-white glass-bg rounded-4 px-3 py-3">
        <h3>
        {eventData ? eventData.name : "Event Name"}
        </h3>
        <div className="my-2">
          <h4 className="p-0 m-0">
          {eventData
            ? formatEventDate(eventData.dates.start.localDate)
            : ""}
          </h4>
          <p className="p-0 m-0 fw-bold">
            {eventData && eventData.priceRanges
              ? `Price: ${eventData.priceRanges[0].min} - ${eventData.priceRanges[0].max} ${eventData.priceRanges[0].currency}`
              : "Price"}
          </p>
        </div>
        <p className="p-0 m-0 fw-bold">
                        {eventData && eventData._embedded?.venues[0]?.city.name
                          ? eventData._embedded.venues[0].city.name +
                            ", " +
                            eventData._embedded.venues[0].state.name
                          : "city"}
          </p>
          <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>


        <a
          href=""
          className="btn btn-dark w-100 rounded rounded-5 py-2"
        >
          Pay
        </a>
      </div>
    </div>
  );
};

export default Purchase;
