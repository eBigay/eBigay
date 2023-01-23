import styled from "styled-components";
import { Swiper } from "swiper/react";
import RespondTo from "../../theme/responsive";

export const StyledSwiperContainer = styled.div`
  width: 50%;
  height: 75%;
  ${RespondTo.mobileBreakpoint`
  width: 100%;
  height: 50%;
  `}
`;

export const StyledSwiperWrapper = styled.div`
  height: 100%;
  ${RespondTo.mobileBreakpoint`
  height: 60%;
  `}
`;

export const StyledSwiperMain = styled(Swiper)`
  position: relative;
  height: 100%;
  margin-bottom: 0.7rem;
  .swiper-slide {
    margin: 0;
    overflow: hidden;
    position: relative;
  }

  .swiper-button-prev {
    position: absolute;
    left: 5px;
    color: #000;
  }

  .swiper-button-next {
    right: 5px;
    color: #000;
  }
`;

export const StyledSwiperThumbs = styled(Swiper)`
  height: 100%;
  margin-top: auto;
  .swiper-slide {
    cursor: pointer;
    img {
      opacity: 0.5;
    }

    &-thumb-active {
      img {
        transition: 0.3s ease;
        opacity: 1;
      }
    }
  }
`;
