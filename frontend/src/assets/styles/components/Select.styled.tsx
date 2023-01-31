import { Field } from "formik";
import styled from "styled-components";
import RespondTo from "../../theme/responsive";

const StyledSelectConainter = styled.div`
  display: flex;
  min-width: 500px;
  gap: 1rem;
  ${RespondTo.laptopBreakpoint`
  min-width: 90%;
`}
  ${RespondTo.tabletBreakpoint`
  min-width: 100%;
  `}
  ${RespondTo.mobileBreakpoint`
  min-width: 90%;
  `}
`;
export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.clr3};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.fsL};
`;

export const StyledSelect = styled(Field)`
  border-radius: ${({ theme }) => theme.borders.borderRad3};
  border: 1px solid ${({ theme }) => theme.colors.clr3light};
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsM};
`;

export default StyledSelectConainter;
