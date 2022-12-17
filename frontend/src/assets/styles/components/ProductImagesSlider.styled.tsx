import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiperMain = styled(Swiper)`
  position: relative;
  height: 100%;
  max-width: 50%;
  .swiper-slide {
    overflow: hidden;
    position: relative;
  }

  .swiper-button-prev {
    position: absolute;
    left: 0;
    color: #000;
  }

  .swiper-button-next {
    right: 0;
    color: #000;
  }
`;

export const StyledSwiperThumbs = styled(Swiper)`
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