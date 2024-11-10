import { CluesInputOriginal } from "@jaredreisinger/react-crossword/dist/types";
import { data as puzzleData20241109 } from "./20241109";
import { data as puzzleData20241110 } from "./20241110";

interface PuzzleData {
  [key: string]: CluesInputOriginal;
}

export const puzzleData: PuzzleData = {
  "November 10th, 2024": puzzleData20241110,
  "November 9th, 2024": puzzleData20241109,
};
