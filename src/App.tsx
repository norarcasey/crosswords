import { Box, Typography } from "@mui/material";
import { Puzzle } from "./Puzzle";

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
        <Box display="flex" justifyContent="end" gap={2} alignItems="center">
          {/* <Link to="/resume" className="button-link">
            <ResumeIcon />
          </Link>
          <a target="_blank" href="https://www.linkedin.com/in/nora-casey/">
            <LinkedInIcon />
          </a>
          <a target="_blank" href="https://github.com/norarcasey">
            <GithubIcon />
          </a> */}
        </Box>
      </Box>
      <main className="page-body">
        <Puzzle />
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
