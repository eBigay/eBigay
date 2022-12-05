import styled from "styled-components";

const FeaturedCategoryContainer = styled.div`
  height: 400px;
  max-height: 100%;
  position: relative;
  button {
    margin: 0 0 20px 20px;
    min-height: 34px;
  }
`;
export const FeaturedCategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeaturedCategoryInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background: ${({ theme }) => theme.colors.clr5};
`;

export const FeaturedCategoryTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.clr4};
  margin: 0 0 0 20px;
`;

export const FeaturedCategoryDesc = styled.p`
  color: ${({ theme }) => theme.colors.clr4};
  font-size: ${({ theme }) => theme.fontSizes.fsXs};
  font-weight: 400;
  margin: 8px 0 11px 20px;
`;

export default FeaturedCategoryContainer;
