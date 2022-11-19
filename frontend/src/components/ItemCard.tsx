import { FC } from "react";
import {
  MessageOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
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
    isAvialable: boolean;
    description: string;
  };
}

const ItemCard: FC<IItemCard> = ({ item }) => {
  return (
    <div className="item-card flex column">
      <div className="image-container">
        <img src={item.mainImg} alt={item.itemName} />
        <div className="item-info">
          <div className="iten-info-icon">
            <SearchOutlined />
            <Link to={`/product/${item._id}`} />
          </div>
          <div className="iten-info-icon">
            <MessageOutlined />
          </div>
          <div className="iten-info-icon">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>

      <div className="item-details flex column">
        <h2 className="item-name">{item.itemName}</h2>
        <h4 className="item-category">{item.category}</h4>
        <div className="item-location flex align-center">
          <img src={Location} alt="" />
          <h3 className="location-name">{item.location}</h3>
        </div>
        <button className="primary-btn clean-btn">
          Sign up for phone number
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
