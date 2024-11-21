import Crossword, {
  CrosswordProviderImperative,
} from "@jaredreisinger/react-crossword";
import { Box, Typography } from "@mui/material";
import { SuccessDialog } from "./SuccessDialog";
import { Ref, useState } from "react";
import { CluesInputOriginal } from "@jaredreisinger/react-crossword/dist/types";

interface PuzzleProps {
  data: CluesInputOriginal;
  label: string;
  ref: Ref<CrosswordProviderImperative>;
}

// async function fetchPossibleWords(str: string) {
//   const url = `https://api.datamuse.com/words?sp=${str}`;

//   const response = fetch(url);
//   return (await response).json();
// }

export function Puzzle({ data, label, ref }: PuzzleProps) {
  const [open, setOpen] = useState(false);
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   const test = fetchPossibleWords("t??s");
  //   test.then((data) => {
  //     setWords(data);
  //   });
  // }, []);

  // console.log(words);

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
        flexDirection="column"
        alignItems="left"
        minWidth={350}
        maxWidth={500}
      >
        <Crossword
          ref={ref}
          data={data}
          onCrosswordCorrect={setOpen}
          useStorage={false}
          // onCellChange={(cell, col, char) => console.log(cell, col, char)}
        />
      </Box>
      <SuccessDialog open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
