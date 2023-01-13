import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Not a valid email")
    .max(255)
    .required("Required Field"),
  password: yup
    .string()
    .min(6, "Too Short")
    .matches(/[a-z]/, "Must contain at least 1 lowercase letter")
    .matches(/[A-Z]/, "Must contain at least 1 uppercase letter")
    .matches(/[0-9]/, "Must contain at least 1 number")
    .required("Required Field"),
});

export default LoginSchema;
