import LoginClients from "../clients/LoginClients";
import TokenResponse from "../models/Response/TokenResponse";
import DataDetailResponse  from "../models/Response/HrResponse";

// const httpLocal = axios.create({
//   baseURL: "https://api-riskmap-dev.pea.co.th",
//   headers: {
//     "Content-type": "application/json",
//   },
// });
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const AuthService = {
  getLogIn: () => {
    return LoginClients.get<string>(`/auth`);
  },

  getToken: (code: string, url: string) => { 
    const body = new URLSearchParams({
      code:code,
      url: url,
    });
    // body.set('code', code);
    // body.set('url', url);
    return LoginClients.post<TokenResponse>(
      `/gettoken`,body,  config
    );
  },

  getLogOut: (token: string, state: string) => {
    return LoginClients.get(`/auth/logout?token=${token}&state=${state}`);
  },

  getImage: (empId: string) => {
    return LoginClients.get(`/auth/image/user?preferred=${empId}`);
  },

  getUserInfo: (accessToken: string) => {
    return LoginClients.post<DataDetailResponse>(
      '/getprofile',{token:accessToken}
    );
  },
};

const AuthServices = {
  AuthServices: AuthService,
};

export default AuthServices;

