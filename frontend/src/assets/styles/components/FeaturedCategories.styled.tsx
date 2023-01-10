import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

const FeaturedContainer = styled.div`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 72px;
  margin-bottom: 100px;
  gap: 27px;
  ${RespondTo.mobileBreakpoint`
   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
   padding: 0 2rem
  `}
  ${MinWidth.wideBreakpoint`
  padding: 0 15rem;
  `}
`;

export default FeaturedContainer;
