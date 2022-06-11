import axios, { AxiosInstance } from "axios";

import { APP_URI, ErrorEntities } from "../constants";

import { ErrorController } from "./ErrorController";
import { APIController } from "./APIController";

const axiosInstance = axios.create({ baseURL: APP_URI });
const errorBoundary = new ErrorController(ErrorEntities.API);

class AxiosAPI extends APIController<AxiosInstance> {
  public async get<T, P = any>(uri: string, params?: P): Promise<Maybe<T>> {
    try {
      const { data } = await this.APIInstance.get<T>(uri, params);

      return data;
    } catch (e) {
      this.errorBoundary.handleError(e);
    }
  }

  public async post<T, P = any>(uri: string, params?: P): Promise<Maybe<T>> {
    try {
      const { data } = await this.APIInstance.post<T>(uri, params);

      return data;
    } catch (e) {
      this.errorBoundary.handleError(e);
    }
  }

  public async put<T, P = any>(uri: string, params?: P): Promise<Maybe<T>> {
    try {
      const { data } = await this.APIInstance.put<T>(uri, params);

      return data;
    } catch (e) {
      this.errorBoundary.handleError(e);
    }
  }

  public async delete<T, P = any>(uri: string, params?: P): Promise<Maybe<T>> {
    try {
      const { data } = await this.APIInstance.delete<T>(uri, params);

      return data;
    } catch (e) {
      this.errorBoundary.handleError(e);
    }
  }
}

export const API = new AxiosAPI(axiosInstance, errorBoundary);
