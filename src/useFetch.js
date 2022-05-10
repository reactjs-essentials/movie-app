import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error(res.message);
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        // auto catches network / connection error
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
