import GetFeederClient from "../clients/GetFeederClient";


const GetTraceStatus = {
  GetTraceStatus : (jobID: string) => {
    // return GetFeederClient.get(`${jobID}/results/CB_EGAT?f=json`);
    // return GetFeederClient.get(`https://gisc2.pea.co.th/arcgis/rest/services/TRACE_115/Trace_115_JSON/GPServer/00Trace115JS/jobs/${jobID}?f=json`);
    return GetFeederClient.get(`https://gisc2.pea.co.th/arcgis/rest/services/TRACE_115/Trace_115_JSON_FACILITYID/GPServer/00Trace115JS00FACILITYID/jobs/${jobID}?f=json`);
  },

};

// const GetFeederServices = {
//   GetFeederServices: GetFeederService,
// };

export default GetTraceStatus;