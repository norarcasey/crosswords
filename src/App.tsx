import { Box, Typography } from "@mui/material";
import { Puzzle } from "./Puzzle";
import { puzzleData } from "./data/puzzle-data";
import { PuzzleList } from "./PuzzleList";
import { useState } from "react";

function App() {
  const [puzzleInfo, setPuzzleInfo] = useState({
    label: "November 10th, 2024",
    data: puzzleData["November 10th, 2024"],
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
            {`[\\n]ora casey`}
          </Typography>
        </Box>
      </Box>
      <main className="page-body">
        <Puzzle label={puzzleInfo.label} data={puzzleInfo.data} />
        <PuzzleList onPuzzleSelect={handlePuzzleSelect} />
      </main>
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
