import GridcapClients from "../clients/GridcapClients";
import Station from "../models/Stations";
import { CapacitySummary } from "../models/Response/CapacitySummary";
// const config = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }

const GridCapService = {
  getCap: () => {
    return GridcapClients.get<Station[]>(`/readcap`);
  },
  getCapSummary:()=>{
    return GridcapClients.get<CapacitySummary[]>(`/capacity-summary`);
  }
};

const GridCapServices = {
  GridCapServices: GridCapService,
};

export default GridCapServices;