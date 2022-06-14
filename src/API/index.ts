import axios, { AxiosInstance, AxiosResponse } from "axios";

import { APP_URI, ErrorEntities } from "const";

import { ErrorController } from "./ErrorController";
import { APIController } from "./APIController";

const axiosInstance = axios.create({ baseURL: APP_URI });
const errorBoundary = new ErrorController(ErrorEntities.API);

class AxiosAPI extends APIController<AxiosInstance> {
  public async get<T, P = any>(
    uri: string,
    params?: P
  ): Promise<Maybe<AxiosResponse<T>>> {
    try {
      return await this.APIInstance.get<T>(uri, params);
    } catch (e) {
      this.errorBoundary.handleError(e);
      throw e;
    }
  }

  public async post<T, P = any>(
    uri: string,
    params?: P
  ): Promise<Maybe<AxiosResponse<T>>> {
    try {
      return await this.APIInstance.post<T>(uri, params);
    } catch (e) {
      this.errorBoundary.handleError(e);
      throw e;
    }
  }

  public async put<T, P = any>(
    uri: string,
    params?: P
  ): Promise<Maybe<AxiosResponse<T>>> {
    try {
      return await this.APIInstance.put<T>(uri, params);
    } catch (e) {
      this.errorBoundary.handleError(e);
      throw e;
    }
  }

  public async delete<T, P = any>(
    uri: string,
    params?: P
  ): Promise<Maybe<AxiosResponse<T>>> {
    try {
      return await this.APIInstance.delete<T>(uri, params);
    } catch (e) {
      this.errorBoundary.handleError(e);
      throw e;
    }
  }
}

export const API = new AxiosAPI(axiosInstance, errorBoundary);
