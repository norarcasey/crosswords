import Crossword from "@jaredreisinger/react-crossword";
import { Box, Typography } from "@mui/material";
import { SuccessDialog } from "./SuccessDialog";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

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
        minWidth={425}
        maxWidth={600}
      >
        <Crossword data={data} onCrosswordCorrect={setOpen} />
      </Box>
      <SuccessDialog open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
