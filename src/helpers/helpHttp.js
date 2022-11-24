/* este es el código que se usará para hacer las peticiones fetch que solo queremos visualizar y no guardar en variables de estado ya que eso lo haremos aparte en el propio archivo, para no estar colocando el mismo código en cada pecitión que se haga */
/* no será un hook personalizado ya que no usaremos React porque será con Vanilla JavaScript */

export const helpHttp = () => {
  const customFetch = async (endpoint, options) => {
    /* por lo general todas las peticiones que hacemos por librerías como axios, toda la data nos la devuelve en formato json, entonces para eso se creará una cabecera por defecto */
    const defaultHeader = {
      /* esto quiere decir que es capaz de aceptar data tipo json pero ya depende de uno lo que se quiera mandar, ya sea texto plano, etc. Es una cabecera que no afecta mucho si se coloca o no */
      accept: "application/json",
    };

    /* cuando hacemos peticiones fetch puede ser que al servidor donde hayamos hecho la petición esté caído y la petición fetch puede estar mucho tiempo ciclando/cargando porque no recibe ninguna respuesta, entonces se usa "new AbortController()" para que cuando detecte que no hay una respuesta del servidor podemos abortar la petición hecha */ /* https://developer.mozilla.org/en-US/docs/Web/API/AbortController */
    const controller = new AbortController();
    options.signal = controller.signal;

    /* para los métodos y las cabeceras */
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    /* cuando son peticiones donde se mandarán datos: */
    /* si es que existe "options.body" entonces los datos que se manden se tendrán que mandar en forma de cadena de texto a la base de datos y si no existe solo retorne false */
    /* no se puede mandar false en el body, pero como se está haciendo un if() si es que es falso, entonces se eliminará y ya así sí se puede colocar false y no nos dará un mensaje de error */
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    // console.log(options);
    setTimeout(() => {
      /* si después de 10 segundos (10000 milisegundos) no se recibe una respuesta de la petición, entonces abortar la petición fetch y con eso se genera el error (catch) de la petición fetch */
      controller.abort();
    }, 10000);

    try {
      let respuesta = await fetch(endpoint, options);
      return await (respuesta.ok
        ? respuesta.json()
        : Promise.reject({
            err: true,
            status: respuesta.status || "00",
            statusText:
              `${respuesta.statusText} Server` ||
              "Ocurrió un problema con el servidor",
          }));
    } catch (error) {
      // console.log(error);
      return error;
    }
  };

  const fetchGet = (url, options = {}) => customFetch(url, options);

  return {
    get: fetchGet,
  };
};
