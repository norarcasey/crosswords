import { DateTime } from "luxon";
import { useForkRef } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CrosswordProviderImperative } from "@jaredreisinger/react-crossword";

import { Puzzle } from "./Puzzle";
import { getDateLabel } from "./utils";
import { puzzleData } from "./data/puzzle-data";
import { PuzzleList } from "./PuzzleList";

function usePuzzleDateKey() {
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

export function Home() {
  const crosswordRef = useForkRef<CrosswordProviderImperative>(null);

  const puzzleDateKey = usePuzzleDateKey();
  const label = getDateLabel(puzzleDateKey);
  const data = puzzleData[puzzleDateKey];

  return (
    <>
      <Puzzle ref={crosswordRef} label={label} data={data} />
      <PuzzleList />
    </>
  );
}
