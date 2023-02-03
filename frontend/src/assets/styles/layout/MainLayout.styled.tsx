import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

const MainLayout = styled.div`
  height: 100%;
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

export default MainLayout;
