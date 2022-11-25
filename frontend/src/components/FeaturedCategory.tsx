import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ICategoryProps {
  title: string;
  description: string;
  imageUrl: string;
  navUrl: string;
}

const FeaturedCategory: FC<ICategoryProps> = ({
  title,
  description,
  imageUrl,
  navUrl,
}) => {
  const navigate = useNavigate();

  return (
    <div className="category-container">
      <img src={imageUrl} alt={description} />
      <div className="category-info">
        <h1 className="category-title">{title}</h1>
        <p className="category-desc">{description}</p>
        <button
          type="button"
          className="primary-btn clean-btn"
          onClick={() => navigate(navUrl)}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default FeaturedCategory;
