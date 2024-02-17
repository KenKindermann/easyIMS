// Hooks
import { useContext, useState } from "react";

// Context
import { TableContext } from "../provider/TableContext";
import { DataContext } from "../provider/DataContext";

// Libraries
import axios from "axios";

const useAxios = () => {
  const [error, setError] = useState(null);
  const { setSelectedItems } = useContext(TableContext);
  const { activeState } = useContext(DataContext);

  // Get data by url parameter
  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      activeState.setData(response.data);
      return response.data;
    } catch (error) {
      setError(error);
    }
  };

  // Post data by url and data parameter
  const postData = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      getData(url);
      return response.data;
    } catch (error) {
      setError(error);
    }
  };

  // Put data by url, data, id, response parameter
  const putData = async (url, data, id, response) => {
    const putUrl = `${url}/${id}`;
    try {
      await axios.put(putUrl, data);
      if (response) {
        getData(url);
      }
    } catch (error) {
      setError(error);
    }
  };

  // Delete data by url and items parameter
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

  // Sort data by url parameter
  const sortData = async (url) => {
    try {
      const response = await axios.get(url);
      getData(url);
    } catch (error) {
      setError(error);
    }
  };

  // Search data by url parameter, replace or add response by add parameter
  const searchData = async (url, add) => {
    try {
      const response = await axios.get(url);
      if (add) {
        activeState.setData([...activeState.data, ...response.data]);
      } else {
        activeState.setData(response.data);
      }
    } catch (error) {
      setError(error);
    }
  };

  return { error, getData, postData, putData, deleteData, sortData, searchData };
};

export default useAxios;
