import { ErrorMessage } from "formik";
import StyledSelectConainter, {
  StyledLabel,
  StyledSelect,
} from "../../assets/styles/components/Select.styled";

function Select(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <StyledSelectConainter>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledSelect as="select" id={name} name={name} {...rest}>
        {options.map((option: any) => {
          return (
            <option key={option.key || option} value={option.value || option}>
              {option.value || option}
            </option>
          );
        })}
      </StyledSelect>
      <ErrorMessage name={name} />
    </StyledSelectConainter>
  );
}

export default Select;
