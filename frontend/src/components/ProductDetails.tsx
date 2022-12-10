import { Avatar } from "@mui/material";
import { useContext } from "react";
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
} from "../assets/styles/components/ProductDetails.styled";
import ScreenOverlay from "./ScreenOverlay";

import PrimaryButton from "../assets/styles/base/Button.styled";
import { rootContext } from "../context/RootContext";
import useOverflow from "../hooks/useOverflow";

const ProductDetails = () => {
  const { modal, handleModal, modalContent } = useContext(rootContext);

  const { description, mainImg, itemName, createdBy, imgs, location } =
    modalContent;

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
          <MainIMg src={mainImg} alt={itemName} />
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
            <ImgsWrapper>
              {imgs &&
                imgs
                  .slice(0, 3)
                  .map((img) => <SecondaryImg key={img} src={img} />)}
            </ImgsWrapper>
          </ProductDetailsSection>
        </ProductDetailsContainer>
        <CancelIcon onClick={toggleProductDetailsOpen} />
      </PopUp>
    </>
  );
};

export default ProductDetails;
