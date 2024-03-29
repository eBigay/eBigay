import styled from "styled-components";
import { Close } from "@mui/icons-material";
import RespondTo from "../../theme/responsive";

interface IsItemDetailsOpen {
  isItemDetailsOpen?: boolean;
}

export const PopUp = styled.div.attrs({
  className: "PopUp",
})<IsItemDetailsOpen>`
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
  ${RespondTo.mobileBreakpoint`
    top: 50%;
    width: 93vw;
  height: 93vh;
`}
`;

export const ItemDetailsContainer = styled.div.attrs({
  className: "ItemDetailsContainer",
})`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 40px;
  padding: 70px 60px;
  word-break: break-all;
  ${RespondTo.laptopBreakpoint`
  padding: 2rem 1.5rem;
`}
  ${RespondTo.mobileBreakpoint`
 padding: 3rem 1.5rem 2rem;
 flex-direction: column;
 gap: 3rem;
`}
`;

export const MainIMg = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  ${RespondTo.mobileBreakpoint`
  width: 80vw;
  `}
`;

export const ItemDetailsSection = styled.div.attrs({
  className: "ItemDetailsSection",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
  ${RespondTo.tabletBreakpoint`
  button {
    font-size: ${({ theme }: any) => theme.fontSizes.fsM};
    height: 3rem;
  }
`}
  ${RespondTo.mobileBreakpoint`
  max-width: 100%;
  gap: 20px;
  button {
    font-size: ${({ theme }: any) => theme.fontSizes.fsS};
    height: 4rem;
    margin: 0 auto ;
  }
  `}
`;
export const DetailsDescription = styled.p.attrs({
  className: "DetailsDescription",
})`
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
  font-size: ${({ theme }) => theme.fontSizes.fsM};
  word-break: break-word;
`;

export const PhoneNumberContainer = styled.div.attrs({
  className: "PhoneNumberContainer",
})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const PhoneNumber = styled.a.attrs({
  className: "PhoneNumber",
})`
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsL};
  text-decoration: none;
  ${RespondTo.mobileBreakpoint`
  font-size: ${({ theme }: any) => theme.fontSizes.fsM};
  `}
`;

export const PhoneImage = styled.img.attrs({
  className: "PhoneImage",
})`
  width: 23px;
  height: 23px;
  ${RespondTo.mobileBreakpoint`
  width: 20px;
  height: 20px;
`}
`;

export const CreatedByContainer = styled.div.attrs({
  className: "CreatedByContainer",
})`
  display: flex;
  gap: 15px;
`;
export const CreatedByWrapper = styled.div.attrs({
  className: "CreatedByWrapper",
})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  ${RespondTo.mobileBreakpoint`
  gap: 0;
`}
`;
export const CreatedByName = styled.h3.attrs({ className: "CreatedByName" })`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 600;
  line-height: 1;
`;

export const ImgsWrapper = styled.div.attrs({ className: "ImgsWrapper" })`
  display: flex;
  gap: 37px;
  align-items: center;
  justify-content: center;
  ${RespondTo.mobileBreakpoint`
  .swiper-lazy-preloader {
    margin-top:  0;
  }
  `}
`;

export const SecondaryImg = styled.img`
  width: 100%;
  height: 8rem;
  border-radius: 20px;
  object-fit: cover;
`;

export const DetailsName = styled.h1.attrs({ className: "DetailsName" })`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.fsXXL};
  ${RespondTo.mobileBreakpoint`
  font-size: ${({ theme }: any) => theme.fontSizes.fsXL};
  `}
`;

export const CancelIcon = styled(Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  transform: scale(1.5);
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: ${({ theme }) => theme.colors.clr3};
    transition: 0.4s ease;
  }
`;

export const CreatedByLocation = styled.h3.attrs({
  className: "CreatedByLocation",
})`
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsS};
  font-weight: 400;
`;
export const CreatedByTime = styled.h3.attrs({ className: "CreatedByTime" })`
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsXs};
  font-weight: 600;
`;

export const LocationFlag = styled.img.attrs({ className: "LocationFlag" })``;

export const ImagesListWrapper = styled.div.attrs({
  className: "ImagesListWrapper",
})`
  height: 8rem;
  ${RespondTo.mobileBreakpoint`
    margin-top:  1rem;    
  `}
`;
