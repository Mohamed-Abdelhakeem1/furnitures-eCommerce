import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetchData = (demand: string) => {
  const [state, setState] = useState([]);

  const fetchDataAsync = useCallback(async () => {
    try {
      const res = await axios.get(`/src//assets/Products/${demand}.json`);
      const data = await res.data;
      setState(data[demand]);
    } catch (error) {
      console.log(error);
    }
  }, [demand]);
  useEffect(() => {
    fetchDataAsync();
  }, [fetchDataAsync]);
  return state;
};

export default useFetchData;
