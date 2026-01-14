import { Box } from "@mui/material";
import CustomInput from "../../components/CustomInput";

const UserForm = ({ formik }) => {
  return (
    <Box>
      <CustomInput
        name="name"
        label="Name"
        type="text"
        formik={formik}
        placeholder="Enter Name"
        required
      />

      <CustomInput
        name="email"
        label="Email"
        type="text"
        formik={formik}
        placeholder="Enter Email"
        required
      />
    </Box>
  );
};

export default UserForm;
