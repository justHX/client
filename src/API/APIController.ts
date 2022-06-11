import type { IAPIController, ErrorBoundary, APIInstance } from "./types";

export abstract class APIController<T extends APIInstance>
  implements IAPIController
{
  protected APIInstance: T;
  protected errorBoundary: ErrorBoundary;

  constructor(APIInstance: T, errorBoundary: ErrorBoundary) {
    this.APIInstance = APIInstance;
    this.errorBoundary = errorBoundary;
  }

  public async get<T, P = any>(uri: string, params?: P): Promise<Maybe<T>> {
    throw new Error("Method for override");
  }

  public async post<T, P = any>(uri: string, params?: P): Promise<Maybe<T>> {
    throw new Error("Method for override");
  }

  public async put<T, P = any>(uri: string, params?: P): Promise<Maybe<T>> {
    throw new Error("Method for override");
  }

  public async delete<T, P = any>(uri: string, params?: P): Promise<Maybe<T>> {
    throw new Error("Method for override");
  }
}
