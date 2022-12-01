import { PopUp } from "../assets/styles/components/ProductDetails.styled";
import { useParams, useNavigate } from "react-router-dom";
import ScreenOverlay from "./ScreenOverlay";
import { useCallback, useState } from "react";
import { useEffect } from "react";

const ProductDetails = () => {
  const [isProductDetailsOpen, setIsProductDetailsOpen] =
    useState<boolean>(true);

  const navigate = useNavigate();
  const { id } = useParams();

  const toggleProductDetailsOpen = useCallback(() => {
    setIsProductDetailsOpen((isProductDetailsOpen) => !isProductDetailsOpen);
    navigate("/");
  }, []);

  return (
    <>
      <ScreenOverlay
        styleMode="darken"
        handleClick={toggleProductDetailsOpen}
        isProductDetailsOpen={isProductDetailsOpen}
      />
      <PopUp>
        <h1>ID: {id}</h1>
      </PopUp>
    </>
  );
};

export default ProductDetails;
