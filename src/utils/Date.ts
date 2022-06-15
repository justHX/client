import { DateTime } from "luxon";

import { DATE_FORMAT } from "const";

export function parseDate(date: string) {
  if (!date) return "invalid date";
  return DateTime.fromISO(date).toFormat(DATE_FORMAT);
}
