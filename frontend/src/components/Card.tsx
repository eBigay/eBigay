import {FC} from 'react'
import { useNavigate } from "react-router-dom";

type PrivateProps = {
  title: string;
  description: string;
  imageUrl: string;
  navUrl: string;
};

const CardItem:FC<PrivateProps> = ({
  title,
  description,
  imageUrl,
  navUrl,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <img src={imageUrl} alt={title} />
      <div className="card-info">
        <h1 className="card-title fs24">{title}</h1>
        <p className="card-desc fs12">{description}</p>
        <button
          className="primary-btn clean-btn fs12"
          onClick={() => navigate(navUrl)}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default CardItem;
