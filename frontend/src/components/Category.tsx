import { Link, useNavigate } from "react-router-dom";
import ArrowRight from "../assets/svgs/ArrowRight.svg";
import {
  CategoryLink,
  StyledCategory,
} from "../assets/styles/components/Categories.styled";

interface CategoryLinkProps {
  category: string;
  url: string;
}

const Category = ({ category, url }: CategoryLinkProps) => {
  const navigate = useNavigate();
  return (
    <StyledCategory onClick={() => navigate(url)}>
      <CategoryLink>
        <Link to={url}>{category}</Link>
      </CategoryLink>
      <img src={ArrowRight} alt="Right Arrow" />
    </StyledCategory>
  );
};

export default Category;
