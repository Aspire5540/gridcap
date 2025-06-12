export default interface RmFilterAreaResponse {
  areas: string[];
  pea_offices: PeaOffices[];
  ev_devices: string[];
  status: string[];
  work_type: string[];
}

export interface PeaOffices {
  PEAName: string;
  Longitude: number;
  Latitude: number;
}
