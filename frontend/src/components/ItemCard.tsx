import {
  MessageOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../assets/styles/base/Button.styled";
import ItemCardContainer, {
  Icon,
  ItemCategory,
  ItemDetails,
  ItemImage,
  ItemImageContainer,
  ItemInfo,
  ItemLocation,
  ItemName,
  LocationImage,
  LocationName,
} from "../assets/styles/components/ItemCard.styled";
import Location from "../assets/svgs/Location.svg";
import { ItemContext } from "../context/itemContext";
import { IItem } from "../interfaces/IItem.interface";

interface IItemCard {
  item: IItem;
}

const ItemCard = ({ item }: IItemCard) => {
  const navigate = useNavigate();

  const { dispatch } = useContext(ItemContext);

  const handleOpenProductDetails = () => {
    dispatch({ type: "SET_ITEM", payload: item });
    navigate(`/product/${item._id}`);
  };

  return (
    <ItemCardContainer>
      <ItemImageContainer>
        <ItemImage src={item.mainImg} alt={item.itemName} />
        <ItemInfo>
          <Icon>
            <SearchOutlined onClick={handleOpenProductDetails} />
          </Icon>
          <Icon>
            <MessageOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </ItemInfo>
      </ItemImageContainer>

      <ItemDetails>
        <ItemName>{item.itemName}</ItemName>
        <ItemCategory>{item.category}</ItemCategory>
        <ItemLocation>
          <LocationImage src={Location} alt="location" />
          <LocationName>{item.location}</LocationName>
        </ItemLocation>
        <PrimaryButton width="194px" height="34px" fontSize="xs" type="button">
          Sign up for phone number
        </PrimaryButton>
      </ItemDetails>
    </ItemCardContainer>
  );
};

export default ItemCard;
