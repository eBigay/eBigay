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
  .Password {
    margin-bottom: ${({ LoginPage }) => (LoginPage ? "1rem" : "1.7rem")};
  }
  ${MinWidth.wideBreakpoint`
  justify-content: flex-start;
  `}

  ${RespondTo.laptopBreakpoint`
      padding: 0 1rem;
        button {
          width: 90%;
        }
`}
  ${RespondTo.tabletBreakpoint`
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

export const UserImageName = styled.h3.attrs({
  className: "UserImageName",
})`
  width: 100%;
  text-align: center;
  font-weight: 500;
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.fsM};
  color: ${({ theme }) => theme.colors.clr9};
  ${RespondTo.mobileBreakpoint`
  font-size: ${({ theme }: any) => theme.fontSizes.fsS};
  top: 180px;
  `}
`;

export const SignUpImageContainer = styled.div.attrs({
  className: "SignUpImageContainer",
})`
  width: max-content;
  position: relative;
  margin-bottom: 2rem;
  cursor: pointer;
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
  font-size: ${({ theme }: any) => theme.fontSizes.fsS};
  `}
  ${RespondTo.tabletBreakpoint`
  justify-content: space-between;
  `}

  ${RespondTo.mobileBreakpoint`
  width: 90%;
  text-align: center;
  font-size: ${({ theme }: any) => theme.fontSizes.fsSm};
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
    top: -4px;
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
    -webkit-transform: rotate(40deg);
    -ms-transform: rotate(40deg);
    transform: rotate(40deg);
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
  font-size: ${({ theme }: any) => theme.fontSizes.fsS};
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
  font-size: ${({ theme }: any) => theme.fontSizes.fsSm};
`}
`;

export const ErrorMessageContainer = styled.div.attrs({
  className: "ErrorMessageContainer",
})`
  position: relative;
  height: 5rem;
`;
export const ErrorMessage = styled.h3.attrs({
  className: "ErrorMessage",
})`
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsXl};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: max-content;
  ${RespondTo.laptopBreakpoint`
  font-size: ${({ theme }: any) => theme.fontSizes.fsL};
`}
`;

export default LoginInputContainer;
