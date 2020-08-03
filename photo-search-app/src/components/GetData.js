import { useState, useEffect } from "react";

export const useFetch = (url, defaultRespose) => {
  let [data, setData] = useState(defaultRespose);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData({
        isLoaded: true,
        data: data.map((item) => ({ ...item, isDescription: null }))
      });
    } catch (e) {
      // console.error(e);
      setData({
        error: e
      })
    }
  }

  useEffect(() => {
    getData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};