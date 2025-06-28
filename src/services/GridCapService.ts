import GridcapClients from "../clients/GridcapClients";
import Station from "../models/Stations";

// const config = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }

const GridCapService = {
  getCap: () => {
    return GridcapClients.get<Station[]>(`/readcap`);
  },

};

const GridCapServices = {
  GridCapServices: GridCapService,
};

export default GridCapServices;