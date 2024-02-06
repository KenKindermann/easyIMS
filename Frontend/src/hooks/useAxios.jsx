import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TableContext } from "../provider/TableContext";

const useAxios = () => {
  const [error, setError] = useState(null);
  const { setData } = useContext(TableContext);

  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const postData = async (url, data) => {
    try {
      await axios.post(url, data);
      getData(url);
    } catch (error) {
      setError(error);
    }
  };

  const putData = async (url, data, id) => {
    const putUrl = `${url}/${id}`;
    try {
      await axios.put(putUrl, data);
      getData(url);
    } catch (error) {
      setError(error);
    }
  };

  return { error, getData, postData, putData };
};

export default useAxios;
