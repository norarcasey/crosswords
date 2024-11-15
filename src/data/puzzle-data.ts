import { CluesInputOriginal } from "@jaredreisinger/react-crossword/dist/types";
import { data as puzzleData20241109 } from "./20241109";
import { data as puzzleData20241110 } from "./20241110";
import { data as puzzleData20241111 } from "./20241111";
import { data as puzzleData20241112 } from "./20241112";
import { data as puzzleData20241113 } from "./20241113";
import { data as puzzleData20241114 } from "./20241114";
import { data as puzzleData20241115 } from "./20241115";

interface PuzzleData {
  [key: string]: CluesInputOriginal;
}

export const puzzleData: PuzzleData = {
  "November 15th, 2024": puzzleData20241115,
  "November 14th, 2024": puzzleData20241114,
  "November 13th, 2024": puzzleData20241113,
  "November 12th, 2024": puzzleData20241112,
  "November 11th, 2024": puzzleData20241111,
  "November 10th, 2024": puzzleData20241110,
  "November 9th, 2024": puzzleData20241109,
};
