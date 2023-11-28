import React, { useState } from "react";

import "../styles/PopularSports.css";

export function PopularSports(props) {
  const [selectedKey, setSelectedKey] = useState(null);

  const handleKeyValue = (key) => {
    setSelectedKey(key);
    props.handleGenreName(key);
  };

  return (
    <article className="col-12 col-md-4 col-lg-4 p-0 m-0 popularSports__wrapper">
      <div className="row p-0 m-0 height__half">
        <div
          className="col-6 p-0 m-0 sports__card-bg1"
          key={"Football"}
          onClick={() => handleKeyValue("Football")}
        >
          <div
            className="versalita text-white glass-bg w-100 px-2 py-1 fw-bold"
            onClick={() => handleKeyValue("Football")}
          >
            American Football
          </div>
        </div>
        <div
          className="col-6 p-0 m-0 sports__card-bg2"
          key={"Basketball"}
          keyvalue={"Basketball"}
          onClick={() => handleKeyValue("Basketball")}
        >
          <div className="versalita text-white glass-bg w-100 px-2 py-1 fw-bold">
            Basketball
          </div>
        </div>
      </div>
      <div
        className="row p-0 m-0 height__half"
        key={"Basketball"}
        keyvalue={"Basketball"}
      >
        <div
          className="col-6 p-0 m-0 sports__card-bg3"
          onClick={() => handleKeyValue("Baseball")}
        >
          <div className="versalita text-white glass-bg w-100 px-2 py-1 fw-bold">
            Soccer
          </div>
        </div>
        <div
          className="col-6 p-0 m-0 sports__card-bg4"
          key={"Hockey"}
          keyvalue={"Hockey"}
          onClick={() => handleKeyValue("Hockey")}
        >
          <div className="versalita text-white glass-bg w-100 px-2 py-1 fw-bold">
            Hockey
          </div>
        </div>
      </div>
    </article>
  );
}
