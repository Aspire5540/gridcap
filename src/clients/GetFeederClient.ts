import axios from "axios";

const GetFeederClient = axios.create({
//   baseURL: 'https://gisc2.pea.co.th/arcgis/rest/services/TRACE_115/Trace_115_JSON/GPServer/00Trace115JS/jobs/',
  baseURL:'',
  headers: {
    "Content-Type": "application/json",
  },
});
export default GetFeederClient;