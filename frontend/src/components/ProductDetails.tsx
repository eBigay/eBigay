import { Avatar } from "@mui/material";
import _ from "lodash";
import { useContext, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, type Swiper as SwiperRef } from "swiper";
import ScreenOverlay from "./ScreenOverlay";
import PrimaryButton from "../assets/styles/base/Button.styled";
import { rootContext } from "../context/RootContext";
import useOverflow from "../hooks/useOverflow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {
  CreatedByName,
  PopUp,
  ProductDetailsContainer,
  ProductDetailsSection,
  MainIMg,
  DetailsDescription,
  CreatedByContainer,
  ImgsWrapper,
  SecondaryImg,
  DetailsName,
  CancelIcon,
  CreatedByLocation,
  CreatedByWrapper,
  ImagesListWrapper,
} from "../assets/styles/components/ProductDetails.styled";
import {
  StyledSwiperMain,
  StyledSwiperThumbs,
} from "../assets/styles/components/ProductImagesSlider.styled";

const ProductDetails = () => {
  const [activeThumb, setActiveThumb] = useState<SwiperRef>();

  const { modal, handleModal, modalContent } = useContext(rootContext);

  const { description, itemName, createdBy, imgs, location } = modalContent;

  useOverflow(modal);

  useOverflow(modal, [modal]);

  const toggleProductDetailsOpen = () => {
    handleModal();
  };

  return (
    <>
      <ScreenOverlay
        styleMode="darken"
        handleClick={toggleProductDetailsOpen}
        isProductDetailsOpen={modal}
      />
      <PopUp isProductDetailsOpen={modal}>
        <ProductDetailsContainer>
          <StyledSwiperMain
            slidesPerView={1}
            loop
            spaceBetween={10}
            navigation
            modules={[Navigation, Thumbs]}
            grabCursor
            thumbs={{
              swiper:
                activeThumb && !activeThumb.destroyed ? activeThumb : null,
            }}
          >
            {imgs &&
              imgs.map((item) => (
                <SwiperSlide key={_.uniqueId()}>
                  <MainIMg src={item} alt="product images" loading="lazy" />
                </SwiperSlide>
              ))}
          </StyledSwiperMain>
          <ProductDetailsSection>
            <DetailsName>{itemName}</DetailsName>
            <CreatedByContainer>
              <Avatar src={createdBy.imgUrl} sx={{ width: 60, height: 60 }} />
              <CreatedByWrapper>
                <CreatedByName>{createdBy.fullName}</CreatedByName>
                <CreatedByLocation>{location}</CreatedByLocation>
              </CreatedByWrapper>
            </CreatedByContainer>
            <DetailsDescription>{description}</DetailsDescription>
            <PrimaryButton width="70%" height="70px" fontSize="l">
              Log in to comment
            </PrimaryButton>
            <ImagesListWrapper>
              <StyledSwiperThumbs
                onSwiper={setActiveThumb}
                loop
                spaceBetween={10}
                slidesPerView={3}
                modules={[Navigation, Thumbs]}
              >
                {imgs &&
                  imgs.map((item) => (
                    <SwiperSlide key={_.uniqueId()}>
                      <ImgsWrapper>
                        <SecondaryImg
                          src={item}
                          alt="product images"
                          loading="lazy"
                        />
                      </ImgsWrapper>
                    </SwiperSlide>
                  ))}
              </StyledSwiperThumbs>
            </ImagesListWrapper>
          </ProductDetailsSection>
        </ProductDetailsContainer>
        <CancelIcon onClick={toggleProductDetailsOpen} />
      </PopUp>
    </>
  );
};

export default ProductDetails;
