import ArrowRight from "../assets/svgs/ArrowRight.svg";
import {
  CategoryLink,
  StyledCategory,
} from "../assets/styles/components/Categories.styled";

interface CategoryLinkProps {
  category: string;
  onSetFilter: (field: string, value: string) => void;
}

const Category = ({ category, onSetFilter }: CategoryLinkProps) => {
  return (
    <StyledCategory
      onClick={() => onSetFilter("category", category.toLocaleLowerCase())}
    >
      <CategoryLink>{category}</CategoryLink>
      <img src={ArrowRight} alt="Right Arrow" />
    </StyledCategory>
  );
};

export default Category;
