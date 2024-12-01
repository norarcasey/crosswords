import { Box, Typography } from "@mui/material";

import { puzzleData } from "./data/puzzle-data";
import { CrosswordIcon } from "./icons/CrosswordIcon";
import { getDateLabel } from "./utils";
import { useNavigate } from "react-router-dom";
import { usePuzzleDateKey } from "./hooks/usePuzzleDateKey";

export function PuzzleList() {
  const navigate = useNavigate();
  const puzzleDateKey = usePuzzleDateKey();

  const sortedDates = Object.keys(puzzleData).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  function handlePuzzleSelect(date: string) {
    navigate(`#${date}`);
  }

  return (
    <Box pl={2} pr={2} display="flex">
      <Box mb={2}>
        <Typography variant="h4" mb={2}>
          Puzzle List
        </Typography>

        <Box display="flex" gap={3} flexWrap="wrap">
          {sortedDates.map((date) => (
            <Box
              key={date}
              display="flex"
              flexDirection="column"
              alignItems="center"
              border="dotted black 1px"
              borderRadius={4}
              p={2}
              minWidth={120}
              onClick={() => handlePuzzleSelect(date)}
              style={{
                cursor: "pointer",
                backgroundColor: puzzleDateKey === date ? "#f0f0f0" : undefined,
              }}
            >
              <Typography variant="caption">
                {getDateLabel(date, {
                  format: {
                    weekday: "long",
                  },
                })}
              </Typography>
              <Typography variant="caption">
                {getDateLabel(date, {
                  format: {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  },
                })}
              </Typography>

              <CrosswordIcon />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
