import { Clear, Search } from "@mui/icons-material";
import styled from "styled-components";

interface IStyledSearch {
  isSearchBarOpen?: boolean;
}
interface ISearchButtonProps {
  isdisabled: string;
}

export const StyledContainer = styled.div<IStyledSearch>`
  display: ${({ isSearchBarOpen }) => !isSearchBarOpen && "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.clr4};
`;

export const StyledFormContainer = styled.div`
  padding: 0.4rem 5.6rem 0.4rem 0.4rem;
  max-width: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.clr3light};
`;

export const StyledInput = styled.input`
  flex: 1;
  border: 0;
  height: 4rem;
  color: ${({ theme }) => theme.colors.clr3};
  font-family: Poppins;
  font-size: ${({ theme }) => theme.fontSizes.fsS}; ;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0 1.2rem;
  right: 0.4rem;
  top: 1.6rem;
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
    margin: 0 1rem 0 auto;
  }
`;
