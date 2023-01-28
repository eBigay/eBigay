import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

const ListContainer = styled.div.attrs({ className: "listContainer" })`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 50px 27px;
  flex: 1;
  ${RespondTo.wideBreakpoint`
    padding: 0 5rem;
    `}
  ${RespondTo.laptopBreakpoint`
    padding: 0 5rem;
    `}
  ${RespondTo.mobileBreakpoint`
    padding: 0 2rem;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      `}
  ${MinWidth.wideBreakpoint`
  padding: 0 15rem;
  `}
  ${MinWidth.superWideBreakpoint`
  padding: 0 25rem;
  grid-template-columns: repeat(4, minmax(230px, 1fr));
  `}
`;

export default ListContainer;
