import React from "react";
import { useParams } from "react-router-dom";
import { BackBtn } from "../../components/BackBtn/BackBtn";
import { CountryDetails } from "../../components/CountryDetails/CountryDetails";
import { ErrorFetch } from "../../components/ErrorFetch/ErrorFetch";
import { Header } from "../../components/Header/Header";
import { HomeBtn } from "../../components/HomeBtn/HomeBtn";
import { Loader } from "../../components/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";
import "./CountryDetailsPage.css";

export const CountryDetailsPage = () => {
  const { countryName } = useParams();
  let url = `https://restcountries.com/v3.1/name/${countryName}`;
  const { useFetchData, useFetchError, useFetchLoading } = useFetch(url);

  if (!useFetchData) return null;
  // console.log(useFetchData);

  return (
    <div className="all-container">
      <Header></Header>

      {useFetchLoading && <Loader></Loader>}
      {useFetchError && <ErrorFetch useFetchError={useFetchError}></ErrorFetch>}

      {!useFetchLoading && (
        <section className="section-country-details">
          <CountryDetails useFetchData={useFetchData}></CountryDetails>
        </section>
      )}

      <HomeBtn></HomeBtn>
      <BackBtn></BackBtn>
    </div>
  );
};
