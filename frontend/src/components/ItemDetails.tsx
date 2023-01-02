import { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import _ from "lodash";
import { formatDistance } from "date-fns";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, type Swiper as SwiperRef } from "swiper";
import ScreenOverlay from "./layout/ScreenOverlay";
import { rootContext } from "../context/RootContext";

import useOverflow from "../hooks/useOverflow";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  CreatedByName,
  PopUp,
  ItemDetailsContainer,
  ItemDetailsSection,
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
  CreatedByTime,
} from "../assets/styles/components/ItemDetails.styled";
import {
  StyledSwiperMain,
  StyledSwiperThumbs,
} from "../assets/styles/components/ItemImagesSlider.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";

const ItemDetails = () => {
  const [activeThumb, setActiveThumb] = useState<SwiperRef>();

  const { modal, handleModal, modalContent } = useContext(rootContext);

  const { description, itemName, createdBy, imgs, location, createdAt } =
    modalContent;

  const relativeTimeString = formatDistance(createdAt, new Date(), {
    addSuffix: true,
  });

  useOverflow(modal);

  const toggleItemDetailsOpen = () => {
    handleModal();
  };

  return (
    <>
      <ScreenOverlay
        styleMode="darken"
        handleClick={toggleItemDetailsOpen}
        isItemDetailsOpen={modal}
      />
      <PopUp isItemDetailsOpen={modal}>
        <ItemDetailsContainer>
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
                  <MainIMg src={item} alt="item images" loading="lazy" />
                </SwiperSlide>
              ))}
          </StyledSwiperMain>
          <ItemDetailsSection>
            <DetailsName>{itemName}</DetailsName>
            <CreatedByContainer>
              <Avatar src={createdBy.imgUrl} sx={{ width: 60, height: 60 }} />
              <CreatedByWrapper>
                <CreatedByName>{createdBy.fullName}</CreatedByName>
                <CreatedByLocation>{location}</CreatedByLocation>
                <CreatedByTime>{relativeTimeString}</CreatedByTime>
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
                          alt="item images"
                          loading="lazy"
                        />
                      </ImgsWrapper>
                    </SwiperSlide>
                  ))}
              </StyledSwiperThumbs>
            </ImagesListWrapper>
          </ItemDetailsSection>
        </ItemDetailsContainer>
        <CancelIcon onClick={toggleItemDetailsOpen} />
      </PopUp>
    </>
  );
};

export default ItemDetails;
