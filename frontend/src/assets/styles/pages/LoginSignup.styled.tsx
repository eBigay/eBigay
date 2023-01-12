import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";
import FadeIn from "../layout/FadeIn.styled";

const LoginSignupPage = styled(FadeIn).attrs({
  className: "LoginSignupPage",
})`
  position: relative;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  min-height: 100vh;
  ${RespondTo.tabletBreakpoint`
  flex-direction: column;
  `}
  ${MinWidth.wideBreakpoint`
  height: 1150px;
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
  position: absolute;
  bottom: 2%;
  right: 0%;
  left: 50%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  ${RespondTo.tabletBreakpoint`
  position: relative;
  left: 0;
  margin: 5rem auto 0;
  padding-bottom: 1rem;
  width: 500px;
  `}
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
  ${MinWidth.laptopBreakpoint`
  padding-bottom:4rem;
  `};
`;

export const FormLoadingLabel = styled.p.attrs({
  className: "FormLoadingLabel",
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: max-content;
  color: ${({ theme }) => theme.colors.clr1};
  font-size: ${({ theme }) => theme.fontSizes.fsM};
  font-weight: 500;
  ${RespondTo.laptopBreakpoint`
  transform: translate(-50%, -10%);
`}
  ${RespondTo.tabletBreakpoint`
  transform: translate(-50%, 50%);
`}
`;

export default LoginSignupPage;
