import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { PossibleWords } from "./PossibleWords";

export function CrosswordBuilder() {
  const gridSize = 5;
  const [grid, setGrid] = useState<string[][]>(
    new Array(gridSize).fill(new Array(gridSize).fill(""))
  );

  function toggleSquare(row: number, col: number) {
    const newGrid = grid.map((r, rowIndex) =>
      r.map((cell, colIndex) => {
        if (row === rowIndex && col === colIndex) {
          return cell === "" ? "-" : "";
        }
        return cell;
      })
    );

    setGrid(newGrid);
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      mb={10}
      textTransform={"uppercase"}
    >
      <Box display="flex" flexDirection="column" gap={2} m={2}>
        <h1>Across</h1>
        {grid.map((row, rowIndex) => (
          <Box>
            <Box display="flex" gap={2}>
              <Typography>{rowIndex + 1}</Typography>
              <input
                value={row.filter((l) => l !== "-").join("")}
                onChange={(e) => {
                  const newGrid = grid.map((r, i) => {
                    if (i === rowIndex) {
                      const newWord = e.target.value.toUpperCase().split("");
                      const result = [];

                      for (let i = 0; i < gridSize; i++) {
                        if (r[i] === "-") {
                          result.push("-");
                        } else {
                          result.push(newWord.shift() || "");
                        }
                      }

                      return result;
                    }
                    return r;
                  });
                  setGrid(newGrid);
                }}
              />
            </Box>
            <PossibleWords letters={grid[rowIndex]} />
          </Box>
        ))}
      </Box>
      <Box>
        {grid.map((row, rowIndex) => (
          <Box key={rowIndex} display="flex">
            {row.map((cell, cellIndex) => (
              <input
                style={{
                  border: "solid 1px black",
                  padding: "5px",
                  width: "25px",
                  height: "25px",
                  backgroundColor: cell === "-" ? "black" : "white",
                }}
                key={cellIndex}
                onClick={() => toggleSquare(rowIndex, cellIndex)}
                value={cell?.toUpperCase()}
              />
            ))}
          </Box>
        ))}
      </Box>
      <Box display="flex" flexDirection="column" gap={2} m={2}>
        <h1>Down</h1>
        {grid[0].map((_, colIndex) => (
          <Box>
            <Box display="flex" gap={2}>
              <Typography>{colIndex + 1}</Typography>
              <input
                value={grid
                  .map((row) => row[colIndex])
                  .filter((l) => l !== "-")
                  .join("")}
                onChange={(e) => {
                  const newWord = e.target.value?.toUpperCase().split("");

                  const newGrid = grid.map((r, i) =>
                    r.map((cell, j) => {
                      if (j === colIndex) {
                        if (cell === "-") {
                          return "-";
                        } else {
                          return newWord.shift() || "";
                        }
                      }
                      return cell;
                    })
                  );
                  setGrid(newGrid);
                }}
              />
            </Box>
            <PossibleWords letters={grid.map((row) => row[colIndex])} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
