import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

export const StyledNewItemContainer = styled.div`
  margin-top: 150px;
  ${RespondTo.wideBreakpoint`
    padding: 0 5rem;
    `}
  ${RespondTo.laptopBreakpoint`
    padding: 0 5rem;
    `}
  ${RespondTo.mobileBreakpoint`
       padding: 0 2rem;
      `}
  ${MinWidth.wideBreakpoint`
  padding: 0 15rem;
  `}
`;

export const StyledAddNewItemText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.clr3};
  padding-bottom: 2rem;
`;

export const StyledForm = styled.form.attrs({
  className: "add-new-form",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
