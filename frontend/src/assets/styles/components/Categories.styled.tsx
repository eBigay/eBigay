import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

export const CategoriesContainer = styled.div`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.clr3light};
  border-radius: 10px;
  padding: 2rem 0;
  margin: 0;
  ${RespondTo.laptopBreakpoint`
   padding:0;
   width: 100%;
   border: unset;
  `}
`;

export const CategoriesHeader = styled.h1`
  padding-left: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
  cursor: default;
`;

export const StyledCategory = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.clr6};
  }
`;
export const CategoryLink = styled.div`
  a {
    /* The actual component is the 'Link' from react-router-dom */
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.fsL};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.clr2};
  }
`;
