import { Link } from "react-router-dom";
import { Formik, FormikValues } from "formik";
import LoginInputContainer, {
  PrivacyPolicy,
  SignUpImageContainer,
  SignUpPlusImage,
} from "../assets/styles/components/LoginInput.styled";
import { Input } from "./Input";
import Logo from "./layout/Logo";
import Profile from "../assets/svgs/Profile.svg";
import Lock from "../assets/svgs/Lock.svg";
import Hide from "../assets/svgs/Hide.svg";
import Message from "../assets/svgs/Message.svg";
import Calling from "../assets/svgs/Calling.svg";
import Location from "../assets/svgs/Location.svg";
import Discovery from "../assets/svgs/Discovery.svg";
import SignUpProfile from "../assets/svgs/SignUpProfile.svg";
import SignUpPlus from "../assets/svgs/SignUpPlus.svg";
import PrimaryButton from "../assets/styles/base/Button.styled";
import SignUpSchema from "../schemas/SignUpSchema";
import useAuth from "../hooks/useAuth";

interface SignUpValues {
  Username: string;
  Email: string;
  Password: string;
  PhoneNumber: string;
  Location: string;
}
const SignUpInput = () => {
  const { signup } = useAuth();

  const { mutate: signUpUser } = signup;

  const initialValues: SignUpValues = {
    Username: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    Location: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      /* eslint-disable-next-line */
      onSubmit={(values) => alert(JSON.stringify(values))}
      validationSchema={SignUpSchema}
    >
      {({ handleSubmit }: FormikValues) => (
        <LoginInputContainer onSubmit={handleSubmit}>
          <Logo />
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
          <PrimaryButton width="500px" height="70px" fontSize="l" type="submit">
            Sign up
          </PrimaryButton>
        </LoginInputContainer>
      )}
    </Formik>
  );
};

export default SignUpInput;
