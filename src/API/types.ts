export interface APIInstance {
  get(uri: string, params: any): Promise<unknown>;
  post(uri: string, params: any): Promise<unknown>;
  put(uri: string, params: any): Promise<unknown>;
  delete(uri: string, params: any): Promise<unknown>;
}

export interface IAPIController {
  get<T, P = any>(uri: string, params: P): Promise<Maybe<T>>;
  post<T, P = any>(uri: string, params: P): Promise<Maybe<T>>;
  put<T, P = any>(uri: string, params: P): Promise<Maybe<T>>;
  delete<T, P = any>(uri: string, params: P): Promise<Maybe<T>>;
}

export interface ErrorBoundary {
  handleError(params: any): void;
}
