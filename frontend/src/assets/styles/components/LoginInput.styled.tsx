import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

interface LoginInputContainerProps {
  LoginPage?: boolean;
}

const LoginInputContainer = styled.form.attrs({
  className: "LoginInputContainer",
})<LoginInputContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.fsL};
  margin: ${({ LoginPage }) => (LoginPage ? "15rem auto 0" : "10rem auto 0")};
  height: 100%;
  .Password {
    margin-bottom: ${({ LoginPage }) => (LoginPage ? "1rem" : "1.7rem")};
  }
  ${MinWidth.wideBreakpoint`
  justify-content: flex-start;
  `}

  ${RespondTo.wideBreakpoint`
margin: ${(props: any) =>
    props.LoginPage ? "15rem auto 10rem" : "10rem auto 10rem"};
  `}

  ${RespondTo.laptopBreakpoint`
      padding: 0 1rem;
        button {
          width: 90%;
        }
`}
  ${RespondTo.tabletBreakpoint`
    margin: ${(props: any) =>
      props.LoginPage ? "12rem auto 3rem" : "10rem auto 3rem"};
  button {
          width: 100%;
        }
`}
  ${RespondTo.mobileBreakpoint`
      width: 100%;
  button {
    width: 90%;
  }
`}

  .logo {
    margin-bottom: 2rem;
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
  align-items: center;
  margin-bottom: 2.5rem;
  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.clr10};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  ${RespondTo.laptopBreakpoint`
  justify-content: space-around;
  width: 420px;
  font-size: ${(props: any) => props.theme.fontSizes.fsS};
  `}
  ${RespondTo.mobileBreakpoint`
  width: 90%;
  text-align: center;
  font-size: ${(props: any) => props.theme.fontSizes.fsSm};
`}
`;

export const RememberMeLabel = styled.label.attrs({
  className: "RememberMeLabel",
})`
  display: flex;
  align-items: center;
  gap: 2rem;
  ${RespondTo.mobileBreakpoint`
    display: flex;
    gap: 1.5rem;
`}
`;

export const RememberMeInput = styled.input.attrs({
  className: "RememberMeInput",
})`
  position: relative;
  cursor: pointer;
  width: 0px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    top: -3px;
    left: 0;
    border: 2px solid #555;
    border-radius: 6px;
    background-color: transparent;
    transition: all 0.2s ease;
  }
  &:checked:before {
    border: 2px solid ${({ theme }) => theme.colors.clr2};
    background-color: black;
  }
  &:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 1px;
    left: 8px;
  }
`;

export const PrivacyPolicy = styled.p.attrs({
  className: "PrivacyPolicy",
})`
  width: 500px;
  text-align: center;
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsS};
  margin-bottom: 12px;
  a {
    color: ${({ theme }) => theme.colors.clr10};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  ${RespondTo.laptopBreakpoint`
  font-size: ${(props: any) => props.theme.fontSizes.fsS};
  width: 420px;
  a {
    display: block;
  }
`}
  ${RespondTo.tabletBreakpoint`
  text-align: center;
`}
  ${RespondTo.mobileBreakpoint`
  width: 85%;
  text-align: center;
  font-size: ${(props: any) => props.theme.fontSizes.fsSm};
`}
`;

export default LoginInputContainer;
