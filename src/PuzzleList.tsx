import { Box, IconButton, Typography } from "@mui/material";
import { puzzleData } from "./data/puzzle-data";
import { CrosswordIcon } from "./icons/CrosswordIcon";

interface PuzzleListProps {
  onPuzzleSelect: (date: string) => void;
}

export function PuzzleList({ onPuzzleSelect }: PuzzleListProps) {
  return (
    <Box ml={4}>
      <Typography variant="h4" mb={4}>
        Puzzle List
      </Typography>

      <Box display="flex">
        {Object.keys(puzzleData).map((date) => (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="caption">{date}</Typography>
            <IconButton onClick={() => onPuzzleSelect(date)}>
              <CrosswordIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
