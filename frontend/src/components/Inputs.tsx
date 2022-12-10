import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, useFormik, FormikProps } from "formik";
import Profile from "../assets/svgs/Profile.svg";
import Lock from "../assets/svgs/Lock.svg";
import Hide from "../assets/svgs/Hide.svg";
import Message from "../assets/svgs/Message.svg";
import Calling from "../assets/svgs/Calling.svg";
import Location from "../assets/svgs/Location.svg";
import Discovery from "../assets/svgs/Discovery.svg";
import Search from "../assets/svgs/Search.svg";
import SignUpProfile from "../assets/svgs/SignUpProfile.svg";
import SignUpPlus from "../assets/svgs/SignUpPlus.svg";
import StyledInput, {
  InnerInput,
  InputLeftImage,
  InputRightImage,
} from "../assets/styles/layout/Inputs.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";
import Logo from "./layout/Logo";
import LoginInputContainer, {
  MiddleFlex,
  PrivacyPolicy,
  RememberMeContainer,
  SignUpImageContainer,
  SignUpPlusImage,
} from "../assets/styles/components/LoginInput.styled";

interface IInputProps {
  image: string;
  otherImage?: string; // optional argument - for the password and location inputs
  type: string;
  placeholder: string;
  value?: string; // ! the '?' is temp!!
  onChange?: string; // ! the '?' is temp!!
  onBlur?: string; // ! the '?' is temp!!
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
    <StyledInput width={width} height={height}>
      <InputLeftImage src={image} alt="" />
      <InnerInput
        type={type === "password" ? passwordType : type}
        placeholder={
          location[0]
            ? `lat: ${location[0]}, long: ${location[1]}`
            : placeholder
        }
        value={value}
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
    </StyledInput>
  );
};

interface MyFormValues {
  username: string;
  password: string;
}

export const LoginInput = () => {
  const formik: FormikProps<MyFormValues> = useFormik({
    initialValues: { username: "asd", password: "asd" },
    onSubmit: () => console.log("submit"),
  });
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  return (
    <LoginInputContainer extraMargin>
      <Logo noNavigate />
      <Input
        image={Profile}
        type="text"
        placeholder="Username"
        value={formik.values.username}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
      />
      <Input
        image={Lock}
        otherImage={Hide}
        type="password"
        placeholder="Password"
        value={formik.values.password}
      />
      <MiddleFlex>
        <RememberMeContainer>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />{" "}
            Remember me
          </label>
        </RememberMeContainer>
        <Link to="forgotPassword">Forgot password?</Link>
      </MiddleFlex>
      <PrimaryButton width="500px" height="70px" fontSize="l" type="submit">
        Log in
      </PrimaryButton>
    </LoginInputContainer>
  );
};
export const RegisterInput = () => (
  <LoginInputContainer>
    <Logo noNavigate />
    <SignUpImageContainer>
      <img src={SignUpProfile} alt="new profile" />
      <SignUpPlusImage src={SignUpPlus} alt="new profile" />
    </SignUpImageContainer>
    <Input image={Profile} type="text" placeholder="Username" />
    <Input image={Message} type="email" placeholder="Email" />
    <Input
      image={Lock}
      otherImage={Hide}
      type="password"
      placeholder="Password"
    />
    <Input image={Calling} type="tel" placeholder="Phone Number" />
    <Input
      image={Location}
      otherImage={Discovery}
      type="text"
      placeholder="Location"
    />
    <PrivacyPolicy>
      By signing up you agree to our{" "}
      <Link to="privacyPolicy">Privacy Policy</Link>
    </PrivacyPolicy>
    <PrimaryButton width="500px" height="70px" fontSize="l">
      Sign up
    </PrimaryButton>
  </LoginInputContainer>
);

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
