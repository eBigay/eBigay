import { useContext, useState, useRef, useEffect } from "react";
import { Avatar } from "@mui/material";
import _ from "lodash";
import { formatDistance } from "date-fns";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Lazy, type Swiper as SwiperRef } from "swiper";
import { useNavigate } from "react-router";
import ScreenOverlay from "./layout/ScreenOverlay";
import { rootContext } from "../context/RootContext";
import Calling from "../assets/svgs/Calling.svg";

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
  PhoneNumberContainer,
  PhoneImage,
  PhoneNumber,
} from "../assets/styles/components/ItemDetails.styled";
import {
  StyledSwiperMain,
  StyledSwiperThumbs,
} from "../assets/styles/components/ItemImagesSlider.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";
import useAuthContext from "../hooks/useAuthContext";
import Loading from "./Loading";

const ItemDetails = () => {
  const [activeThumb, setActiveThumb] = useState<SwiperRef>();

  const modalTop = useRef<HTMLInputElement>(null);

  const { modal, handleModal, modalContent } = useContext(rootContext);

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

  // making sure the modal is showing from top when appearing
  useEffect(() => {
    if (modalTop.current) modalTop.current.scrollIntoView({ block: "center" });
  }, [modal]);

  const navigate = useNavigate();

  // temp fix
  const imagePlaceholder =
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

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
              imgs.map(() => (
                <SwiperSlide key={_.uniqueId()}>
                  <MainIMg
                    data-src={imagePlaceholder}
                    alt="item images"
                    className="swiper-lazy"
                  />
                  <Loading
                    className="swiper-lazy-preloader"
                    size="small"
                    height="100%"
                    marginTop="0"
                  />
                </SwiperSlide>
              ))}
          </StyledSwiperMain>
          <ItemDetailsSection>
            <DetailsName ref={modalTop}>{itemName}</DetailsName>
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
              <PhoneNumberContainer>
                <PhoneImage src={Calling} alt="phone" />
                <PhoneNumber href="tel:0548922123">0548922123</PhoneNumber>
              </PhoneNumberContainer>
            ) : (
              <PrimaryButton
                width="70%"
                height="70px"
                fontSize="l"
                onClick={() => {
                  navigate("/login");
                  toggleItemDetailsOpen();
                  window.scroll({ top: 0, behavior: "smooth" });
                }}
              >
                Log in for details
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
                  imgs.map(() => (
                    <SwiperSlide key={_.uniqueId()}>
                      <ImgsWrapper>
                        <SecondaryImg
                          data-src={imagePlaceholder}
                          alt="item images"
                          loading="lazy"
                          className="swiper-lazy"
                        />
                        <Loading
                          size="small"
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
