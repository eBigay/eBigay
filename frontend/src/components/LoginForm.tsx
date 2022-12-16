import { useState } from "react";
import { Formik, FormikValues } from "formik";
import { Link } from "react-router-dom";
import LoginSchema from "../schemas/LoginSchema";
import LoginInputContainer, {
  MiddleFlex,
  RememberMeInput,
  RememberMeLabel,
} from "../assets/styles/components/LoginInput.styled";
import Logo from "./layout/Logo";
import { Input } from "./Input";
import Profile from "../assets/svgs/Profile.svg";
import Lock from "../assets/svgs/Lock.svg";
import Hide from "../assets/svgs/Hide.svg";
import PrimaryButton from "../assets/styles/base/Button.styled";

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  interface LoginValues {
    Username: string;
    Password: string;
  }

  const initialValues: LoginValues = { Username: "", Password: "" };

  return (
    <Formik
      initialValues={initialValues}
      /* eslint-disable-next-line */
      onSubmit={(values) => alert(JSON.stringify(values))}
      validationSchema={LoginSchema}
    >
      {({ handleSubmit }: FormikValues) => (
        <LoginInputContainer LoginPage onSubmit={handleSubmit}>
          <Logo noNavigate />
          <Input image={Profile} type="text" placeholder="Username" />
          <Input
            image={Lock}
            type="password"
            otherImage={Hide}
            placeholder="Password"
          />
          <MiddleFlex>
            <RememberMeLabel htmlFor="checkbox">
              <RememberMeInput
                type="checkbox"
                id="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />{" "}
              Remember me
            </RememberMeLabel>
            <Link to="forgotPassword">Forgot password?</Link>
          </MiddleFlex>
          <PrimaryButton width="500px" height="70px" fontSize="l" type="submit">
            Log in
          </PrimaryButton>
        </LoginInputContainer>
      )}
    </Formik>
  );
};
export default LoginForm;
