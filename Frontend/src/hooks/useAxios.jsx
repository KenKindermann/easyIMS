import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TableContext } from "../provider/TableContext";

const useAxios = () => {
  const [error, setError] = useState(null);
  const { setData, setSelectedItems } = useContext(TableContext);

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

  const deleteData = async (url, items) => {
    const deletePromises = items.map((item) => {
      const deleteUrl = `${url}/${item.id}`;
      return axios.delete(deleteUrl);
    });

    try {
      await Promise.all(deletePromises);
      getData(url);
      setSelectedItems([]);
      setsel;
    } catch (error) {
      setError(error);
    }
  };

  const sortData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  return { error, getData, postData, putData, deleteData, sortData };
};

export default useAxios;
