import { Avatar } from "@mui/material";
import { useContext, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, type Swiper as SwiperRef } from "swiper";
import ScreenOverlay from "./layout/ScreenOverlay";
import PrimaryButton from "../assets/styles/base/Button.styled";
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
} from "../assets/styles/components/ItemDetails.styled";
import {
  StyledSwiperMain,
  StyledSwiperThumbs,
} from "../assets/styles/components/ItemImagesSlider.styled";
import ItemImagesSlider from "./ItemImagesSlider";
import useModalContext from "../hooks/useModalContext";

const ItemDetails = () => {
  const { modal, handleModal, modalContent } = useModalContext();

  const { description, mainImg, itemName, createdBy, imgs, location, id } =
    modalContent;

  useOverflow(modal, [modal]);

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
          {imgs && <ItemImagesSlider images={imgs} />}
          <ItemDetailsSection>
            <DetailsName>{itemName}</DetailsName>
            <CreatedByContainer>
              <Avatar src={createdBy.imgUrl} sx={{ width: 60, height: 60 }} />
              <CreatedByWrapper>
                <CreatedByName>{createdBy.name}</CreatedByName>
                <CreatedByLocation>{location}</CreatedByLocation>
              </CreatedByWrapper>
            </CreatedByContainer>
            <DetailsDescription>{description}</DetailsDescription>
            <PrimaryButton width="70%" height="70px" fontSize="l">
              Log in to comment
            </PrimaryButton>
            <ImagesListWrapper />
          </ItemDetailsSection>
        </ItemDetailsContainer>
        <CancelIcon onClick={toggleItemDetailsOpen} />
      </PopUp>
    </>
  );
};

export default ItemDetails;
