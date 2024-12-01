import { useForkRef } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CrosswordProviderImperative } from "@jaredreisinger/react-crossword";

import { Puzzle } from "./Puzzle";
import { getDateLabel } from "./utils";
import { puzzleData } from "./data/puzzle-data";
import { PuzzleList } from "./PuzzleList";

export function Home() {
  const crosswordRef = useForkRef<CrosswordProviderImperative>(null);
  const { hash } = useLocation();

  const puzzleDateKey = hash ? hash.slice(1) : 20241130;
  const label = getDateLabel(puzzleDateKey);
  const data = puzzleData[puzzleDateKey];

  return (
    <>
      <Puzzle ref={crosswordRef} label={label} data={data} />
      <PuzzleList />
    </>
  );
}
