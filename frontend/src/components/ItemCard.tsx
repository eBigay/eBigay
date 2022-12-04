import {
  MessageOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../assets/styledComponents/base/Button.styled";
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
} from "../assets/styledComponents/components/ItemCard.styled";
import Location from "../assets/svgs/Location.svg";
import { rootContext } from "../context/RootContext";
import ItemModal from "./ItemModal";

interface IItemCard {
  item: {
    _id: string;
    qty: number;
    itemName: string;
    mainImg: string;
    category: string;
    location: any;
    createdAt: number;
    isAvailable: boolean;
    description: string;
  };
}

const ItemCard = ({ item }: IItemCard) => {
  const { setNotificationOpen, setNotificationContent } =
    useContext(rootContext);
  return (
    <>
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
            <LocationName className="location-name">
              {item.location}
            </LocationName>
          </ItemLocation>
          <PrimaryButton
            width="194px"
            height="34px"
            fontSize="xs"
            type="button"
          >
            Sign up for phone number
          </PrimaryButton>
        </ItemDetails>
      </ItemCardContainer>
    </>
  );
};

export default ItemCard;
