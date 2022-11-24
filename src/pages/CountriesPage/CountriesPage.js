import React from "react";
import { CountriesName } from "../../components/CountriesName/CountriesName";
import { ErrorFetch } from "../../components/ErrorFetch/ErrorFetch";
import { Header } from "../../components/Header/Header";
import { HomeBtn } from "../../components/HomeBtn/HomeBtn";
import { Loader } from "../../components/Loader/Loader";
import { ScrollTopBtn } from "../../components/ScrollTopBtn/ScrollTopBtn";
import { useFetch } from "../../hooks/useFetch";
import "./CountriesPage.css";

export const CountriesPage = () => {
  let url = "https://restcountries.com/v3.1/all";
  const { useFetchData, useFetchError, useFetchLoading } = useFetch(url);

  if (!useFetchData) return null;
  // console.log(useFetchData);
  // console.log(useFetchError);

  return (
    <>
      <Header></Header>

      {useFetchLoading && <Loader></Loader>}
      {useFetchError && <ErrorFetch useFetchError={useFetchError}></ErrorFetch>}

      {!useFetchLoading && (
        <section className="section-countries-name">
          <CountriesName useFetchData={useFetchData}></CountriesName>
        </section>
      )}

      <HomeBtn></HomeBtn>
      <ScrollTopBtn></ScrollTopBtn>
    </>
  );
};
