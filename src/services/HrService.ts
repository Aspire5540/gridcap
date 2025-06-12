import httpClient from "../clients/LoginClients";
import HrResponse from "../models/Response/HrResponse";

const HrService = {
  getOverviews: (empId: string | undefined) => {
    return httpClient.get<HrResponse>(`/HR?empId=${empId}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
  },

  getDepartMent: (deptSap: number | undefined) => {
    return httpClient.get<HrResponse>(`/HR/DepartMent?deptSap=${deptSap}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
  },

  getManager: (deptSap: number | undefined) => {
    return httpClient.get<HrResponse>(`/HR/Manager?deptSap=${deptSap}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
  },
};

const HrServices = {
  HrServices: HrService,
};

export default HrServices;
