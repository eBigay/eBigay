import styled from "styled-components";

interface isProductDetailsOpen {
  isProductDetailsOpen?: boolean;
}

export const PopUp = styled.div<isProductDetailsOpen>`
  display: ${({ isProductDetailsOpen }) =>
    isProductDetailsOpen ? "flex" : "none"};
  background-color: #f4f5f7;
  border-radius: 20px;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 80vw;
  z-index: 100;
`;

export const ProductDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 40px;
  padding: 70px 60px;
`;

export const MainIMg = styled.img`
  height: 100%;
  max-width: 50%;
  object-fit: cover;
  border-radius: 20px;
`;

export const ProductDetailsSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DetailsDescription = styled.p`
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
`;

export const CreatedByContainer = styled.div`
  display: flex;
  gap: 14px;
`;
export const CreatedByName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 600;
`;

export const ImgsWrapper = styled.div`
  display: flex;
  gap: 37px;
  margin-top: auto;
`;

export const SecondaryImg = styled.img`
  width: 25%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
