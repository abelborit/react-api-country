import React from "react";
import "./ErrorFetch.css";
import NotFoundFetch from "../../assets/svg/Analytics_process_Outline.svg";

export function ErrorFetch(props) {
  // console.log(props.useFetchError);

  return (
    <div className="error-fetch-containar">
      <div className="error-fetch-content">
        <img
          className="error-fetch-svg"
          src={NotFoundFetch}
          alt="404 Not Found"
        />

        <div className="error-fetch-info">
          <p className="error-fetch-status">{props.useFetchError.status}</p>
          <p className="error-fetch-statusText">
            {props.useFetchError.statusText}
          </p>
        </div>
      </div>
    </div>
  );
}
