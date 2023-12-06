import React from "react";

export function LoggedButton(props) {
  return (
    <>
      <button
        className="btn m-0 p-0 d-flex align-items-center justify-content-center"
        onClick={props.handleLoggedClick}
      >
        {props.isLogged ? (
          <p className="m-0">Unloged</p>
        ) : (
          <p className="m-0">Logged</p>
        )}
      </button>
    </>
  );
}
