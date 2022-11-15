import axios from "axios";
import { envVars } from "../../config/env/envVars";
import { requestHandler } from "./requestHandler";
import { requestErrorHandler } from "services/ErrorHandler/requestErrorHandler";
import { responseHandler } from "./responseHandler";
import { responseErrorHandler } from "services/ErrorHandler/responseErrorHandler";

export const useAxios = () => {
  const axiosService = axios.create({
    baseURL: envVars.api.https,
    timeout: 10000,
  });
  axiosService.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => requestErrorHandler(error)
  );
  axiosService.interceptors.response.use(responseHandler, responseErrorHandler);
  return axiosService;
};
