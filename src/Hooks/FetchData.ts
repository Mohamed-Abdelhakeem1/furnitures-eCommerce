import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetchData = () => {
  const [state, setState] = useState([]);

  const fetchDataAsync = useCallback(async () => {
    try {
      const res = await axios.get(`assets/Products/products.json`);
      const data = await res.data;
      setState(data.products);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchDataAsync();
  }, [fetchDataAsync]);
  return state;
};

export default useFetchData;
