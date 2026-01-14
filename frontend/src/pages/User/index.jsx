import { useCallback, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomDialog from "../../components/modal/CustomDialog";
import { useCreateUserQueries } from "../../queries/userQueries";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const User = () => {
  const [open, setOpen] = useState(false); // for dialog
  const { mutateAsync } = useCreateUserQueries();
  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
  });

  const onSubmit = async (values) => {
    await mutateAsync(values);
    setOpen(false);
    resetForm({
      name: "",
      email: "",
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { resetForm } = formik;

  const handleClose = () => {
    setOpen(false);
    resetForm({
      name: "",
      email: "",
    });
  };

  // edit
  const handleEdit = useCallback((row) => {
    setOpen(true);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <CustomDialog
        open={open}
        onClose={handleClose}
        title="Add New User"
        formik={formik}
      >
        <UserForm formik={formik} />
      </CustomDialog>
      <UserTable open={handleOpen} onEdit={handleEdit} />
    </div>
  );
};

export default User;
