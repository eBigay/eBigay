import {
  MessageOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
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
  Icon,
} from "../assets/styles/components/ItemCard.styled";
import Location from "../assets/svgs/Location.svg";
import { rootContext } from "../context/RootContext";
import { IItem } from "../interfaces/IItem.interface";

interface IItemCard {
  item: IItem;
}

const ItemCard = ({ item }: IItemCard) => {
  // const { handleModal } = useContext(rootContext);

  // const handleOpenProductDetails = () => {
  //   handleModal(item);
  // };

  return (
    <ItemCardContainer>
      <ItemImageContainer>
        <ItemImage src={item.mainImg} alt={item.itemName} />
        <ItemInfo>
          <Icon>
            <SearchOutlined
            //  onClick={handleOpenProductDetails}
            />
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
