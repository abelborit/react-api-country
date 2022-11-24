import React from "react";
import { Link } from "react-router-dom";
import "./CountriesName.css";

export const CountriesName = (props) => {
  // console.log(props.useFetchData);
  const countriesNameList = props.useFetchData.map((elemento) => {
    return (
      <Link
        key={elemento.name.common}
        to={elemento.name.common.toLowerCase()}
        className="countries-name-content"
      >
        <img
          className="countries-img"
          src={elemento.flags.svg}
          alt={elemento.name.common}
        />

        <p className="countries-name">
          {elemento.name.common} <span>{elemento.cca2}</span>
        </p>

        <hr className="line-division" />

        <div className="countries-info-container">
          <p className="countries-info">
            <strong>Capital:</strong> {elemento.capital}
          </p>
          <p className="countries-info">
            <strong>Continent:</strong> {elemento.continents}
          </p>
          <p className="countries-info">
            <strong>Population:</strong> {elemento.population}
          </p>
        </div>
      </Link>
    );
  });

  return <div className="countries-name-container">{countriesNameList}</div>;
};
