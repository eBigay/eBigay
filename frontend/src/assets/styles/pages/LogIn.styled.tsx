import styled from "styled-components";

const LoginPage = styled.div.attrs({
  className: "LoginPage",
})`
  position: relative;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0;
`;

export const LoginImage = styled.img.attrs({
  className: "LoginImage",
})`
  display: inline;
  width: 50%;
  object-fit: cover;
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
