import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

export const ListContainer = styled.div.attrs({ className: "listContainer" })`
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
       grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
       padding: 0 2rem;
      `}
  ${MinWidth.wideBreakpoint`
  padding: 0 15rem;
  `}
`;
