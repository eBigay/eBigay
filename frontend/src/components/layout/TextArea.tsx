import { FormikValues, useFormikContext } from "formik";
import StyledInput, {
  FadeInErrorMessage,
  InnerTextArea,
} from "../../assets/styles/layout/Inputs.styled";
import { get } from "lodash";

function TextArea(props: any) {
  const { label, name, width, height, ...rest } = props;
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext<FormikValues>();
  const inputErrors = get(errors, name!);
  const inputTouched = get(touched, name!);
  return (
    <StyledInput
      width={width}
      height={height}
      className={inputErrors && inputTouched ? "inputError" : ""}
    >
      <InnerTextArea
        as="textarea"
        id={name}
        name={name}
        placeholder={name}
        onChange={handleChange}
        onBlur={handleBlur}
        {...rest}
      />
      {inputTouched && inputErrors && (
        <FadeInErrorMessage>
          {JSON.stringify(inputErrors).slice(1, -1)}
        </FadeInErrorMessage>
      )}
    </StyledInput>
  );
}
export default TextArea;
