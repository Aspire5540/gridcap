export default interface HrResponse {
  tel_mobile: any;
  vendor_code: any;
  last_name: any;
  dept_full: any;
  plans_text_full: any;
  first_name: any;
  name: any;
  preferred_username: any;
  business_area: any;
  business_area_name: any;
  payroll_area: any;
  data: DataHrResponse;
}

export interface DataHrResponse {
  data: HrResponseData;
}

export interface HrResponseData {
  ServiceMessage: string;
  ServiceStatus: boolean;
  dataDetail: DataDetailResponse[];
}

export interface DataDetailResponse {
  business_area: string;
  business_area_name: string;
  cost_center: string;
  cost_center_name: string;
  dept_change_code: string;
  dept_full: string;
  dept_sap: number;
  dept_sap_full: string;
  dept_sap_short: string;
  dept_short: string;
  dept_stable_code: string;
  dept_upper: number;
  emp_id: number;
  eng_name_full: string;
  first_name: string;
  last_name: string;
  level_code: string;
  level_desc: string;
  payroll_area: number;
  payroll_area_name: string;
  pea_code: string;
  plans_code: number;
  plans_text_full: string;
  plans_text_short: string;
  posi_code: number;
  posi_status: number;
  posi_status_desc: string;
  posi_text: string;
  posi_text_short: string;
  region: number;
  region_name: string;
  resource_code: number;
  resource_name: string;
  sap_update_date: string;
  sex: string;
  stell_code: number;
  stell_text_full: string;
  stell_text_short: string;
  sub_region: number;
  sub_region_name: string;
  title_s_desc: string;
  updated_date: string;
  vendor_code: string;
}
