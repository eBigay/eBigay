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
    ${MinWidth.superWideBreakpoint`
  padding: 0 25rem;
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
