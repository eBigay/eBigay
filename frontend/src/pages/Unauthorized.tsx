import { useNavigate } from "react-router";
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
} from "../assets/styles/components/NotFound.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>401</NotFoundTitle>
        <h1>Unauthorized</h1>
        <PrimaryButton
          width="8rem"
          height="3rem"
          fontSize="l"
          onClick={() => navigate(-1)}
        >
          Go Back
        </PrimaryButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default Unauthorized;
