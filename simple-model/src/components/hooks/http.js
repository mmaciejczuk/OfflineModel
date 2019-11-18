import { useState, useEffect } from "react";

export const useHttp = (
  url,
  urlParameterName = null,
  urlParameter = null,
  dependencies
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log("Fetching data...");
    fetch(
      urlParameter === null && urlParameterName === null
        ? url
        : url + `?${urlParameterName}=${urlParameter}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then(json => {
        setIsLoading(false);
        setFetchedData(json);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
