import styled from "styled-components";
import { Close } from "@mui/icons-material";

interface IsProductDetailsOpen {
  isProductDetailsOpen?: boolean;
}

export const PopUp = styled.div<IsProductDetailsOpen>`
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
  gap: 15px;
`;
export const CreatedByWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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

export const DetailsName = styled.h1`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.fsXXL};
`;

export const CancelIcon = styled(Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  transform: scale(1.5);
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.clr3};
    transition: 0.4s ease;
  }
`;

export const CreatedByLocation = styled.h3`
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsS};
  font-weight: 400;
`;

export const LocationFlag = styled.img``;
