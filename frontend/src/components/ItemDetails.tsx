import { useState } from "react";
import { Avatar } from "@mui/material";
import _ from "lodash";
import { formatDistance } from "date-fns";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Lazy, type Swiper as SwiperRef } from "swiper";
import ScreenOverlay from "./layout/ScreenOverlay";

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
import useAuthContext from "../hooks/useAuthContext";
import Loading from "./Loading";
import useModalContext from "../hooks/useModalContext";

const ItemDetails = () => {
  const [activeThumb, setActiveThumb] = useState<SwiperRef>();

  const { modal, handleModal, modalContent } = useModalContext();

  const {
    state: { user },
  } = useAuthContext();

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
            lazy
            modules={[Navigation, Thumbs, Lazy]}
            grabCursor
            thumbs={{
              swiper:
                activeThumb && !activeThumb.destroyed ? activeThumb : null,
            }}
          >
            {imgs &&
              imgs.map((item) => (
                <SwiperSlide key={_.uniqueId()}>
                  <MainIMg
                    data-src={item}
                    alt="item images"
                    className="swiper-lazy"
                  />
                  <Loading className="swiper-lazy-preloader" />
                </SwiperSlide>
              ))}
          </StyledSwiperMain>
          <ItemDetailsSection>
            <DetailsName>{itemName}</DetailsName>
            <CreatedByContainer>
              <Avatar src={createdBy.imgUrl} sx={{ width: 60, height: 60 }} />
              <CreatedByWrapper>
                <CreatedByName>{createdBy.name}</CreatedByName>
                <CreatedByLocation>{location}</CreatedByLocation>
                <CreatedByTime>{relativeTimeString}</CreatedByTime>
              </CreatedByWrapper>
            </CreatedByContainer>
            <DetailsDescription>{description}</DetailsDescription>
            {user ? (
              <div>0548922123</div>
            ) : (
              <PrimaryButton width="70%" height="70px" fontSize="l">
                Log in to details
              </PrimaryButton>
            )}
            <ImagesListWrapper>
              <StyledSwiperThumbs
                onSwiper={setActiveThumb}
                loop
                lazy
                spaceBetween={10}
                slidesPerView={3}
                modules={[Navigation, Thumbs, Lazy]}
              >
                {imgs &&
                  imgs.map((item) => (
                    <SwiperSlide key={_.uniqueId()}>
                      <ImgsWrapper>
                        <SecondaryImg
                          data-src={item}
                          alt="item images"
                          loading="lazy"
                          className="swiper-lazy"
                        />
                        <Loading
                          size="x-small"
                          className="swiper-lazy-preloader"
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
