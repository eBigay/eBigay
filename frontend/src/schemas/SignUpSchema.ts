import * as yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, and 1 number

const SignUpSchema = yup.object().shape({
  Username: yup.string().min(4, "Too Short").required("Required Field"),
  Email: yup
    .string()
    .email("Not a valid email")
    .max(255)
    .required("Required Field"),
  Password: yup
    .string()
    .min(6, "Too Short")
    .matches(passwordRegex, {
      message:
        "Please use 1 upper case letter, 1 lower case letter, and 1 number",
    })
    .required("Required Field"),
  PhoneNumber: yup.string().min(10, "Too Short").required("Required Field"),
  Location: yup.string().required("Required Field"),
});

export default SignUpSchema;
