import styled from "styled-components";
import Loading from "../../../components/Loading";
import RespondTo, { MinWidth } from "../../theme/responsive";
import FadeIn from "../layout/FadeIn.styled";

const LoginSignupPage = styled(FadeIn).attrs({
  className: "LoginSignupPage",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
  width: 100%;
  padding: 3rem 0;
  justify-content: center;
  align-items: center;
  ${MinWidth.tabletBreakpoint`
  height: 90vh;
  `}
`;

export const LoginImage = styled.img.attrs({
  className: "LoginImage",
})`
  display: inline;
  width: 50%;
  object-fit: cover;
  ${RespondTo.tabletBreakpoint`
  width: 0;
  `}
`;

export const LoginSignupRedirect = styled.div.attrs({
  className: "LogInSignUpRedirect",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  ${RespondTo.mobileBreakpoint`
  width: 85%;
  `}
`;
export const LogInSignUpBold = styled.p.attrs({
  className: "LogInSignUpBold",
})`
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.clr2};
  cursor: pointer;
`;
export const LogInSignUpParagraph = styled.p.attrs({
  className: "LogInSignUpParagraph",
})`
  color: ${({ theme }) => theme.colors.clr3};
`;

export const FormLoadingContainer = styled.div.attrs({
  className: "FormLoadingContainer",
})`
  position: relative;
  height: 7rem;
  ${MinWidth.laptopBreakpoint`
  padding-bottom:4rem;
  `};
`;
interface FormLoadingProps {
  signupPage?: boolean;
}

export const FormLoading = styled(Loading).attrs({
  className: "FormLoading",
})<FormLoadingProps>`
  position: absolute;
  top: 0;
  ${MinWidth.wideBreakpoint`
  top:-40px;
  `};
  ${RespondTo.laptopBreakpoint`
  top:-40px;
  top: ${({ signupPage }: FormLoadingProps) => (signupPage ? "-20px" : "-40px")}
  `};
`;

export const FormLoadingLabel = styled.p.attrs({
  className: "FormLoadingLabel",
})`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 60%);
  width: max-content;
  color: ${({ theme }) => theme.colors.clr1};
  font-size: ${({ theme }) => theme.fontSizes.fsM};
  font-weight: 500;
  ${MinWidth.wideBreakpoint`
  top: 30px;
  `};
`;

export default LoginSignupPage;
