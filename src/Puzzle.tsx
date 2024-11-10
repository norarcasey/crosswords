import Crossword from "@jaredreisinger/react-crossword";
import { Box, Typography } from "@mui/material";

interface PuzzleProps {
  data: {
    across: {
      [key: number]: {
        clue: string;
        answer: string;
        row: number;
        col: number;
      };
    };
    down: {
      [key: number]: {
        clue: string;
        answer: string;
        row: number;
        col: number;
      };
    };
  };
  label: string;
}

export function Puzzle({ data, label }: PuzzleProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" mb={4}>
        {label}
      </Typography>
      <Box
        display="flex"
        flexDirection="row-reverse"
        minWidth={475}
        maxWidth={600}
      >
        <Crossword data={data} />
      </Box>
    </Box>
  );
}
