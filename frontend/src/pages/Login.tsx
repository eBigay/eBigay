import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import LoginBackground from "../assets/svgs/LoginRegisterEmojis.svg";
import LoginPage, {
  LoginImage,
  LogInSignUp,
  LogInSignUpBold,
  LogInSignUpParagraph,
} from "../assets/styles/pages/LogIn.styled";

const Login = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/SignUp");
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <LoginPage>
      <LoginImage src={LoginBackground} alt="Background" />
      <LoginForm />
      <LogInSignUp>
        <LogInSignUpParagraph>Don&apos;t have an account?</LogInSignUpParagraph>
        <LogInSignUpBold onClick={onClick}>Sign Up</LogInSignUpBold>
      </LogInSignUp>
    </LoginPage>
  );
};
export default Login;
