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

export function Puzzle({ data, label, ref }: PuzzleProps) {
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
        <Crossword
          ref={ref}
          data={data}
          onCrosswordCorrect={setOpen}
          useStorage={false}
        />
      </Box>
      <SuccessDialog open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
