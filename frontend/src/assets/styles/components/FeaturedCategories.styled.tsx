import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

const FeaturedContainer = styled.div`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 72px;
  margin-bottom: 100px;
  gap: 27px;
  ${RespondTo.narrowBreakpoint`
   grid-template-columns: repeat(2, minmax(230px, 1fr));
  `}
  ${RespondTo.mobileBreakpoint`
   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
   padding: 0 2rem
  `}
  ${MinWidth.narrowBreakpoint`
   grid-template-columns: repeat(4, minmax(230px, 1fr));
  `}
  ${MinWidth.wideBreakpoint`
  padding: 0 15rem;
  `}
  ${MinWidth.superWideBreakpoint`
  padding: 0 25rem;
  `}
`;

export default FeaturedContainer;
