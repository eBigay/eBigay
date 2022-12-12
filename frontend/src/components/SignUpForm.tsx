import { Link } from "react-router-dom";
import { Formik } from "formik";
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

const SignUpInput = () => {
  interface SignUpValues {
    Username: string;
    Email: string;
    Password: string;
    PhoneNumber: string;
    Location: string;
  }

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
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
      }: any) => (
        <LoginInputContainer onSubmit={handleSubmit}>
          <Logo noNavigate />
          <SignUpImageContainer>
            <img src={SignUpProfile} alt="new profile" />
            <SignUpPlusImage src={SignUpPlus} alt="new profile" />
          </SignUpImageContainer>
          <Input
            image={Profile}
            type="text"
            placeholder="Username"
            value={values.Username}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.Username}
            className={errors.Username && touched.Username ? "inputError" : ""}
            errors={errors.Username}
          />
          <Input
            image={Message}
            type="email"
            placeholder="Email"
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.Email}
            className={errors.Email && touched.Email ? "inputError" : ""}
            errors={errors.Email}
          />
          <Input
            image={Lock}
            otherImage={Hide}
            type="password"
            placeholder="Password"
            value={values.Password}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.Password}
            className={errors.Password && touched.Password ? "inputError" : ""}
            errors={errors.Password}
          />
          <Input
            image={Calling}
            type="tel"
            placeholder="Phone Number"
            value={values.PhoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.PhoneNumber}
            className={
              errors.PhoneNumber && touched.PhoneNumber ? "inputError" : ""
            }
            errors={errors.PhoneNumber}
          />
          <Input
            image={Location}
            otherImage={Discovery}
            type="text"
            placeholder="Location"
            value={values.Location}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.Location}
            className={errors.Location && touched.Location ? "inputError" : ""}
            errors={errors.Location}
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
