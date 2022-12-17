import axios from "axios";
import { useQuery } from "react-query";

const fetchItems = () => {
  return axios.get("http://localhost:4000/items");
};

const useFetchItems = () => {
  return useQuery("Recent-Items", fetchItems);
};

export default useFetchItems;
