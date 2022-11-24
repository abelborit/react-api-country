import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    helpHttp()
      .get(url)
      .then((respuesta) => {
        // console.log(respuesta);
        if (!respuesta.err) {
          setError(null);
          setData(respuesta);
        } else {
          setData([]);
          /* si es que hay un error entonces se actualiza con el objeto del error de Promise.reject() del archivo helpHttp.js */
          // console.log(respuesta);
          setError(respuesta);
          // console.log(error);
        }

        setLoading(false); /* cuando ya hayan datos desaparecerá el loader */
      });
  }, [url]);

  return { useFetchData: data, useFetchError: error, useFetchLoading: loading };
};
