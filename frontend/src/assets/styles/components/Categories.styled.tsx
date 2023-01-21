import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

export const CategoriesContainer = styled.div.attrs({
  className: "CategoriesContainer",
})`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.clr3light};
  border-radius: 10px;
<<<<<<< HEAD
  padding: 2rem 0;
=======
  padding: 2rem 0 0;
>>>>>>> 6b54f960bc2de1d89bdad5d54e89471edcf8dcba
  margin: 0;
  ${RespondTo.laptopBreakpoint`
   padding: 5rem 0 0;
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
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.clr6};
  }

  ${MinWidth.laptopBreakpoint`
  :last-child {
    border-radius: 0 0 10px 10px;
  }  
  `}
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
