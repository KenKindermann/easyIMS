import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAll = async (url) => {
    console.log("useFetch:");
    try {
      const response = await axios.get(url);

      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return { data, error, fetchAll };
};

export default useFetch;
