import styled from "styled-components";

interface LoginInputContainerProps {
  extraMargin?: boolean;
}

const LoginInputContainer = styled.div.attrs({
  className: "LoginInputContainer",
})<LoginInputContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.fsL};
  margin: ${({ extraMargin }) =>
    extraMargin ? "15rem auto 0" : "10rem auto 0"};
  height: 100%;

  .logo {
    margin-bottom: 2rem;
  }

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.clr10};
  }
`;

export const SignUpImageContainer = styled.div.attrs({
  className: "SignUpImageContainer",
})`
  width: max-content;
  position: relative;
  margin-bottom: 1rem;
`;

export const SignUpPlusImage = styled.img.attrs({ className: "SignUpImage" })`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const MiddleFlex = styled.div.attrs({
  className: "MiddleFlex",
})`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const RememberMeContainer = styled.div.attrs({
  className: "RememberMeContainer",
})`
  display: flex;
  gap: 1rem;

  input[type="checkbox"] {
    width: 20px;
    padding: 5px;

    &:checked {
      accent-color: black;
    }
  }
`;

export const PrivacyPolicy = styled.p.attrs({
  className: "PrivacyPolicy",
})`
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsS};
  margin-bottom: 12px;

  a {
    color: ${({ theme }) => theme.colors.clr10};
    text-decoration: none;
  }
`;

export default LoginInputContainer;
