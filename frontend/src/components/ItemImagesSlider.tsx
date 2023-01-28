import { useState } from "react";
import _ from "lodash";
import { SwiperSlide } from "swiper/react";
import { Lazy, Navigation, Thumbs, type Swiper as SwiperRef } from "swiper";
import {
  ImgsWrapper,
  MainIMg,
  SecondaryImg,
} from "../assets/styles/components/ItemDetails.styled";
import {
  StyledSwiperContainer,
  StyledSwiperMain,
  StyledSwiperThumbs,
  StyledSwiperWrapper,
} from "../assets/styles/components/ItemImagesSlider.styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Loading from "./Loading";

interface SliderProps {
  images: string[];
}

const ItemImagesSlider = ({ images }: SliderProps) => {
  const [activeThumb, setActiveThumb] = useState<SwiperRef>();

  return (
    <StyledSwiperContainer>
      <StyledSwiperWrapper>
        <StyledSwiperMain
          slidesPerView={1}
          loop
          spaceBetween={10}
          navigation
          lazy
          modules={[Navigation, Thumbs, Lazy]}
          grabCursor
          thumbs={{
            swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
          }}
        >
          {images &&
            images.map((image) => (
              <SwiperSlide key={_.uniqueId()}>
                <MainIMg data-src={image} className="swiper-lazy" alt="main" />
                <Loading className="swiper-lazy-preloader" />
              </SwiperSlide>
            ))}
        </StyledSwiperMain>
        <StyledSwiperThumbs
          onSwiper={setActiveThumb}
          loop
          lazy
          spaceBetween={10}
          slidesPerView={3}
          modules={[Navigation, Thumbs, Lazy]}
        >
          {images &&
            images.map((image) => (
              <SwiperSlide key={_.uniqueId()}>
                <ImgsWrapper>
                  <SecondaryImg
                    data-src={image}
                    loading="lazy"
                    className="swiper-lazy"
                  />
                  <Loading
                    pos="absolute"
                    size="xsmall"
                    className="swiper-lazy-preloader"
                  />
                </ImgsWrapper>
              </SwiperSlide>
            ))}
        </StyledSwiperThumbs>
      </StyledSwiperWrapper>
    </StyledSwiperContainer>
  );
};

export default ItemImagesSlider;
