import axios from "axios";

const GetJobIdClients = axios.create({
  // baseURL: 'https://gisc2.pea.co.th/arcgis/rest/services/TRACE_115/Trace_115_JSON/GPServer/00Trace115JS/submitJob',
  baseURL: 'https://gisc2.pea.co.th/arcgis/rest/services/TRACE_115/Trace_115_JSON_FACILITYID/GPServer/00Trace115JS00FACILITYID/submitJob',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
export default GetJobIdClients;