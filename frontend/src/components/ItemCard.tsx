import { memo } from "react";
import {
  MessageOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { formatDistance } from "date-fns";
import { useNavigate } from "react-router";
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
import { CreatedByTime } from "../assets/styles/components/ItemDetails.styled";
import Location from "../assets/svgs/Location.svg";
import { IItem } from "../interfaces/IItem.interface";
import useModalContext from "../hooks/useModalContext";
import useAuthContext from "../hooks/useAuthContext";

interface IItemCard {
  item: IItem;
}

const ItemCard = ({ item }: IItemCard) => {
  const { handleModal } = useModalContext();
  const {
    state: { user },
  } = useAuthContext();

  const handleOpenProductDetails = () => {
    handleModal(item);
  };

  const relativeTimeString = formatDistance(item.createdAt, new Date(), {
    addSuffix: true,
  });

  const navigate = useNavigate();
  return (
    <ItemCardContainer>
      <ItemImageContainer>
        <ItemImage src={item.images[0]} alt={item.itemName} />
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
        <CreatedByTime>{relativeTimeString}</CreatedByTime>
        <ItemLocation>
          <LocationImage src={Location} alt="location" />
          <LocationName>{item.location}</LocationName>
        </ItemLocation>
        {!user && (
          <PrimaryButton
            width="194px"
            height="34px"
            fontSize="xs"
            type="button"
            onClick={() => {
              navigate("/SignUp");
              window.scroll({ top: 0, behavior: "smooth" });
            }}
          >
            Sign up for phone number
          </PrimaryButton>
        )}
      </ItemDetails>
    </ItemCardContainer>
  );
};

export default memo(ItemCard);
