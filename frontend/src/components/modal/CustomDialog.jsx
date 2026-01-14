import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomFormBtn from "../CustomFormBtn";

const CustomDialog = ({ open, onClose, title, children, formik }) => {
  return (
    <Dialog open={open} onClose={() => {}} fullWidth maxWidth="xs">
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {title}{" "}
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <CustomFormBtn name="Save" formik={formik} />
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
