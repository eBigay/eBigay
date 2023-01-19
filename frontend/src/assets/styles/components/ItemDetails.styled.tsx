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
  ${RespondTo.laptopBreakpoint`
  top: 50%;
  width: 85vw;
  `}

  ${RespondTo.mobileBreakpoint`
  width: 90vw;
  height: 85vh;
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
  ${RespondTo.laptopBreakpoint`
  padding: 2.5rem;
`}
  ${RespondTo.laptopBreakpoint`
  padding: 2rem 1.5rem;
`}

  ${RespondTo.mobileBreakpoint`
  flex-direction: column-reverse;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
  display: none;
}
  .swiper {
    overflow: visible;
    margin-left: 0;
    margin-right: 0;
  }
  `}
`;

export const MainIMg = styled.img`
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
  max-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${RespondTo.mobileBreakpoint`
  max-width: 100%;
  gap: 20px;
  button {
    font-size: ${({ theme }: any) => theme.fontSizes.fsS};
    height: 3rem;
    margin: 0 auto;
  }
  `}

  ${RespondTo.tabletBreakpoint`
  button {
    font-size: ${({ theme }: any) => theme.fontSizes.fsM};
    height: 3rem;
  }
`}
`;

export const DetailsDescription = styled.p.attrs({
  className: "DetailsDescription",
})`
  color: ${({ theme }) => theme.colors.clr3};
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
  line-height: 30px;
  ${RespondTo.tabletBreakpoint`
  font-size: ${({ theme }: any) => theme.fontSizes.fsL};
  line-height: 25px;
  `}
  ${RespondTo.mobileBreakpoint`
  font-size: ${({ theme }: any) => theme.fontSizes.fsM};
  line-height: 20px;
  margin: 10px 0;
  `}
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
  gap: 15px;
  ${RespondTo.mobileBreakpoint`
  gap: 0;
`}
`;
export const CreatedByName = styled.h3.attrs({ className: "CreatedByName" })`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 600;
`;

export const ImgsWrapper = styled.div.attrs({ className: "ImgsWrapper" })`
  display: flex;
  gap: 37px;
  margin-top: auto;
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
  font-size: ${({ theme }) => theme.fontSizes.fsXXl};
  word-break: break-word;
  ${RespondTo.mobileBreakpoint`
    line-height: 32px;
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
  margin-top: auto;
  height: 8rem;
  ${RespondTo.mobileBreakpoint`
    margin-top:  1rem;    
  `}
`;
