import { Clear, Search } from "@mui/icons-material";
import { Autocomplete } from "@mui/material";
import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

interface IStyledSearch {
  isSearchBarOpen?: boolean;
}
interface ISearchButtonProps {
  isdisabled: string;
}
export const StyledContainer = styled.div<IStyledSearch>`
  align-self: center;
  flex: 0.75;

  ${RespondTo.tabletBreakpoint`
display: ${({ isSearchBarOpen }: IStyledSearch) => !isSearchBarOpen && "none"};
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1000;
background-color: rgba(255,255,255,0.9);
backdrop-filter: blur(3px);
  `}

  ${MinWidth.wideBreakpoint`
flex: 0.5;
`}
`;
export const StyledFormContainer = styled.div.attrs({
  className: "StyledFormContainer",
})`
  display: flex;
  padding: 0.4rem 3rem 0.4rem 0.4rem;
  justify-content: space-evenly;
  max-width: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.clr3light};
  ${MinWidth.tabletBreakpoint`
  background-color: #f5f5f5;
  padding:0;
  border: 1px solid ${({ theme }: any) => theme.colors.clr3light};
  border-radius: 50px;
  `}
  ${RespondTo.tabletBreakpoint`
  padding: 0;
  `}
`;
export const StyledAutocomplete = styled(Autocomplete).attrs({
  className: "StyledAutocomplete",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border: 0;
  height: 60px;
  color: ${({ theme }) => theme.colors.clr3};
  font-family: Poppins;
  font-size: ${({ theme }) => theme.fontSizes.fsS};
  background-color: transparent;
  ${MinWidth.tabletBreakpoint`
  height: 3rem
  `}
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
  &:nth-child(1) {
    width: 100%;
  }
`;
export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.2rem;
  position: relative;
  position: absolute;
  right: 0.4rem;
  top: 1.4rem;
  ${MinWidth.tabletBreakpoint`
  display:none;
`}
`;
export const StyledSearchButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledClearIcon = styled(Clear)`
  cursor: pointer;
  color: #fbb527;
`;
export const StyledSearch = styled(Search)<ISearchButtonProps>`
  && {
    cursor: pointer;
    opacity: ${({ isdisabled }) => !isdisabled && 0.5};
    font-size: 2rem;
    color: #fbb527;
    align-self: center;
    margin: 0 0 0 0.5rem;
  }
`;
