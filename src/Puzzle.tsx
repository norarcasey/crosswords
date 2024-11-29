import { Ref, useState } from "react";
import { CluesInputOriginal } from "@jaredreisinger/react-crossword/dist/types";
import Crossword, {
  CrosswordProviderImperative,
} from "@jaredreisinger/react-crossword";
import { Box, Typography } from "@mui/material";

import { PuzzleCompleteDialog } from "./PuzzleCompleteDialog";

interface PuzzleProps {
  data: CluesInputOriginal;
  label: string;
  ref: Ref<CrosswordProviderImperative>;
}

export function Puzzle({ data, label, ref }: PuzzleProps) {
  const [open, setOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  const [isComplete, setIsComplete] = useState(false);

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
          onCellChange={(_row, _col, char) => {
            if (!!char) {
              setIsComplete(false);
            }
          }}
          onCrosswordComplete={(correct?: boolean) => {
            if (isCorrect === correct) return;

            setIsCorrect(!!correct);

            if (isComplete) return;

            setOpen(true);
            setIsComplete(true);
          }}
          useStorage={false}
        />
      </Box>
      <PuzzleCompleteDialog
        open={open}
        isCorrect={!!isCorrect}
        onClose={() => {
          setOpen(false);
        }}
      />
    </Box>
  );
}
