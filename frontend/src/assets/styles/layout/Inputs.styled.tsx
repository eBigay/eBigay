import styled from "styled-components";
import RespondTo from "../../theme/responsive";
import FadeIn from "./FadeIn.styled";

interface InputProps {
  width: number;
  height: number;
}

const StyledInput = styled.div<InputProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  position: relative;
  border-radius: ${({ theme }) => theme.borders.borderRad3};
  border: 1px solid ${({ theme }) => theme.colors.clr3light};
  margin-bottom: 1.7rem;
  display: flex;
  align-items: center;
  transition: border 0.4s ease-in-out;

  :focus-within {
    border: 3px solid ${({ theme }) => theme.colors.clr9};
  }

  &.inputError {
    border: 3px solid ${({ theme }) => theme.colors.clr11};
    .InnerInput {
      color: ${({ theme }) => theme.colors.clr11};
    }
  }

  ${RespondTo.laptopBreakpoint`
  width: 90%;
`}
  ${RespondTo.tabletBreakpoint`
  width: 100%;
  `}
  ${RespondTo.mobileBreakpoint`
  width: 90%;
  `}
`;

export const InnerInput = styled.input.attrs({ className: "InnerInput" })`
  width: 100%;
  color: ${({ theme }) => theme.colors.clr3};
  font-family: Poppins;
  font-weight: 400;
  font-size: 20px;
  line-height: 167.2%;
  border: none;
  background-color: transparent;
  transition: color 0.3s ease-in-out; // the actual color change is happening in "StyledInput" above
  &::placeholder {
    color: ${({ theme }) => theme.colors.clr3};
  }
  /* remove the blue background on auto-fill */
  :-webkit-autofill {
    background-clip: clip;
    -webkit-background-clip: text;
  }
  ${RespondTo.mobileBreakpoint`
  font-size: ${(props: any) => props.theme.fontSizes.fsS};
  `}
`;

export const InputLeftImage = styled.img`
  padding: 0 0.8rem 0 1.2rem;
`;

export const InputRightImage = styled.img`
  position: absolute;
  right: 5%;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    filter: brightness(130%);
  }
`;

export const FadeInErrorMessage = styled(FadeIn).attrs({
  className: "FormError",
})`
  color: ${({ theme }) => theme.colors.clr11};
  font-size: ${({ theme }) => theme.fontSizes.fsSm};
  position: absolute;
  bottom: -25px;
  ${RespondTo.mobileBreakpoint`
  bottom: -31%;
      font-size: ${(props: any) => props.theme.fontSizes.fsXs};
`}
`;

export default StyledInput;
