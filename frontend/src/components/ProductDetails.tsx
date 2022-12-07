import {
  CreatedByName,
  PopUp,
} from "../assets/styles/components/ProductDetails.styled";
import ScreenOverlay from "./ScreenOverlay";
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
import { rootContext } from "../context/RootContext";
import { useContext } from "react";

const ProductDetails = () => {
  const { modal, handleModal, modalContent } = useContext(rootContext);

  const { description, mainImg, itemName, createdBy, imgs } = modalContent;

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
                imgs
                  .slice(0, 3)
                  .map((img) => <SecondaryImg key={img} src={img} />)}
            </ImgsWrapper>
          </ProductDetailsSection>
        </ProductDetailsContainer>
      </PopUp>
    </>
  );
};

export default ProductDetails;
