import { useNavigate } from "react-router-dom";
import LoginPage, {
  LoginImage,
  LogInSignUp,
  LogInSignUpBold,
  LogInSignUpParagraph,
} from "../assets/styles/pages/LogIn.styled";
import LoginBackground from "../assets/svgs/LoginRegisterEmojis2.svg";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/Login");
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <LoginPage>
      <LoginImage src={LoginBackground} alt="Background" />
      <SignUpForm />
      <LogInSignUp>
        <LogInSignUpParagraph>Already have an account?</LogInSignUpParagraph>
        <LogInSignUpBold onClick={onClick}>Log in</LogInSignUpBold>
      </LogInSignUp>
    </LoginPage>
  );
};

export default SignUp;
