import * as yup from "yup";

const itemSchema = yup.object().shape({
  itemName: yup.string().required("Required Field"),
  description: yup.string().required("Required"),
});

export default itemSchema;
