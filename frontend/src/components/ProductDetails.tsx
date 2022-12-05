import {
  CreatedByName,
  PopUp,
} from "../assets/styles/components/ProductDetails.styled";
import { useNavigate } from "react-router-dom";
import ScreenOverlay from "./ScreenOverlay";
import { useState } from "react";
import { useContext } from "react";
import { ItemContext } from "../context/itemContext";
import {
  ProductDetailsContainer,
  ProductDetailsSection,
  MainIMg,
  DetailsDescription,
  CreatedByContainer,
  ImgsWrapper,
  SecondaryImg,
} from "../assets/styles/components/ProductDetails.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";
import { Avatar } from "@mui/material";

const ProductDetails = () => {
  const [isProductDetailsOpen, setIsProductDetailsOpen] =
    useState<boolean>(true);

  const navigate = useNavigate();

  const { dispatch, itemState } = useContext(ItemContext);

  const { description, mainImg, _id, itemName, createdBy, imgs } = itemState;

  const toggleProductDetailsOpen = () => {
    setIsProductDetailsOpen((isProductDetailsOpen) => !isProductDetailsOpen);
    dispatch({ type: "RESET_ITEM" });
    navigate("/");
  };

  return (
    <>
      <ScreenOverlay
        styleMode="darken"
        handleClick={toggleProductDetailsOpen}
        isProductDetailsOpen={isProductDetailsOpen}
      />
      <PopUp>
        <ProductDetailsContainer>
          <MainIMg src={mainImg} alt={itemName} />
          <ProductDetailsSection>
            <h1>{itemName}</h1>
            <CreatedByContainer>
              <Avatar src={createdBy.imgUrl} />
              <CreatedByName>{createdBy.fullname}</CreatedByName>
            </CreatedByContainer>
            <DetailsDescription>{description}</DetailsDescription>
            <PrimaryButton width="70%" height="70px" fontSize="l">
              Log in to comment
            </PrimaryButton>
            <ImgsWrapper>
              {imgs &&
                imgs.slice(0, 3).map((img) => <SecondaryImg src={img} />)}
            </ImgsWrapper>
          </ProductDetailsSection>
        </ProductDetailsContainer>
      </PopUp>
    </>
  );
};

export default ProductDetails;
