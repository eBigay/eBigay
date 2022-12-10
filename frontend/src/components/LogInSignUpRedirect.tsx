import { Link } from "react-router-dom";
import LogInSignUp, {
  LogInSignUpParagraph,
} from "../assets/styles/pages/LogIn.styled";

interface RedirectProps {
  page: "LogIn" | "SignUp";
}

const LogInSignUpRedirect = ({ page }: RedirectProps) => {
  return (
    <LogInSignUp>
      <LogInSignUpParagraph>
        {page === "LogIn"
          ? "Don't have an account?"
          : "Already have an account?"}
      </LogInSignUpParagraph>
      {page === "LogIn" ? (
        <Link to="/SignUp">Sign Up</Link>
      ) : (
        <Link to="/LogIn">LogIn</Link>
      )}
    </LogInSignUp>
  );
};

export default LogInSignUpRedirect;
