import styled from "styled-components";
import RespondTo from "../../theme/responsive";

export const RecentItemsHeader = styled.h2`
  padding: 0 5rem;
  font-weight: 600;
  font-size: 1.85rem;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: ${({ theme }) => theme.colors.clr2};
  gap: 27px;
  margin-bottom: 48px;
  ${RespondTo.mobileBreakpoint`
   padding: 0 2rem
  `}

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: #d7d7d7;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
`;

export const RecentItemsContainer = styled.div`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 50px 27px;
  ${RespondTo.mobileBreakpoint`
   grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
   padding: 0 2rem;
  `}
`;
