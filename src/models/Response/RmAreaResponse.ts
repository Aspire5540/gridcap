export default interface RmAreaResponse {
  cluster: PositionModel[];
  create_date: string;
  customers: number;
  deadline: string;
  ev_type: string;
  ev_device: string[];
  fault_type: string;
  amp: number;
  priority: number;
  pea_name: string;
  cluster_center_long: number;
  cluster_center_lat: number;
  cluster_radius: number;
  priority_count: number;
  work_name: string;
  work_type: string;
  work_status: number;
  status_desc: string;
  date_finished: string;
  pea_area: string;
  event: EventDetails[];
  remaining_time: number;
}

export interface PositionModel {
  latitude: number;
  longitude: number;
  ev_type: string;
}

export interface EventDetails {
  id: number;
  date_time: string;
  ev_device: string;
  ev_type: string;
  fault_type: string;
  amp: number;
}
