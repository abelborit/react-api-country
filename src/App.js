import { HashRouter, Route, Routes } from "react-router-dom";
import { PrincipalPage } from "./pages/PrincipalPage/PrincipalPage";
import { CountriesPage } from "./pages/CountriesPage/CountriesPage";
import { CountryDetailsPage } from "./pages/CountryDetailsPage/CountryDetailsPage";
import { Error404Page } from "./pages/Error404Page/Error404Page";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PrincipalPage></PrincipalPage>}></Route>

        <Route
          path="countries"
          element={<CountriesPage></CountriesPage>}
        ></Route>
        <Route
          path="countries/:countryName"
          element={<CountryDetailsPage></CountryDetailsPage>}
        ></Route>

        <Route path="*" element={<Error404Page></Error404Page>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
