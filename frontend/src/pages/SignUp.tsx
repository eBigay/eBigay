import { useNavigate } from "react-router-dom";
import LoginPage, {
  LoginImage,
  LogInSignUp,
  LogInSignUpBold,
  LogInSignUpParagraph,
} from "../assets/styles/pages/LogIn.styled";
import LoginBackground from "../assets/svgs/LoginRegisterEmojis2.svg";
import { RegisterInput } from "../components/Inputs";

const SignUp = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/Login");
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <LoginPage>
      <LoginImage src={LoginBackground} alt="Background" />
      <RegisterInput />
      <LogInSignUp>
        <LogInSignUpParagraph>Already have an account?</LogInSignUpParagraph>
        <LogInSignUpBold onClick={onClick}>Log in</LogInSignUpBold>
      </LogInSignUp>
    </LoginPage>
  );
};

export default SignUp;
