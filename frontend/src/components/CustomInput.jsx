import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const CustomInput = ({
  label,
  type,
  name,
  placeholder,
  formik,
  disabled = false,
  required = false,
}) => {
  return (
    <FormControl
      fullWidth
      variant="outlined"
      size="small"
      sx={{ minHeight: "65px" }}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={type}
        label={label}
        value={formik.values[name] || ""}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        fullWidth
        size="small"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      />
      <FormHelperText
        sx={{ color: "red", margin: "0px 0px 0px 5px", p: 0, fontSize: "11px" }}
      >
        {formik.touched[name] && formik.errors[name]}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomInput;
