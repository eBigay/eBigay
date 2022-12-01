import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
} from "../assets/styles/components/NotFound.styled";
import NotFoundSvg from "../assets/svgs/notfound.svg";

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <img src={NotFoundSvg} alt="" />
      </NotFoundContent>
    </NotFoundContainer>
  );
};
