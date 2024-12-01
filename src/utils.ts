import { DateTime } from "luxon";

export function getDateLabel(
  dateKey: string | number,
  options?: { format?: Intl.DateTimeFormatOptions }
): string {
  const format = options?.format || DateTime.DATE_MED_WITH_WEEKDAY;

  return DateTime.fromFormat(dateKey.toString(), "yyyyMMdd").toLocaleString(
    format
  );
}
