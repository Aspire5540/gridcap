import axios from "axios";

const LoginClients = axios.create({
  baseURL: process.env.REACT_APP_AUTH,
  headers: {
    "Content-Type": "application/json",
  },
});
export default LoginClients;
