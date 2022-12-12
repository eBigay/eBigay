import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import LoginBackground from "../assets/svgs/LoginRegisterEmojis.svg";
import LoginBackground2 from "../assets/svgs/LoginRegisterEmojis2.svg";
import LoginSignupPage, {
  LoginImage,
  LoginSignupRedirect,
  LogInSignUpBold,
  LogInSignUpParagraph,
} from "../assets/styles/pages/LoginSignup.styled";

interface LoginSignupProps {
  type?: string;
}

const LoginSignup = ({ type }: LoginSignupProps) => {
  const navigate = useNavigate();
  return (
    <LoginSignupPage>
      <LoginImage
        src={type === "login" ? LoginBackground : LoginBackground2}
        alt="Background"
      />
      {type === "login" ? <LoginForm /> : <SignUpForm />}
      <LoginSignupRedirect>
        <LogInSignUpParagraph>
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </LogInSignUpParagraph>
        <LogInSignUpBold
          onClick={() => {
            navigate(type === "login" ? "../SignUp" : "../Login");
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        >
          {type === "login" ? "Sign Up" : "Log in"}
        </LogInSignUpBold>
      </LoginSignupRedirect>
    </LoginSignupPage>
  );
};
export default LoginSignup;
