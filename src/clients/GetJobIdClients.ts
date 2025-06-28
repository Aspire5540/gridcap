import axios from "axios";

const GetJobIdClients = axios.create({
  baseURL: 'https://gisc2.pea.co.th/arcgis/rest/services/TRACE_115/Trace_115_JSON/GPServer/00Trace115JS/submitJob',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
export default GetJobIdClients;