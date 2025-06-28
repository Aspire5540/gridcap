import GetFeederClient from "../clients/GetFeederClient";

const GetFeederService = {
  GetFeeder : (jobID: string) => {
    return GetFeederClient.get(`https://gisc2.pea.co.th/arcgis/rest/services/TRACE_115/Trace_115_JSON/GPServer/00Trace115JS/jobs/${jobID}/results/CB_EGAT?f=json`);
  },

};

const GetFeederServices = {
  GetFeederServices: GetFeederService,
};

export default GetFeederServices;