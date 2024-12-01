import { useLocation } from "react-router-dom";
import { DateTime } from "luxon";

import { puzzleData } from "../data/puzzle-data";

export function usePuzzleDateKey() {
  const { hash } = useLocation();

  // remove the leading `#`
  const hashDateKey = hash.slice(1);

  if (hashDateKey && puzzleData[hashDateKey]) {
    return hashDateKey;
  }

  const now = DateTime.local().toFormat("yyyyMMdd");
  if (puzzleData[now]) {
    return now;
  }

  // Grab the latest puzzle we have
  return Object.keys(puzzleData).sort((a, b) => parseInt(b) - parseInt(a))[0];
}
