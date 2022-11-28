import {
  MessageOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../assets/styles/base/Button.styled";
import ItemCardContainer, {
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

interface IItemCard {
  item: {
    _id: string;
    qty: number;
    itemName: string;
    mainImg: string;
    category: string;
    location: any;
    createdAt: number;
    description: string;
  };
}

const ItemCard = ({ item }: IItemCard) => {
  const navigate = useNavigate();
  return (
    <ItemCardContainer>
      <ItemImageContainer>
        <ItemImage src={item.mainImg} alt={item.itemName} />
        <ItemInfo>
          <div>
            <SearchOutlined onClick={() => navigate(`/product/${item._id}`)} />
          </div>
          <div>
            <MessageOutlined />
          </div>
          <div>
            <FavoriteBorderOutlined />
          </div>
        </ItemInfo>
      </ItemImageContainer>

      <ItemDetails>
        <ItemName>{item.itemName}</ItemName>
        <ItemCategory>{item.category}</ItemCategory>
        <ItemLocation>
          <LocationImage src={Location} alt="" />
          <LocationName className="location-name">{item.location}</LocationName>
        </ItemLocation>
        <PrimaryButton width="194px" height="34px" fontSize="xs" type="button">
          Sign up for phone number
        </PrimaryButton>
      </ItemDetails>
    </ItemCardContainer>
  );
};

export default ItemCard;
