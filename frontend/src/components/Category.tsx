import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowRight from "../assets/images/ArrowRight.svg";

export type categoryProps = {
  category: string;
  url: string;
};

const Category: FC<categoryProps> = ({ category, url }) => {
  const navigate = useNavigate();
  return (
    <div
      className="category flex justify-space-between"
      onClick={() => navigate(url)}
    >
      <Link to={url} className="fs20">
        {category}
      </Link>
      <img src={ArrowRight} alt="Right Arrow" />
    </div>
  );
};

export default Category;
