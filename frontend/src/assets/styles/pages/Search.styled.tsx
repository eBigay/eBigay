import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

export const StyledSearchHeader = styled.h1.attrs({
  className: "StyledSearchHeader",
})`
  font-weight: 600;
  font-size: 40px;
  line-height: 70px;
  text-align: center;
  padding: 0 5rem;
  margin: 10rem auto 1.5rem;
  width: 1400px;
  ${RespondTo.narrowBreakpoint`
  padding: 0;
  width: 90%;
  font-size:  32px;
  line-height: 50px;
  `}

  ${RespondTo.laptopBreakpoint`
  margin: 3rem auto 1.5rem;
`}

  ${RespondTo.mobileBreakpoint`
  margin-top: 2rem;
  font-size:  ${({ theme }: any) => theme.fontSizes.fsXL};
line-height: 30px;
  `}
`;

export const StyledSearchSubHeader = styled.h1.attrs({
  className: "StyledSearchSubHeader",
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
  line-height: 167.2%;
  text-align: center;
  ${RespondTo.mobileBreakpoint`
  width: 90%;
  margin: 0 auto;
  font-size:  ${({ theme }: any) => theme.fontSizes.fsL};
  line-height: 30px;
  `}
`;

export const LeonhardCulmann = styled.h1.attrs({
  className: "LeonhardCulmann",
})`
  font-size: 20px;
  line-height: 167.2%;
  text-align: center;
  color: ${({ theme }) => theme.colors.clr3};
  margin: 1rem 0 2rem;
  ${RespondTo.mobileBreakpoint`
  font-size:  ${({ theme }: any) => theme.fontSizes.fsM};
  line-height: 30px;
  `}
`;

const StyledSearchContainer = styled.section`
  display: flex;
  gap: 3rem;
  padding: 3rem 5rem 3rem;
  .listContainer {
    padding: 0;
  }
  ${RespondTo.narrowBreakpoint`
  gap: 2rem;
  padding: 3rem 3rem 3rem;
  `}

  ${RespondTo.mobileBreakpoint`
  padding: 3rem 2rem 3rem;
  `}

  ${MinWidth.wideBreakpoint`
  padding: 3rem 15rem 3rem;
`}
`;

export const StyledNoSearch = styled.h2`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export default StyledSearchContainer;
