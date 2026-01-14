import LoadingButton from "@mui/lab/LoadingButton";
const CustomFormBtn = ({ name, formik, fullWidth }) => {
  return (
    <LoadingButton
      type="submit"
      variant="contained"
      color="primary"
      loading={formik.isSubmitting}
      size="small"
      fullWidth={fullWidth}
      loadingPosition="end"
      sx={{ textTransform: "none" }}
      onClick={formik.handleSubmit}
    >
      {name}
    </LoadingButton>
  );
};

export default CustomFormBtn;
