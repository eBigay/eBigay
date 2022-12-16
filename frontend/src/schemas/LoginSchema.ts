import * as yup from "yup";

const LoginSchema = yup.object().shape({
  Username: yup.string().min(4, "Too Short").required("Required Field"),
  Password: yup
    .string()
    .min(6, "Too Short")
    .matches(/[a-z]/, "Must contain at least 1 lowercase letter")
    .matches(/[A-Z]/, "Must contain at least 1 uppercase letter")
    .matches(/[0-9]/, "Must contain at least 1 number")
    .required("Required Field"),
});

export default LoginSchema;
