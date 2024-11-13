import { Box, Typography, useForkRef } from "@mui/material";
import { Puzzle } from "./Puzzle";
import { puzzleData } from "./data/puzzle-data";
import { PuzzleList } from "./PuzzleList";
import { useState } from "react";
import { CrosswordProviderImperative } from "@jaredreisinger/react-crossword";

function App() {
  const crosswordRef = useForkRef<CrosswordProviderImperative>(null);

  const [puzzleInfo, setPuzzleInfo] = useState({
    label: "November 13th, 2024",
    data: puzzleData["November 13th, 2024"],
  });

  function handlePuzzleSelect(date: string) {
    setPuzzleInfo({
      label: date,
      data: puzzleData[date],
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
        <Puzzle
          ref={crosswordRef}
          label={puzzleInfo.label}
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
