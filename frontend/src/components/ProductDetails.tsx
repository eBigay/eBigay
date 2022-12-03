import { PopUp } from "../assets/styles/components/ProductDetails.styled";
import { useNavigate } from "react-router-dom";
import ScreenOverlay from "./ScreenOverlay";
import { useState } from "react";
import { useContext } from "react";
import { ItemContext } from "../context/itemContext";

const ProductDetails = () => {
  const [isProductDetailsOpen, setIsProductDetailsOpen] =
    useState<boolean>(true);

  const navigate = useNavigate();

  const { dispatch, itemState } = useContext(ItemContext);

  const { description, mainImg, _id } = itemState;

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
        <img src={mainImg} alt="" />
        <h1>ID: {_id}</h1>
        <p>{description}</p>
      </PopUp>
    </>
  );
};

export default ProductDetails;
