import { useState } from "react";
import { useFormikContext, FormikValues } from "formik";
import { get } from "lodash";
import Search from "../assets/svgs/Search.svg";
import StyledInput, {
  InnerInput,
  InputLeftImage,
  InputRightImage,
  FadeInErrorMessage,
} from "../assets/styles/layout/Inputs.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";

interface IInputProps {
  image: string;
  otherImage?: string; // optional argument - for the password and location inputs
  type: string;
  placeholder: string;
  isSearchInput?: boolean; // will render the search button if prop is true
  width?: number;
  height?: number;
}

export const Input = ({
  image,
  otherImage,
  type,
  placeholder,
  isSearchInput,
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
  const inputPlaceholder =
    placeholder === "Phone Number" ? "PhoneNumber" : placeholder;
  const inputErrors = get(errors, inputPlaceholder);
  const inputTouched = get(touched, inputPlaceholder);
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
            : get(values, inputPlaceholder)
        }
        onChange={handleChange}
        onBlur={handleBlur}
        name={inputPlaceholder}
      />
      {otherImage && (
        <InputRightImage
          alt=""
          src={otherImage}
          onClick={type === "password" ? changeInputType : getGeoLocation}
          role="presentation" // solving 'jsx-a11y/no-static-element-interactions' (eslint)
        />
      )}
      {isSearchInput && (
        <PrimaryButton height="100%" width="125px" fontSize="s">
          Search
        </PrimaryButton>
      )}
      {inputTouched && inputErrors && (
        <FadeInErrorMessage>
          {JSON.stringify(inputErrors).slice(1, -1)}
        </FadeInErrorMessage>
      )}
    </StyledInput>
  );
};

export const SearchInput = () => (
  <Input
    image={Search}
    type="text"
    placeholder="Search Here..."
    isSearchInput
    width={527}
    height={50}
  />
);
