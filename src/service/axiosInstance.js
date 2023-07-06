import axios from "axios";
import TokenService from "./token.service";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { API_ENDPOINT } from "../config/config";

let authTokens = TokenService.getUser() || "";
const axiosInstance = axios.create({
  API_ENDPOINT,
  headers: { Authorization: `Bearer ${authTokens?.tokens?.access}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!authTokens) {
    authTokens = TokenService.getUser() || "";
    req.headers.Authorization = `Bearer ${authTokens.tokens.access}`;
  }

  const user = jwt_decode(authTokens?.tokens?.access);
  
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  
  if (!isExpired) return req;

  try {
    
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      refresh: authTokens.tokens.refresh,
    });

    let reqOptions = {
      url: `https://api.nfldraftfanatics.com/api/v1/token/refresh/`,
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    const response = await axios.request(reqOptions);
    TokenService.updateLocalAccessToken(response.data?.access);
    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  } catch (error) {
  
    // window.location.href = window.location.origin;
  }
});

export default axiosInstance;
