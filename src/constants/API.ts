import { CommonUtils } from "../utils";

export const APP_URI = CommonUtils.buildURIString(
  process.env.REACT_APP_API_HOST,
  process.env.REACT_APP_API_PORT,
  process.env.REACT_APP_API_SSL,
  process.env.REACT_APP_ENV === "production"
);
