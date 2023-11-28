import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../styles/purchase.css';

const Purchase = ({ eventData }) => {
  console.log('Rendering Purchase');
  const formatEventDate = (dateString) => {
    const eventDate = new Date(dateString);
    return eventDate.toLocaleDateString("en-EN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlePayment = () => {
    Swal.fire({
      title: 'Payment successful!',
      html: `Congratulations! You've just bought ${count} tickets.
      <br>You can check out your tickets <a href="/mytickets">here</a>.`,
      icon: 'success',
      confirmButtonText: 'Great'
    });
  };
  return (
    <div className="col-lg-6 mb-3 w-100 ">
      <div className="text-white glass-bg rounded-4 px-3 py-3 flip-in-ver-left">
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
          <div className='d-flex justify-content-center align-items-center flex-column mb-3 mt-3'>
          <p>Select the number of tickets</p>
            <div>
              <button onClick={decrementCount} className='btn btn-dark me-4'>-</button>
              <span className="me-4">{count}</span>
              <button onClick={incrementCount}className='btn btn-dark'>+</button>
            </div>
          </div>

        <button
          className="btn btn-dark w-100 rounded rounded-5 py-2"   onClick={handlePayment}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Purchase;
