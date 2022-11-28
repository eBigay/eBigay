import { PopUp } from "../assets/styles/components/ProductDetsils.styled";
import { useParams, useNavigate } from "react-router-dom";
import ScreenOverlay from "./ScreenOverlay";
const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <ScreenOverlay styleMode="darken" goBack={() => navigate("/")}>
        <PopUp>
          <h1>ID: {id}</h1>
        </PopUp>
      </ScreenOverlay>
    </>
  );
};

export default ProductDetails;
