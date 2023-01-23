import { Avatar } from "@mui/material";
import _ from "lodash";
import { formatDistance } from "date-fns";
import { useNavigate } from "react-router";
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
  DetailsDescription,
  CreatedByContainer,
  DetailsName,
  CancelIcon,
  CreatedByLocation,
  CreatedByWrapper,
  ImagesListWrapper,
  CreatedByTime,
} from "../assets/styles/components/ItemDetails.styled";

import PrimaryButton from "../assets/styles/base/Button.styled";
import useAuthContext from "../hooks/useAuthContext";
import useModalContext from "../hooks/useModalContext";
import ItemImagesSlider from "./ItemImagesSlider";

const ItemDetails = () => {
  const { modal, handleModal, modalContent } = useModalContext();

  const {
    state: { user },
  } = useAuthContext();

  const { description, itemName, createdBy, images, location, createdAt } =
    modalContent;

  const relativeTimeString = formatDistance(createdAt, new Date(), {
    addSuffix: true,
  });

  useOverflow(modal);

  const toggleItemDetailsOpen = () => {
    handleModal();
  };

  const navigate = useNavigate();

  return (
    <>
      <ScreenOverlay
        styleMode="darken"
        handleClick={toggleItemDetailsOpen}
        isItemDetailsOpen={modal}
      />
      <PopUp isItemDetailsOpen={modal}>
        <ItemDetailsContainer>
          {images && <ItemImagesSlider images={images} />}
          <ItemDetailsSection>
            <DetailsName>{itemName}</DetailsName>
            <CreatedByContainer>
              <Avatar src={createdBy.imageUrl} sx={{ width: 60, height: 60 }} />
              <CreatedByWrapper>
                <CreatedByName>{createdBy.username}</CreatedByName>
                <CreatedByLocation>{location}</CreatedByLocation>
                <CreatedByTime>{relativeTimeString}</CreatedByTime>
              </CreatedByWrapper>
            </CreatedByContainer>
            <DetailsDescription>{description}</DetailsDescription>
            {user ? (
              <h3>Phone Number: {user.phoneNumber}</h3>
            ) : (
              <PrimaryButton
                width="12rem"
                height="70px"
                fontSize="l"
                onClick={() => {
                  navigate("/login");
                  toggleItemDetailsOpen();
                }}
              >
                Log in to details
              </PrimaryButton>
            )}
            <ImagesListWrapper></ImagesListWrapper>
          </ItemDetailsSection>
        </ItemDetailsContainer>
        <CancelIcon onClick={toggleItemDetailsOpen} />
      </PopUp>
    </>
  );
};

export default ItemDetails;
