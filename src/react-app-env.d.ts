/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";

    REACT_APP_API_HOST: string;
    REACT_APP_API_PORT: number;
    REACT_APP_API_SSL: boolean;
  }
}
