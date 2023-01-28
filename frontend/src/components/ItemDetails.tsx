import { Avatar } from "@mui/material";
import { formatDistance } from "date-fns";
import { useNavigate } from "react-router";
import ScreenOverlay from "./layout/ScreenOverlay";

import useOverflow from "../hooks/useOverflow";

import Calling from "../assets/svgs/Calling.svg";
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
  PhoneNumberContainer,
  PhoneImage,
  PhoneNumber,
} from "../assets/styles/components/ItemDetails.styled";

import PrimaryButton from "../assets/styles/base/Button.styled";
import useAuthContext from "../hooks/useAuthContext";
import useModalContext from "../hooks/useModalContext";
import ItemImagesSlider from "./ItemImagesSlider";
import Map from "./Map";

const ItemDetails = () => {
  const { modal, handleModal, modalContent } = useModalContext();

  const {
    state: { user },
  } = useAuthContext();

  const { description, itemName, createdBy, images, location, createdAt, qty } =
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
            {user ? (
              <>
                <DetailsDescription>{`quantity: ${qty}`}</DetailsDescription>
                <DetailsDescription>{`description: ${description}`}</DetailsDescription>
                <PhoneNumberContainer>
                  <PhoneImage src={Calling} alt="phone" />
                  <PhoneNumber href={`tel:${createdBy.phoneNumber}`}>
                    {createdBy.phoneNumber}
                  </PhoneNumber>
                </PhoneNumberContainer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://maps.google.com?q=${
                    createdBy.location?.split(",")[0].split(":")[1]
                  },${createdBy.location?.split(",")[1].split(":")[1]}`}
                >
                  {createdBy && createdBy.location && (
                    <Map
                      lat={+createdBy.location?.split(",")[0].split(":")[1]}
                      long={+createdBy.location?.split(",")[1].split(":")[1]}
                    />
                  )}
                </a>
              </>
            ) : (
              <PrimaryButton
                width="12rem"
                height="3.5rem"
                fontSize="l"
                onClick={() => {
                  toggleItemDetailsOpen();
                  setTimeout(() => {
                    navigate("/login");
                    window.scroll({ top: 0, behavior: "smooth" });
                  }, 100);
                }}
              >
                Log in for details
              </PrimaryButton>
            )}
            <ImagesListWrapper />
          </ItemDetailsSection>
        </ItemDetailsContainer>
        <CancelIcon onClick={toggleItemDetailsOpen} />
      </PopUp>
    </>
  );
};

export default ItemDetails;
