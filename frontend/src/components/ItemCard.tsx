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
} from "../assets/styles/components/ItemCard.styled";
import Location from "../assets/svgs/Location.svg";
import { rootContext } from "../context/RootContext";
import { IItem } from "../interfaces/IItem.interface";

interface IItemCard {
  item: IItem;
}

const ItemCard = ({ item }: IItemCard) => {
  const { setNotificationOpen, setNotificationContent } =
    useContext(rootContext);
  return (
    <ItemCardContainer>
      <ItemImageContainer>
        <ItemImage src={item.mainImg} alt={item.itemName} />
        <ItemInfo>
          <div>
            <SearchOutlined
              onClick={() => {
                setNotificationContent({ title: item.itemName, message: "" });
                setNotificationOpen(true);
              }}
            />
            {/* <Link to={`/product/${item._id}`} /> */}
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
