import LoadingButton from "@mui/lab/LoadingButton";

const CustomDeleteBtn = ({ name, loading, onDelete, fullWidth }) => {
  return (
    <LoadingButton
      type="submit"
      variant="contained"
      color="error"
      loading={loading}
      size="small"
      fullWidth={fullWidth}
      loadingPosition="end"
      sx={{ textTransform: "none" }}
      onClick={onDelete}
    >
      {name}
    </LoadingButton>
  );
};

export default CustomDeleteBtn;
