import { Link, useNavigate } from "react-router-dom";
import ArrowRight from "../assets/svgs/ArrowRight.svg";
import { StyledCategory } from "../assets/styledComponents/components/Categories.styled";

export type CategoryProps = {
  category: string;
  url: string;
};

const Category = ({ category, url }: CategoryProps) => {
  const navigate = useNavigate();
  return (
    <StyledCategory onClick={() => navigate(url)}>
      <Link to={url} className="fs20">
        {category}
      </Link>
      <img src={ArrowRight} alt="Right Arrow" />
    </StyledCategory>
  );
};

export default Category;
