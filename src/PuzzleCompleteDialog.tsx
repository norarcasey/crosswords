import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface PuzzleCompleteDialogProps {
  open: boolean;
  isCorrect: boolean;
  onClose: () => void;
}

export function PuzzleCompleteDialog({
  open,
  isCorrect,
  onClose,
}: PuzzleCompleteDialogProps) {
  const title = isCorrect ? "Congratulations!" : "Not quite right!";
  const message = isCorrect
    ? "You have successfully completed the puzzle!"
    : "You're so close, try again!";

  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
