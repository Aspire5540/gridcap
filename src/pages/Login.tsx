import { use, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ClearCookie, GetCookie } from "../common/Cookie";
import AuthServices from "../services/AuthService";
import TokenResponse from "../models/Response/TokenResponse";
import { UserInFoResponse } from "../models/Response/UserInfoResponse";

const Login = () => {
    const codeParams = window.location.href.split("code=")[1];
    const location = useLocation();
    const navigate = useNavigate();
    const token = GetCookie("accessToken");
    const authUrl = 'https://sso2.pea.co.th/realms/pea-users/protocol/openid-connect/auth?client_id=pea-psim&redirect_uri=' + window.location.origin + '&response_type=code&scope=openid';
    useEffect(() => {
        if (codeParams === undefined) {
            //   AuthServices.AuthServices.getLogIn().then((link) => {
            // console.log(authUrl);
            window.location.href = authUrl;
            //   });
        } else {

            const queryParams = new URLSearchParams(location.search);
            const state = queryParams.get("session_state") ?? "";
            console.log("login", token, codeParams);
            if (token === null && typeof codeParams !== "undefined") {
                AuthServices.AuthServices.getToken(codeParams, window.location.origin)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.status === 1) {
                            AuthServices.AuthServices.getUserInfo(res.data.access_token)
                                .then((user) => {
                                    console.log(user);
                                    const payrollArea =
                                        user.data.payroll_area;
                                    const formattedPayrollArea =
                                        payrollArea < 10 ? `0${payrollArea}` : payrollArea.toString();
                                    document.cookie = `area=${formattedPayrollArea}`;
                                    document.cookie = `peaName=${user.data.business_area_name}`;
                                    document.cookie = `businessArea=${user.data.business_area}`;
                                    document.cookie = `position=${user.data.plans_text_full}`;
                                    document.cookie = `name=${user.data.first_name} ${user.data.last_name}`;
                                    document.cookie = `department=${user.data.dept_full}`;
                                    // document.cookie = `token=${res.data.id_token}`;
                                    document.cookie = `accessToken=${res.data.access_token}`;
                                    document.cookie = `state=${state}`;
                                    document.cookie = `employeeID=${user.data.vendor_code.slice(4, 10)}`;
                                    document.cookie = `telMobile=${user.data.tel_mobile}`;

                                    queryParams.delete("code");
                                    queryParams.delete("state");
                                    queryParams.delete("session_state");

                                    navigate("/gridcap");
                                    // MJMService.get(res.data.id_token, formattedPayrollArea);
                                })
                            // .catch((err) => {
                            //     if (err.response.status === 401) {
                            //         ClearCookie();
                            //         AuthServices.AuthServices.getLogIn().then((link) => {
                            //             window.location.href = link.data;
                            //         });
                            //     } else {
                            //         navigate("/error");
                            //     }
                            // });
                        }
                    })
                // .catch((err) => {
                //     if (err.response.status === 401) {
                //         ClearCookie();
                //         AuthServices.AuthServices.getLogIn().then((link) => {
                //             window.location.href = link.data;
                //         });
                //     } else {
                //         navigate("/error");
                //     }
                // });
            } else {
                console.log("not login")
                navigate("/gridcap");
            }
        }
    }, [codeParams, location.search, navigate, token]);

    return <></>;
};

export default Login;
