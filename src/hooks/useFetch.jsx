import { useState, useEffect } from "react";

export const useFetch = (initialUrl) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true);

        let res = await fetch(url);

        if (!res.ok) {
          throw {
            error: true,
            status: res,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError({ error: false });
      } catch (error) {
        setIsPending(false);
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  // Función para realizar solicitudes con una nueva URL
  const performFetch = (newUrl) => {
    setUrl(newUrl);
  };

  return { data, isPending, error, performFetch };
};
