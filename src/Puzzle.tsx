import Crossword from "@jaredreisinger/react-crossword";
import { Box, Typography } from "@mui/material";

const data = {
  across: {
    1: {
      clue: "Anatomical bag",
      answer: "SAC",
      row: 0,
      col: 0,
    },
    4: {
      clue: "Gorgeous",
      answer: "NORA",
      row: 1,
      col: 0,
    },
    6: {
      clue: "Hot adult device?",
      answer: "IRON",
      row: 2,
      col: 0,
    },
    7: {
      clue: "Possible result of combat fatigue",
      answer: "PTSD",
      row: 3,
      col: 0,
    },
    8: {
      clue: "A stuborn person",
      answer: "ASS",
      row: 4,
      col: 1,
    },
  },
  down: {
    1: {
      clue: "Sound scissors make",
      answer: "SNIP",
      row: 0,
      col: 0,
    },
    2: {
      clue: "Large artery",
      answer: "AORTA",
      row: 0,
      col: 1,
    },
    3: {
      clue: "Jesus's wood?",
      answer: "CROSS",
      row: 0,
      col: 2,
    },
    5: {
      clue: '"No ifs ______ or buts"',
      answer: "ANDY",
      row: 1,
      col: 3,
    },
  },
};

export function Puzzle() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" mb={4}>
        November 9th, 2024
      </Typography>
      <Box
        display="flex"
        flexDirection="row-reverse"
        minWidth={600}
        maxWidth={600}
      >
        <Crossword data={data} />
      </Box>
    </Box>
  );
}
