import { DateTime } from "luxon";

import { DATE_FORMAT } from "const";

export function parseDate(date: string, format: string = DATE_FORMAT) {
  if (!date) return "invalid date";
  return DateTime.fromISO(date).toFormat(format);
}
export function formatDate(date: string, format: string = DATE_FORMAT) {
  if (!date) return "invalid date";
  return DateTime.fromFormat(date, format).toISO();
}

