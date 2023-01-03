import { useNavigate } from "react-router";
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundImg,
} from "../assets/styles/components/NotFound.styled";
import ErrorImg from "../assets/images/NotFound2.png";
import PrimaryButton from "../assets/styles/base/Button.styled";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundImg src={ErrorImg} alt="page not found" />
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

export default NotFound;
