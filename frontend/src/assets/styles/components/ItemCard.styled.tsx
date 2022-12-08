import styled from "styled-components";

const ItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemInfo = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.clr4};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.clr1};
    transform: scale(1.1);
  }
`;

export const ItemImageContainer = styled.div`
  position: relative;
  &:hover {
    ${ItemInfo} {
      opacity: 1;
    }
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ItemName = styled.h2`
  margin: 1rem 0 0;
  font-size: ${({ theme }) => theme.fontSizes.fsL};
  font-weight: 600;
`;

export const ItemCategory = styled.h4`
  margin-top: 0rem;
  font-size: ${({ theme }) => theme.fontSizes.fsS};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.clr3};
`;

export const ItemLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8.75px;
`;

export const LocationImage = styled.img`
  color: ${({ theme }) => theme.colors.clr3};
  max-width: 12.5px;
  min-height: 15px;
`;

export const LocationName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.fsS};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.clr3};
`;

export default ItemCardContainer;
