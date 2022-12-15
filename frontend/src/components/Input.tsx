import { useState } from "react";
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
  value?: string;
  onChange?: any;
  onBlur?: any;
  touched?: boolean;
  className?: "inputError" | "";
  errors?: any;
  isSearchInput?: boolean; // will render the search button if prop is true
  width?: number;
  height?: number;
}

export const Input = ({
  image,
  otherImage,
  type,
  value,
  onChange,
  onBlur,
  touched,
  className,
  errors,
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

  return (
    <StyledInput
      width={width}
      height={height}
      className={`${className} ${placeholder}`}
    >
      <InputLeftImage src={image} alt="" />
      <InnerInput
        type={type === "password" ? passwordType : type}
        placeholder={placeholder}
        value={
          location[0] ? `lat: ${location[0]}, long: ${location[1]}` : value
        }
        onChange={onChange}
        onBlur={onBlur}
        name={placeholder === "Phone Number" ? "PhoneNumber" : placeholder}
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

      {touched && errors && <FadeInErrorMessage>{errors}</FadeInErrorMessage>}
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
