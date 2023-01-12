import { useState } from "react";
import { Formik, FormikValues } from "formik";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoginSchema from "../schemas/LoginSchema";
import LoginInputContainer, {
  MiddleFlex,
  RememberMeInput,
  RememberMeLabel,
} from "../assets/styles/components/LoginInput.styled";
import Logo from "./layout/Logo";
import Input from "./Input";
import Lock from "../assets/svgs/Lock.svg";
import Hide from "../assets/svgs/Hide.svg";
import Message from "../assets/svgs/Message.svg";

import PrimaryButton from "../assets/styles/base/Button.styled";

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const { login } = useAuth();

  const { mutate: loginUser } = login;

  interface LoginValues {
    Email: string;
    Password: string;
  }

  const initialValues: LoginValues = {
    Email: "",
    Password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(credentials) => {
        const values = {
          email: credentials.Email,
          password: credentials.Password,
          rememberMe,
        };
        loginUser(values);
      }}
      validationSchema={LoginSchema}
    >
      {({ handleSubmit }: FormikValues) => (
        <LoginInputContainer onSubmit={handleSubmit}>
          <Logo noNavigate />
          <Input image={Message} type="email" placeholder="Email" />
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
