import { useState } from "react";
import { useFormikContext, FormikValues } from "formik";
import { get } from "lodash";
import StyledInput, {
  InnerInput,
  InputLeftImage,
  InputRightImage,
  FadeInErrorMessage,
} from "../assets/styles/layout/Inputs.styled";
import IInputProps from "../interfaces/IInputProps";

const Input = ({
  image,
  otherImage,
  type,
  placeholder,
  valueName,
  width = 500,
  height = 70,
}: IInputProps) => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [location, setLocation] = useState<number[]>([]);

  const changeInputType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      alert("Receiving Your GeoLocation"); /* eslint-disable-line */
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      alert("Sorry Not available!"); /* eslint-disable-line */
    }
  };

  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext<FormikValues>();
  const inputErrors = get(errors, valueName!);
  const inputTouched = get(touched, valueName!);
  return (
    <StyledInput
      width={width}
      height={height}
      className={inputErrors && inputTouched ? "inputError" : ""}
    >
      <InputLeftImage src={image} alt="" />
      <InnerInput
        type={type === "password" ? passwordType : type}
        placeholder={placeholder}
        value={
          location[0]
            ? `lat: ${location[0]}, long: ${location[1]}`
            : get(values, valueName!)
        }
        onChange={handleChange}
        onBlur={handleBlur}
        name={valueName}
      />
      {otherImage && (
        <InputRightImage
          alt=""
          src={otherImage}
          onClick={type === "password" ? changeInputType : getGeoLocation}
          role="presentation" // solving 'jsx-a11y/no-static-element-interactions' (eslint)
        />
      )}
      {inputTouched && inputErrors && (
        <FadeInErrorMessage>
          {JSON.stringify(inputErrors).slice(1, -1)}
        </FadeInErrorMessage>
      )}
    </StyledInput>
  );
};

export default Input;
