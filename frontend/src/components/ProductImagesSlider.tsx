import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";
import { type Swiper as SwiperRef } from "swiper";

interface SliderProps {
  images: string[];
}

const ProductImagesSlider = ({ images }: SliderProps) => {
  const [activeThumb, setActiveThumb] = useState<SwiperRef>();

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={activeThumb ? { swiper: activeThumb } : {}}
        className="product-images-slider"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="product images" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setActiveThumb(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={item} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductImagesSlider;
