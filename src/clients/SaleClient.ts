import axios from "axios";

const SaleClients = axios.create({
  baseURL: process.env.REACT_APP_SALE,
  headers: {
    "Content-Type": "application/json",
  },
});
export default SaleClients;