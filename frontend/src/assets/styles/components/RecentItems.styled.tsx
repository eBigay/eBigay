import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

export const RecentItemsHeader = styled.h2.attrs({
  className: "RecentItemsHeader",
})`
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
   padding: 0 2rem;
   font-size: ${({ theme }: any) => theme.fontSizes.fsXL}
  `}
  ${MinWidth.wideBreakpoint`
  padding: 0 15rem;
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

export const FetchErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.fsL};
  text-align: center;
`;

export const RecentItemsContainer = styled.div`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 50px 27px;
  ${RespondTo.mobileBreakpoint`
   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
   padding: 0 2rem;
  `}
  ${MinWidth.wideBreakpoint`
  padding: 0 15rem;
  `}
`;
