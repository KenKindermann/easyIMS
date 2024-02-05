import { useContext, useState } from "react";
import axios from "axios";
import { TableContext } from "../provider/TableContext";

const useFetch = () => {
  const [error, setError] = useState(null);
  const { data, setData } = useContext(TableContext);

  const fetchAll = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  return { error, fetchAll };
};

export default useFetch;
