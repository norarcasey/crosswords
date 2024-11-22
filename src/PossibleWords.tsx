import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

interface PossibleWord {
  score: number;
  word: string;
}

async function fetchPossibleWords(str: string) {
  const url = `https://api.datamuse.com/words?sp=${str}&max=5`;

  const response = fetch(url);
  return (await response).json();
}

interface PossibleWordsProps {
  letters: string[];
}

export function PossibleWords({
  letters,
}: PossibleWordsProps): React.ReactElement {
  console.log({ letters });
  const [words, setWords] = useState<PossibleWord[]>([]);

  useEffect(() => {
    const word = letters
      .filter((l) => l !== "-")
      .map((i) => (!i ? "?" : i))
      .join("");
    const test = fetchPossibleWords(word);
    test.then((data) => {
      setWords(data);
    });
  }, [letters]);

  return (
    <Box ml={3}>
      <Typography variant="caption">Word Count: {words.length}</Typography>
      <Box>
        {words.map((word) => (
          <Box display="flex">
            <Typography variant="subtitle2" textAlign="right">
              {word.word} ({word.score})
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
