import React from "react";

export const PagerButtons = ({ handleDecrementPage, handleIncrementPage }) => {
  return (
    <div className="d-flex">
      <button
        onClick={handleDecrementPage}
        className="btn btn-outline-dark rounded-start-pill px-5 fs-6 py-0 fw-bold"
      >
        <i className="bi bi-chevron-compact-left"></i>
      </button>
      <button
        onClick={handleIncrementPage}
        className="btn btn-outline-dark rounded-end-pill px-5 fs-6 py-0 fw-bold"
      >
        <i className="bi bi-chevron-compact-right"></i>
      </button>
    </div>
  );
};
