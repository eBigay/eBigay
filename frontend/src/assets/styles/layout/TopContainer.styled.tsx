import styled from "styled-components";
import { MinWidth } from "../../theme/responsive";

const StyledTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 0 2rem;
  ${MinWidth.mobileBreakpoint`
  padding: 2rem 0 0 5rem;

  `}
  ${MinWidth.laptopBreakpoint`
display:none;
`}
`;

export default StyledTopContainer;
