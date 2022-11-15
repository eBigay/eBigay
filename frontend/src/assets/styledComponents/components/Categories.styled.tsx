import styled from 'styled-components'

export const CategoriesContainer = styled.div`
    width: 300px;
    border: 1px solid ${({theme}) => theme.colors.clr3light};
    border-radius: 10px;
    padding: 2rem 0;
    margin: 1rem;

    h1 {
      padding-left: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      cursor: default;
    }
`

export const StyledCategory = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  a {
    text-decoration: none;
    font-weight: 500;
    color: black;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.clr6};
  }
`