import styled from "styled-components";
import RespondTo from "../../theme/responsive";

const LoginPage = styled.div.attrs({
  className: "LoginPage",
})`
  position: relative;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0;
  ${RespondTo.laptopBreakpoint`
  min-height: 100vh;
  height: 100%;
  `}
  ${RespondTo.tabletBreakpoint`
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
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

export const LogInSignUp = styled.div.attrs({
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

export default LoginPage;
