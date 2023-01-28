import * as yup from "yup";

const itemSchema = yup.object().shape({
  itemName: yup.string().required("Required Field"),
  description: yup
    .string()
    .required("Required Field")
    .max(200, "max 200 chars"),
  qty: yup.number().required("Required Field"),
  category: yup.string().required("Required Field"),
});

export default itemSchema;
