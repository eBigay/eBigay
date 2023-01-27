import { Field, ErrorMessage } from "formik";

function Select(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option: any) => {
          return (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default Select;
