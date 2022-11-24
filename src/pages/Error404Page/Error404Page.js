import React from "react";
import { Header } from "../../components/Header/Header";
import { HomeBtn } from "../../components/HomeBtn/HomeBtn";
import NotFoundSVG from "../../assets/svg/404_Page_Not_Found _Monochromatic.svg";
import "./Error404Page.css";

export function Error404Page() {
  return (
    <>
      <Header></Header>
      <HomeBtn></HomeBtn>

      <div className="notFound-container">
        <img
          className="notFound-container-svg"
          src={NotFoundSVG}
          alt="404 Not Found"
        />
      </div>
    </>
  );
}
