import React from "react";
import "./CountryDetails.css";

export const CountryDetails = (props) => {
  const contryDetailsCard = props.useFetchData.map((elemento) => {
    // console.log(elemento);
    let currencies = Object.values(elemento.currencies)[0];
    let demonyms = Object.values(elemento.demonyms)[0].m;

    return (
      <div key={elemento.name.common} className="country-card">
        <div className="country-card-img-content">
          <img
            className="country-card-img"
            src={elemento.flags.svg}
            alt={elemento.name.common}
          />
          <img
            className="country-card-img-arms"
            src={elemento.coatOfArms.svg}
            alt={elemento.name.common}
          />
        </div>

        <div className="country-card-content">
          <p className="country-card-name">
            {elemento.name.common}
            <span>{elemento.cca2}</span>
          </p>

          <div className="country-card-info">
            <p className="card-info">
              <strong style={{ color: "#e0ac69" }}>Official Name: </strong>
              {elemento.name.official}
            </p>

            <p className="card-info">
              <strong style={{ color: "#e0ac69" }}>Capital: </strong>
              {elemento.capital}
            </p>

            <p className="card-info">
              <strong style={{ color: "#e0ac69" }}>Continent: </strong>
              {elemento.continents}
            </p>

            <p className="card-info">
              <strong style={{ color: "#e0ac69" }}>Region: </strong>
              {elemento.region}
            </p>

            <p className="card-info">
              <strong style={{ color: "#e0ac69" }}>Sub Region: </strong>
              {elemento.subregion}
            </p>

            <p className="card-info">
              <strong style={{ color: "#e0ac69" }}>Demonyms: </strong>
              {demonyms}
            </p>

            <p className="card-info">
              <strong style={{ color: "#e0ac69" }}>Time Zone: </strong>
              {elemento.timezones[0]}
            </p>

            <p className="card-info">
              <strong style={{ color: "#e0ac69" }}>Population: </strong>
              {elemento.population}
            </p>

            <p className="card-info">
              <strong style={{ color: "#e0ac69" }}>Currency: </strong>
              {currencies.name} ({currencies.symbol})
            </p>
          </div>
        </div>
      </div>
    );
  });

  return <>{contryDetailsCard}</>;
};
