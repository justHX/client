import { ErrorEntities } from "../constants";

import type { ErrorBoundary } from "./types";

export class ErrorController implements ErrorBoundary {
  private entity: ErrorEntities;

  constructor(entity: ErrorEntities) {
    this.entity = entity;
  }

  // чисто символическая хуйня, можно дописать если понадобятся красивые и понятные ошибки
  public handleError(params: any): void {
    console.error(`${this.entity} ${JSON.parse(params)}`);
  }
}
