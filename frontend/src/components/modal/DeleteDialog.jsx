import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CustomDeleteBtn from "../CustomDeleteBtn";
import CloseIcon from "@mui/icons-material/Close";

const DeleteDialog = ({ open, onClose, title, onDelete }) => {
  return (
    <Dialog open={open} onClose={() => {}} fullWidth maxWidth="xs">
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Delete {title}{" "}
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography>Are your sure you want to delete this {title}</Typography>
      </DialogContent>
      <DialogActions>
        <CustomDeleteBtn name="Delete" onDelete={onDelete} />
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
