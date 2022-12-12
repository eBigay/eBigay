import styled from "styled-components";
import RespondTo from "../../theme/responsive";
import FadeIn from "../layout/FadeIn.styled";

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

  ${RespondTo.narrowBreakpoint`
      margin-bottom: 10rem;
`}
  ${RespondTo.laptopBreakpoint`
      margin: 10rem auto 10rem;
      padding: 0 1rem;
        button {
          width: 85%;
        }
`}
  ${RespondTo.tabletBreakpoint`
  margin: 10rem auto 0;
  button {
          width: 100%;
        }
`}
  ${RespondTo.mobileBreakpoint`
  margin: 10rem auto 0;
  button {
    width: 90%;
  }
`}

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

export const FadeInErrorMessage = styled(FadeIn).attrs({
  className: "FormError",
})`
  color: ${({ theme }) => theme.colors.clr11};
  font-size: ${({ theme }) => theme.fontSizes.fsSm};
  position: absolute;
  bottom: -25px;
  ${RespondTo.mobileBreakpoint`
  bottom: -40%;
      font-size: ${(props: any) => props.theme.fontSizes.fsXs};
`}
`;

export const MiddleFlex = styled.div.attrs({
  className: "MiddleFlex",
})`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  text-decoration: none;
  ${RespondTo.laptopBreakpoint`
  justify-content: space-around;
  width: 450px;
  font-size: 18px;
`}
  ${RespondTo.mobileBreakpoint`
  width: 90%;
  text-align: center;
  font-size: ${(props: any) => props.theme.fontSizes.fsSm};

`}
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
  ${RespondTo.mobileBreakpoint`
  label {
    display: flex;
  }
`}
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
  }

  ${RespondTo.laptopBreakpoint`
  font-size: ${(props: any) => props.theme.fontSizes.fsS};
  width: 450px;
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
