import { Box, Typography } from "@mui/material";
import { Puzzle } from "./Puzzle";
import { nov92024 } from "./puzzle-data";

function App() {
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
        <Puzzle label="November 9th, 2024" data={nov92024} />
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
