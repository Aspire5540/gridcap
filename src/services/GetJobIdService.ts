import GetJobIdClients from "../clients/GetJobIdClients";


// const config = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }

const GetJobIdService = {
  getJobId : (lat: number,lon: number) => {
    return GetJobIdClients.post('',{
        Latitude:lat,
        Longitude:lon,
        f:'json'
    });
  },

};

const GetJobIdServices = {
  GetJobIdServices: GetJobIdService,
};

export default GetJobIdServices;