import { Box, IconButton, Typography } from "@mui/material";
import { puzzleData } from "./data/puzzle-data";
import { CrosswordIcon } from "./icons/CrosswordIcon";

interface PuzzleListProps {
  onPuzzleSelect: (date: string) => void;
}

export function PuzzleList({ onPuzzleSelect }: PuzzleListProps) {
  return (
    <Box pl={2} display="flex">
      <Box mb={2}>
        <Typography variant="h4" mb={2}>
          Puzzle List
        </Typography>

        <Box display="flex" gap={2}>
          {Object.keys(puzzleData).map((date) => (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              border="dotted black 1px"
              borderRadius={4}
              p={2}
            >
              <Typography variant="caption" whiteSpace="wrap">
                {date}
              </Typography>
              <IconButton onClick={() => onPuzzleSelect(date)}>
                <CrosswordIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
