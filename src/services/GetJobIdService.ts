import GetJobIdClients from "../clients/GetJobIdClients";


// const config = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }

const GetJobIdService = {
  getJobId : (cb:string) => {
    return GetJobIdClients.post('',{
        // Latitude:lat,
        // Longitude:lon,
        FACILITYID_CB:cb,
        f:'json'
    });
  },

};

const GetJobIdServices = {
  GetJobIdServices: GetJobIdService,
};

export default GetJobIdServices;