import axios from "axios";

const GridcapClients = axios.create({
  baseURL: process.env.REACT_APP_CAP,
  headers: {
    "Content-Type": "application/json",
  },
});
export default GridcapClients;