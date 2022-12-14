import styled from "styled-components";
import { Close } from "@mui/icons-material";

interface IsItemDetailsOpen {
  isItemDetailsOpen?: boolean;
}

export const PopUp = styled.div<IsItemDetailsOpen>`
  display: ${({ isItemDetailsOpen }) => (isItemDetailsOpen ? "flex" : "none")};
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

export const ItemDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 40px;
  padding: 70px 60px;
`;

export const MainIMg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const ItemDetailsSection = styled.div`
  max-width: 50%;
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
  width: 100%;
  height: 8rem;
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
export const CreatedByTime = styled.h3`
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsXs};
  font-weight: 600;
`;

export const LocationFlag = styled.img``;

export const ImagesListWrapper = styled.div`
  margin-top: auto;
`;
