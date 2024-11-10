import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SuccessDialog({ open, onClose }: SuccessDialogProps) {
  return (
    <Dialog open={open}>
      <DialogTitle>Congratulations!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You have successfully completed the puzzle!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
