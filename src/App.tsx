import { useState } from "react";
import { DateTime } from "luxon";

import { Box, Typography, useForkRef } from "@mui/material";
import { CrosswordProviderImperative } from "@jaredreisinger/react-crossword";

import { Puzzle } from "./Puzzle";
import { puzzleData } from "./data/puzzle-data";
import { PuzzleList } from "./PuzzleList";

// import { CrosswordBuilder } from "./CrosswordBuilder";

function getDateLabel(dateKey: string | number): string {
  return DateTime.fromFormat(dateKey.toString(), "yyyyMMdd").toLocaleString(
    DateTime.DATE_HUGE
  );
}

function App() {
  const crosswordRef = useForkRef<CrosswordProviderImperative>(null);
  const puzzleDateKey = 20241130;

  const [puzzleInfo, setPuzzleInfo] = useState({
    label: getDateLabel(puzzleDateKey),
    data: puzzleData[puzzleDateKey],
  });

  function handlePuzzleSelect(dateStr: string) {
    setPuzzleInfo({
      label: getDateLabel(dateStr),
      data: puzzleData[dateStr],
    });
  }

  return (
    <>
      <Box component="header" className="page-header">
        <Box>
          <Typography
            className="root-title"
            sx={{
              typography: { sm: "h2", xs: "h3" },
              letterSpacing: 0.01,
            }}
          >
            {`[\\n]ora casey crosswords`}
          </Typography>
        </Box>
      </Box>
      <Box component="main">
        {/* <CrosswordBuilder /> */}
        <Puzzle
          ref={crosswordRef}
          label={puzzleInfo.label.toString()}
          data={puzzleInfo.data}
        />
        <PuzzleList onPuzzleSelect={handlePuzzleSelect} />
      </Box>
      <footer className="page-footer">
        <div className="copyright">
          Copyright &copy; {new Date().getFullYear()} Nora Casey. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
