import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

const StyledAbout = styled.div`
  padding: 1rem 5rem;
  ${MinWidth.wideBreakpoint`
  padding: 0 15rem;
  `}
  ${MinWidth.superWideBreakpoint`
  padding: 0 25rem;
  `}
  ${RespondTo.mobileBreakpoint`
  padding: 0 1.2rem;
  `}
`;

export const BackLinkContainer = styled.div.attrs({
  className: "BackLinkContainer",
})`
  cursor: pointer;
`;

export const BackLink = styled.p`
  display: inline;
  position: absolute;
  width: 36px;
  height: 21px;
  left: 100.41px;
  top: 158.29px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.62);
  ${MinWidth.wideBreakpoint`
  left: 275px;
  font-size: 18px;
  `}
  ${MinWidth.superWideBreakpoint`
    left: 440px;
  `}
  ${RespondTo.mobileBreakpoint`
    left: 45px;
    top: 145px;
  `}
`;

interface BackButtonProps {
  hover: boolean;
}

export const BackImage = styled.img<BackButtonProps>`
  position: absolute;
  left: ${({ hover }) => (hover ? "70px" : "80px")};
  top: 166px;
  transition: 0.2s ease;
  ${MinWidth.wideBreakpoint`
  left: ${({ hover }: BackButtonProps) => (hover ? "230px" : "240px")};
  `};
  ${MinWidth.superWideBreakpoint`
  left: ${({ hover }: BackButtonProps) => (hover ? "390px" : "400px")};
  `}
  ${RespondTo.mobileBreakpoint`
    left: ${({ hover }: BackButtonProps) => (hover ? "15px" : "20px")};
    top: 150px;
  `};
`;

export const AboutUsHeader = styled.h1`
  width: 137px;
  height: 70px;
  margin: 165px auto 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 70px;
  display: flex;
  align-items: flex-end;
  text-align: center;
`;

export const AboutUsImage = styled.img`
  display: inline-block;
  margin: 2rem auto;
  width: 100%;
  ${MinWidth.wideBreakpoint`
  max-height: 500px;
  width: 100%;
  object-fit: cover;
  `}
  ${RespondTo.mobileBreakpoint`
  width: 100vw;
  height: 25vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 70px;
  opacity: 0.3;
  z-index: -5;
  margin: 0 auto 2rem ;
`}
`;

export const AboutUsText = styled.p`
  display: inline-block;
  margin: 2rem auto;
  width: 100%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
  line-height: 167.2%;
  color: ${({ theme }) => theme.colors.clr3};
  ${RespondTo.mobileBreakpoint`
  line-height: 160%;
  margin: 3.5rem auto 2rem;
  font-size: ${({ theme }: any) => theme.fontSizes.fsM};
`}
`;

export default StyledAbout;
