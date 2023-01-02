import styled from "styled-components";
import { MinWidth } from "../../theme/responsive";

export const StyledTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9rem 0 0 2rem;
  ${MinWidth.mobileBreakpoint`
  padding: 9rem 0 0 5rem;

  `}
  ${MinWidth.laptopBreakpoint`
display:none;
`}
`;
