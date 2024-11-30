import { DateTime } from "luxon";

export function getDateLabel(dateKey: string | number): string {
  return DateTime.fromFormat(dateKey.toString(), "yyyyMMdd").toLocaleString(
    DateTime.DATE_HUGE
  );
}
