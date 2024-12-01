import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { CrosswordBuilder } from "./CrosswordBuilder";

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
            {`[\\n]ora casey crosswords`}
          </Typography>
        </Box>
      </Box>
      <Box component="main">
        <Routes>
          <Route path="/crosswords/build" element={<CrosswordBuilder />} />
          <Route path="/crosswords" element={<Home />} />
        </Routes>
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
