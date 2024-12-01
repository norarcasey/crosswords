import { useForkRef } from "@mui/material";
import { CrosswordProviderImperative } from "@jaredreisinger/react-crossword";

import { Puzzle } from "./Puzzle";
import { getDateLabel } from "./utils";
import { puzzleData } from "./data/puzzle-data";
import { PuzzleList } from "./PuzzleList";
import { usePuzzleDateKey } from "./hooks/usePuzzleDateKey";

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
